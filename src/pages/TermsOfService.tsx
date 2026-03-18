import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms of Service — Nugentrix';
  }, []);

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing or using the Nugentrix website (nugentrix.com) or any services provided by Nugentrix Inc. ("Nugentrix", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.

These Terms apply to all visitors, clients, job seekers, and any other users of our website or services.`,
    },
    {
      title: '2. About Our Services',
      content: `Nugentrix provides two core categories of services:

Software Engineering Services — including custom software development, Java development, UI/UX development, DevOps, cloud infrastructure (AWS, Azure), Kubernetes, Docker, and related technology consulting.

Strategic Staffing Services — including permanent placement, temporary staffing, and contract staffing of technology professionals in roles such as Java developers, DevOps engineers, cloud architects, React developers, and full-stack developers.

Service engagements are subject to separate written agreements between Nugentrix and the client.`,
    },
    {
      title: '3. Use of This Website',
      content: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:

• Submit false, misleading, or fraudulent information through our contact form
• Attempt to gain unauthorized access to any part of our website or systems
• Use automated tools to scrape, crawl, or extract content from this website
• Transmit viruses, malware, or any harmful code
• Use this website in any way that violates applicable Canadian federal or provincial law

We reserve the right to restrict or terminate access to anyone who violates these conditions.`,
    },
    {
      title: '4. Contact Form and Submissions',
      content: `By submitting our contact form, you confirm that:

• The information you provide is accurate and truthful
• You are authorized to share any documents or files you upload (including résumés)
• You consent to Nugentrix using your submission to respond to your inquiry

For job seekers: submitting your résumé does not guarantee placement or employment. Nugentrix will review your profile and contact you if a suitable opportunity arises.

For clients: submitting a project inquiry does not constitute a binding contract. A formal engagement requires a separate written agreement signed by both parties.`,
    },
    {
      title: '5. Intellectual Property',
      content: `All content on this website — including text, graphics, logos, images, and software — is the property of Nugentrix Inc. or its content suppliers and is protected by Canadian copyright law and applicable international laws.

You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.

The Nugentrix name, logo, and brand marks are trademarks of Nugentrix Inc. Unauthorized use is prohibited.`,
    },
    {
      title: '6. Disclaimer of Warranties',
      content: `This website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.

Nugentrix does not warrant that:
• The website will be uninterrupted, error-free, or secure
• Any information on the website is complete, accurate, or current
• Any defects will be corrected

Use of this website is at your own risk.`,
    },
    {
      title: '7. Limitation of Liability',
      content: `To the maximum extent permitted by applicable law, Nugentrix Inc. and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:

• Your use of or inability to use this website
• Any errors or omissions in website content
• Any unauthorized access to or alteration of your submissions

Our total liability for any claim arising from the use of this website shall not exceed CAD $100.`,
    },
    {
      title: '8. Third-Party Links',
      content: `Our website may contain links to third-party websites such as LinkedIn or job boards. These links are provided for convenience only. Nugentrix has no control over the content of those websites and accepts no responsibility or liability for them or for any loss or damage that may arise from your use of them.`,
    },
    {
      title: '9. Privacy',
      content: `Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.`,
    },
    {
      title: '10. Governing Law',
      content: `These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.

Any disputes arising out of or relating to these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of Ontario, Canada.`,
    },
    {
      title: '11. Changes to These Terms',
      content: `We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with a revised "Last Updated" date. Your continued use of the website after any changes constitutes your acceptance of the updated Terms.

We encourage you to review these Terms periodically.`,
    },
    {
      title: '12. Severability',
      content: `If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, it shall be removed. The remaining provisions shall continue in full force and effect.`,
    },
    {
      title: '13. Contact Us',
      content: `If you have any questions about these Terms of Service, please contact us:

Nugentrix Inc.
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
      <div style={{ background: '#0F1D35' }}>
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
            Terms of Service
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
            Last Updated: March 1, 2026 &nbsp;·&nbsp; Effective Date: March 1, 2026
          </p>
          <p style={{ color: '#475569', fontSize: '1rem', marginTop: '16px', lineHeight: 1.7 }}>
            These Terms of Service govern your use of the Nugentrix website and services.
            Please read them carefully before using our website or engaging our services.
            By using our website, you accept these terms in full.
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
            Questions about these terms? Email us at{' '}
            <a href="mailto:info@nugentrix.com" style={{ color: '#1a6ef5', textDecoration: 'none', fontWeight: 600 }}>
              info@nugentrix.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
