import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Users, Cloud, CheckCircle, ArrowUpRight } from 'lucide-react';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = { Code, Users, Cloud, CheckCircle };

const cardAccents = ['#1565D8', '#2EC4B6', '#1565D8', '#2EC4B6'];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current?.children || [], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
      gsap.fromTo(cardsRef.current?.children || [], { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: cardsRef.current, start: 'top 75%', toggleActions: 'play none none reverse' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding relative" style={{ background: 'var(--bg-1)' }}>
      <div className="absolute inset-0 dot-pattern" style={{ opacity: 0.4 }} />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(21,101,216,0.04)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(46,196,182,0.04)' }} />

      <div className="container-modern relative z-10">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: 'rgba(21,101,216,0.08)', border: '1px solid rgba(21,101,216,0.18)', color: '#1565D8' }}>
            {servicesConfig.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#0F1D35' }}>
            {servicesConfig.titleLine1}{' '}
            <span className="gradient-text">{servicesConfig.titleLine2Italic}</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#4A6080' }}>
            {servicesConfig.description}
          </p>
        </div>

        {/* Cards grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {servicesConfig.services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Code;
            const accent = cardAccents[index];
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 overflow-hidden transition-all duration-300"
                style={{
                  border: '1px solid rgba(21,101,216,0.1)',
                  boxShadow: '0 2px 16px rgba(21,101,216,0.05)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px rgba(21,101,216,0.12)`; (e.currentTarget as HTMLElement).style.borderColor = `${accent}40`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(21,101,216,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,101,216,0.1)'; }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${accent}, ${accent === '#1565D8' ? '#2EC4B6' : '#1565D8'})` }} />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 gradient-bg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: '#0F1D35' }}>
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: accent }} />
                  </h3>
                  <p className="leading-relaxed mb-6" style={{ color: '#4A6080' }}>{service.description}</p>
                  <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 font-semibold group/link" style={{ color: accent }}>
                    <span className="relative">Learn More<span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover/link:w-full transition-all duration-300" style={{ background: accent }} /></span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>

                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-40" style={{ background: `radial-gradient(circle at top right, ${accent}14, transparent)` }} />
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6" style={{ color: '#4A6080' }}>Need a custom solution? Let's discuss your requirements.</p>
          <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary">
            Start a Project <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
