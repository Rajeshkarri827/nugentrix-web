import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,1)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(26,110,245,0.12)' : '1px solid rgba(26,110,245,0.08)',
        boxShadow: scrolled ? '0 4px 20px rgba(26,110,245,0.08)' : '0 1px 0 rgba(26,110,245,0.06)',
      }}
    >
      <div className="container-modern flex items-center justify-between" style={{ height: '72px' }}>

        {/* Logo — full logo.png on the left */}
        <a
          href="#home"
          onClick={e => { e.preventDefault(); scrollTo('#home'); }}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <img
            src="/logo.png"
            alt="Nugentrix"
            style={{ height: '44px', width: 'auto', maxWidth: '180px', objectFit: 'contain', display: 'block' }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => { e.preventDefault(); scrollTo(link.href); }}
              style={{
                padding: '0.55rem 1.1rem', borderRadius: '8px',
                fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: '0.9rem',
                color: '#4a6080', textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#1a6ef5'; (e.currentTarget as HTMLElement).style.background = 'rgba(26,110,245,0.06)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4a6080'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
            className="btn-primary"
            style={{ marginLeft: '0.75rem', padding: '0.6rem 1.4rem', fontSize: '0.85rem', borderRadius: '10px' }}
          >
            Get Started
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#4a6080' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: 'white', borderTop: '1px solid rgba(26,110,245,0.1)' }}>
          <div className="container-modern py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  display: 'block', padding: '0.75rem 1rem', borderRadius: '8px',
                  fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: '0.9rem',
                  color: '#4a6080', textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
              className="btn-primary"
              style={{ marginTop: '0.5rem', justifyContent: 'center', fontSize: '0.85rem' }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
