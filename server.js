import express                          from 'express';
import cors                             from 'cors';
import multer, { memoryStorage }        from 'multer';
import path                             from 'path';
import { fileURLToPath }                from 'url';
import { ClientSecretCredential }       from '@azure/identity';
import { Client }                       from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials/index.js';
import 'dotenv/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app       = express();
const PORT      = process.env.PORT || 3001;
const isProd    = process.env.NODE_ENV === 'production';

// ── Microsoft Graph Client (OAuth2 — no password needed) ──────────────────────
const credential = new ClientSecretCredential(
  process.env.M365_TENANT_ID,       // Directory (tenant) ID
  process.env.M365_CLIENT_ID,       // Application (client) ID
  process.env.M365_CLIENT_SECRET,   // Client secret Value
);

const authProvider = new TokenCredentialAuthenticationProvider(credential, {
  scopes: ['https://graph.microsoft.com/.default'],
});

const graphClient = Client.initWithMiddleware({ authProvider });

// Test connection on startup
graphClient.api('/users').top(1).get()
  .then(() => console.log('✅  Microsoft Graph connected — ready to send emails'))
  .catch(err => console.error('❌  Microsoft Graph connection failed:', err.message));

// ── Multer — receive uploaded files in memory ─────────────────────────────────
const upload = multer({
  storage: memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 5 },
  fileFilter: (_req, file, cb) => {
    const allowed = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    allowed.includes(file.mimetype)
      ? cb(null, true)
      : cb(new Error('Only PDF, DOC, DOCX files are allowed.'));
  },
});

// ── Middleware ────────────────────────────────────────────────────────────────
// Allow CORS in development
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }));

// ── Always serve built React app (dist/ folder) ───────────────────────────────
app.use(express.static(path.join(__dirname, 'dist')));

