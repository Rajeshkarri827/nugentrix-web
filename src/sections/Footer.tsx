import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { footerConfig } from '../config';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = { Linkedin, Mail };

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current?.children || [], { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden" style={{ background: '#0F1D35', color: 'white' }}>
      {/* Top gradient divider */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #1565D8 35%, #2EC4B6 65%, transparent)' }} />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(21,101,216,0.06)' }} />

      <div className="container-modern relative z-10 pt-20 pb-12">
        <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="Nugentrix"
                style={{ height: '42px', maxWidth: '200px', objectFit: 'contain' }}
              />
            </div>
            <p className="leading-relaxed mb-6 max-w-md" style={{ color: '#64748B' }}>
              Building the future together. Software Engineering &amp; Strategic Staffing.
              Based in Mississauga, Ontario, Canada.
            </p>
            <div className="flex gap-3">
              {footerConfig.socialLinks.map((link, i) => {
                const Icon = iconMap[link.iconName];
                return (
                  <a key={i} href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1565D8'; (e.currentTarget as HTMLElement).style.borderColor = '#1565D8'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                    aria-label={link.label}>
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-6">{footerConfig.navigationLabel}</h4>
            <ul className="space-y-4">
              {footerConfig.navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="inline-flex items-center gap-1 group transition-colors" style={{ color: '#64748B' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'white')} onMouseLeave={e => (e.currentTarget.style.color = '#64748B')}>
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">{footerConfig.contactLabel}</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${footerConfig.email}`} className="transition-colors" style={{ color: '#64748B' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')} onMouseLeave={e => (e.currentTarget.style.color = '#64748B')}>
                  {footerConfig.email}
                </a>
              </li>
              <li className="whitespace-pre-line" style={{ color: '#64748B' }}>
                {footerConfig.locationText}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#475569' }}>{footerConfig.copyright}</p>
            <div className="flex gap-6">
              {footerConfig.bottomLinks.map((link, i) => (
                <Link key={i} to={link.href} className="text-sm transition-colors" style={{ color: '#475569', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')} onMouseLeave={e => (e.currentTarget.style.color = '#475569')}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large BG watermark */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <p className="text-[20vw] font-bold whitespace-nowrap leading-none translate-y-1/3" style={{ color: 'rgba(255,255,255,0.02)' }}>
          NUGENTRIX
        </p>
      </div>
    </footer>
  );
}
