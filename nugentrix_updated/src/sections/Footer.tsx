import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { footerConfig } from '../config';
import { Linkedin, Mail, ArrowUpRight, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Linkedin,
  Mail,
};

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="container-modern relative z-10 pt-20 pb-12">
        <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">
                {footerConfig.logoText}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Building the future together. Software Engineering & Strategic Staffing. 
              Based in Mississauga, Ontario, Canada.
            </p>
            <div className="flex gap-3">
              {footerConfig.socialLinks.map((link, index) => {
                const Icon = iconMap[link.iconName];
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-blue-500 flex items-center justify-center transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold text-white mb-6">{footerConfig.navigationLabel}</h4>
            <ul className="space-y-4">
              {footerConfig.navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-white mb-6">{footerConfig.contactLabel}</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`mailto:${footerConfig.email}`}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {footerConfig.email}
                </a>
              </li>
              <li className="text-slate-400 whitespace-pre-line">
                {footerConfig.locationText}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              {footerConfig.copyright}
            </p>
            <div className="flex gap-6">
              {footerConfig.bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-500 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <p className="text-[20vw] font-bold text-white/[0.02] whitespace-nowrap leading-none translate-y-1/3">
          NUGENTRIX
        </p>
      </div>
    </footer>
  );
}
