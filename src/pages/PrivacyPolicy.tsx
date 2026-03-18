import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy — Nugentrix';
  }, []);

  const sections = [
    {
      title: '1. Who We Are',
      content: `Nugentrix Inc. ("Nugentrix", "we", "us", or "our") is a software engineering and strategic staffing company incorporated in Ontario, Canada. Our registered address is 30 Eglinton Ave W, Suite 400, Mississauga, Ontario L5R 3E7.

This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit nugentrix.com or submit an inquiry through our contact form.`,
    },
    {
      title: '2. Information We Collect',
      content: `When you contact us through our website, we may collect the following personal information:

• Full name
• Email address
• Inquiry type (job seeker, client, staffing request, or general inquiry)
• Message content
• Résumé or documents you voluntarily attach (PDF, DOC, DOCX)

We do not collect payment information, government identification, or sensitive personal data through this website.`,
    },
    {
      title: '3. How We Use Your Information',
      content: `We use the information you provide solely to:

• Respond to your inquiry or job application
• Connect qualified candidates with relevant employment opportunities
• Discuss potential software development or staffing engagements with clients
• Send you a confirmation that your message was received

We do not use your information for automated decision-making or profiling.`,
    },
    {
      title: '4. Legal Basis for Processing',
      content: `We process your personal information based on your consent — by submitting our contact form, you voluntarily provide your information and consent to us using it for the purposes described above.

You may withdraw your consent at any time by contacting us at info@nugentrix.com. Withdrawal of consent does not affect the lawfulness of processing before withdrawal.`,
    },
    {
      title: '5. How We Store and Protect Your Information',
      content: `Your information is transmitted securely using industry-standard encryption (HTTPS/TLS). Emails containing your personal information are stored in our Microsoft 365 mailbox, which is protected by Microsoft's enterprise-grade security.

We retain your information only as long as necessary to fulfill the purpose it was collected for, or as required by applicable law. Résumés and inquiry messages are retained for a maximum of 2 years unless you request earlier deletion.`,
    },
    {
      title: '6. Sharing Your Information',
      content: `We do not sell, rent, or trade your personal information to any third party.

We may share your information only in the following limited circumstances:

• With members of the Nugentrix team who need it to respond to your inquiry
• With prospective employer clients, but only with your explicit consent as part of a staffing placement process
• If required by law, court order, or regulatory authority in Canada`,
    },
    {
      title: '7. Cookies and Tracking',
      content: `Our website does not use tracking cookies, analytics platforms, or advertising pixels. We do not track your behaviour across other websites. The website may use essential browser storage only to support basic functionality.`,
    },
    {
      title: '8. Your Rights Under PIPEDA',
      content: `Under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to:

• Know what personal information we hold about you
• Access your personal information upon written request
• Correct inaccurate or incomplete information
• Withdraw consent for us to use your information
• Request deletion of your personal information

To exercise any of these rights, please contact our Privacy Officer at info@nugentrix.com. We will respond within 30 days.`,
    },
    {
      title: '9. Residents of the European Economic Area (EEA)',
      content: `If you are located in the EEA, you also have rights under the General Data Protection Regulation (GDPR), including the right to data portability and the right to lodge a complaint with your local supervisory authority.

Our legal basis for processing EEA residents' data is Article 6(1)(a) — consent.`,
    },
    {
      title: '10. Third-Party Links',
      content: `Our website may contain links to third-party websites such as LinkedIn. We are not responsible for the privacy practices of those websites. We encourage you to review their privacy policies before providing any personal information.`,
    },
    {
      title: '11. Children\'s Privacy',
      content: `Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately at info@nugentrix.com.`,
    },
    {
      title: '12. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on this page with a revised "Last Updated" date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.`,
    },
    {
      title: '13. Contact Us',
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:

Nugentrix Inc.
Privacy Officer
30 Eglinton Ave W, Suite 400
Mississauga, Ontario L5R 3E7
Canada

Email: info@nugentrix.com
Phone: (226) 507-3171`,
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header bar */}
      <div style={{ background: '#0F1D35', padding: '0' }}>
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #1a6ef5 35%, #00c6a7 65%, transparent)' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Nugentrix" style={{ height: '38px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </Link>
          <Link
            to="/"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Title */}
        <div style={{ marginBottom: '48px', paddingBottom: '32px', borderBottom: '1px solid #e2e8f0' }}>
          <span style={{
            display: 'inline-block', padding: '4px 14px', borderRadius: '20px',
            background: 'rgba(26,110,245,0.1)', color: '#1a6ef5',
            fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.08em', marginBottom: '16px',
          }}>
            Legal
          </span>
          <h1 style={{
            fontFamily: "'Sora', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0e1b2e',
            margin: '0 0 16px', lineHeight: 1.2,
          }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
            Last Updated: March 1, 2026 &nbsp;·&nbsp; Effective Date: March 1, 2026
          </p>
          <p style={{ color: '#475569', fontSize: '1rem', marginTop: '16px', lineHeight: 1.7 }}>
            At Nugentrix, we are committed to protecting your privacy and handling your personal
            information with transparency and care. This policy describes how we collect, use,
            and safeguard your data in compliance with Canada's PIPEDA and applicable privacy laws.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {sections.map((section, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: '12px', padding: '28px 32px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}>
              <h2 style={{
                fontFamily: "'Sora', sans-serif", fontWeight: 700,
                fontSize: '1.05rem', color: '#0e1b2e',
                margin: '0 0 14px', paddingBottom: '12px',
                borderBottom: '2px solid rgba(26,110,245,0.1)',
              }}>
                {section.title}
              </h2>
              <p style={{
                color: '#475569', lineHeight: 1.8, margin: 0,
                fontSize: '0.95rem', whiteSpace: 'pre-line',
              }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{
          marginTop: '48px', padding: '20px 28px', borderRadius: '12px',
          background: 'rgba(26,110,245,0.06)', border: '1px solid rgba(26,110,245,0.15)',
          textAlign: 'center',
        }}>
          <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem' }}>
            Questions about this policy? Email us at{' '}
            <a href="mailto:info@nugentrix.com" style={{ color: '#1a6ef5', textDecoration: 'none', fontWeight: 600 }}>
              info@nugentrix.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