// ── POST /api/contact ─────────────────────────────────────────────────────────
app.post('/api/contact', upload.array('attachments', 5), async (req, res) => {
  const { name, email, inquiryType, message } = req.body;

  // Validation
  if (!name || !email || !inquiryType || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }
  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({ success: false, error: 'Name must be between 2 and 100 characters.' });
  }
  if (email.length > 254) {
    return res.status(400).json({ success: false, error: 'Email address is too long (max 254 characters).' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address.' });
  }
  if (message.length > 1500) {
    return res.status(400).json({ success: false, error: 'Message is too long (max 1500 characters).' });
  }

  const sendingUser = process.env.M365_USER;   // licensed account that authenticates (nagarjuna@nugentrix.com)
  const fromEmail   = process.env.FROM_EMAIL;  // displayed as sender (info@nugentrix.com)
  const toEmail   = process.env.TO_EMAIL || 'info@nugentrix.com';
  const hasFiles  = (req.files || []).length > 0;

  // Build attachments for Microsoft Graph format
  const attachments = (req.files || []).map(file => ({
    '@odata.type':  '#microsoft.graph.fileAttachment',
    name:           file.originalname,
    contentType:    file.mimetype,
    contentBytes:   file.buffer.toString('base64'),  // Graph API requires base64
  }));

  const attachmentNote = hasFiles
    ? `<div style="margin-top:16px;padding:16px 20px;background:#f0fdf4;border-radius:8px;border-left:3px solid #22c55e;">
        <p style="margin:0;font-size:13px;color:#166534;">📎 <strong>${attachments.length} attachment${attachments.length > 1 ? 's' : ''}</strong> included: ${attachments.map(a => a.name).join(', ')}</p>
       </div>`
    : '';

  // ── Notification email → info@nugentrix.com ───────────────────────────────
  const notificationMail = {
    message: {
      subject: `New Contact Form — ${inquiryType} — ${name}`,
      body: {
        contentType: 'HTML',
        content: `
          <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:linear-gradient(135deg,#1a6ef5 0%,#00c6a7 100%);padding:32px 40px;border-radius:12px 12px 0 0;">
              <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">New Contact Form Submission</h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Received from the Nugentrix website</p>
            </div>
            <div style="padding:32px 40px;background:#f8fafc;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;width:130px;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.08em;">Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0f172a;font-weight:600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.08em;">Email</td>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><a href="mailto:${email}" style="font-size:15px;color:#1a6ef5;text-decoration:none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.08em;">Inquiry</td>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><span style="display:inline-block;padding:3px 10px;border-radius:20px;background:rgba(26,110,245,0.1);color:#1a6ef5;font-size:13px;font-weight:600;">${inquiryType}</span></td>
                </tr>
              </table>
              <div style="margin-top:24px;">
                <p style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 10px;">Message</p>
                <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
                  <p style="margin:0;font-size:15px;color:#334155;line-height:1.7;white-space:pre-wrap;">${message}</p>
                </div>
              </div>
              ${attachmentNote}
              <div style="margin-top:16px;padding:16px 20px;background:#eff6ff;border-radius:8px;border-left:3px solid #1a6ef5;">
                <p style="margin:0;font-size:13px;color:#1e40af;">💡 <strong>Reply To:</strong> ${name} — ${email}</p>
              </div>
            </div>
          </div>`,
      },
      from: {
        emailAddress: { address: fromEmail },
      },
      toRecipients: [
        { emailAddress: { address: toEmail } },
      ],
      replyTo: [
        { emailAddress: { name, address: email } },
      ],
      attachments,
    },
    saveToSentItems: false,
  };

  // ── Auto-reply → sender ───────────────────────────────────────────────────
  const autoReplyMail = {
    message: {
      subject: `We received your message — Nugentrix`,
      body: {
        contentType: 'HTML',
        content: `
          <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:linear-gradient(135deg,#1a6ef5 0%,#00c6a7 100%);padding:32px 40px;border-radius:12px 12px 0 0;">
              <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">Thanks for reaching out, ${name}!</h1>
            </div>
            <div style="padding:32px 40px;background:#f8fafc;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
              <p style="font-size:15px;color:#334155;line-height:1.7;margin:0 0 16px;">
                We have received your message and will get back to you within <strong>24 hours</strong>.
              </p>
              <p style="font-size:15px;color:#334155;line-height:1.7;margin:0 0 16px;">
                If you need immediate assistance, please contact us at
                <a href="mailto:info@nugentrix.com" style="color:#1a6ef5;font-weight:600;"> info@nugentrix.com</a>
                or call us at <strong>+1 (226) 507-3171</strong>.
              </p>
              <div style="padding:16px 20px;background:#fff;border-radius:8px;border:1px solid #e2e8f0;margin-bottom:24px;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.08em;">Your message</p>
                <p style="margin:0;font-size:14px;color:#64748b;line-height:1.6;white-space:pre-wrap;">${message}</p>
              </div>
              <p style="font-size:14px;color:#64748b;margin:0;">— The Nugentrix Team<br/><em>Powering Software. Empowering Talent.</em></p>
            </div>
            <div style="padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0;margin-top:8px;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                <strong>This is an automated message.</strong> <em>Replies to this email are not monitored.</em>
              </p>
            </div>
          </div>`,
      },
      from: {
        emailAddress: { address: fromEmail },
      },
      toRecipients: [
        { emailAddress: { address: email } },
      ],
    },
    saveToSentItems: false,
  };

  try {
    // Send both emails via Microsoft Graph API
    await Promise.all([
      graphClient.api(`/users/${sendingUser}/sendMail`).post(notificationMail),
      graphClient.api(`/users/${sendingUser}/sendMail`).post(autoReplyMail),
    ]);

    console.log(`📧  Sent: ${name} <${email}> — ${inquiryType}${hasFiles ? ` — ${attachments.length} file(s)` : ''}`);
    res.json({ success: true });

  } catch (err) {
    console.error('❌  Graph API error:', err.message);
    res.status(500).json({
      success: false,
      error: 'Failed to send. Please email info@nugentrix.com directly.',
    });
  }
});

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

// ── All other routes → React app (handles client-side routing) ───────────────
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚀  Nugentrix server on http://localhost:${PORT}`);
  console.log(`   Serving React app from dist/ + Email API\n`);
});
