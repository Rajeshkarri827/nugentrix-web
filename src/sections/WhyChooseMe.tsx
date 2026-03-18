import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseMeConfig } from '../config';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function WhyChooseMe() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headingRef   = useRef<HTMLDivElement>(null);
  const statsRef     = useRef<HTMLDivElement>(null);
  const cardsRef     = useRef<HTMLDivElement>(null);
  const wideImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const anim = (target: HTMLElement | null, opts = {}) =>
        gsap.fromTo(target?.children || target || [], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: target, start: 'top 80%', toggleActions: 'play none none reverse' }, ...opts });
      anim(headingRef.current);
      anim(statsRef.current);
      anim(cardsRef.current);
      gsap.fromTo(wideImageRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: wideImageRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
      <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.5 }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(21,101,216,0.05)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(46,196,182,0.05)' }} />

      <div className="container-modern relative z-10">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: 'rgba(46,196,182,0.08)', border: '1px solid rgba(46,196,182,0.22)', color: '#18A99C' }}>
            {whyChooseMeConfig.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#0F1D35' }}>
            {whyChooseMeConfig.titleRegular}{' '}
            <span className="gradient-text">{whyChooseMeConfig.titleItalic}</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <p className="text-center text-xs font-bold uppercase tracking-wider mb-8" style={{ color: '#94A3B8', letterSpacing: '0.2em' }}>
            {whyChooseMeConfig.statsLabel}
          </p>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseMeConfig.stats.map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-3xl transition-all duration-300"
                style={{ background: '#FFFFFF', border: '1px solid rgba(21,101,216,0.1)', boxShadow: '0 2px 16px rgba(21,101,216,0.05)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(21,101,216,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,101,216,0.22)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(21,101,216,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,101,216,0.1)'; }}
              >
                <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.value}{stat.suffix}</p>
                <p style={{ color: '#4A6080' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-16">
          {whyChooseMeConfig.featureCards.map((card, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(21,101,216,0.08)' }}>
              <div className="relative h-80 lg:h-96">
                <img src={card.image} alt={card.imageAlt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,29,53,0.92) 40%, rgba(15,29,53,0.35) 100%)' }} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{card.description}</p>
              </div>
              {/* Hover teal overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(21,101,216,0.15) 0%, transparent 60%)' }} />
            </div>
          ))}
        </div>

        {/* Wide banner */}
        <div ref={wideImageRef} className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(21,101,216,0.1)' }}>
          <div className="relative" style={{ height: '400px' }}>
            <img src={whyChooseMeConfig.wideImage} alt={whyChooseMeConfig.wideImageAlt} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(15,29,53,0.94) 40%, rgba(15,29,53,0.65) 65%, rgba(15,29,53,0.2) 100%)' }} />
            {/* brand accent bar */}
            <div className="absolute top-0 left-0 w-1 h-full" style={{ background: 'linear-gradient(to bottom, #1565D8, #2EC4B6)' }} />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="p-8 lg:p-16 max-w-2xl">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{whyChooseMeConfig.wideTitle}</h3>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>{whyChooseMeConfig.wideDescription}</p>
              <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white transition-all duration-300 hover:bg-blue-50"
                style={{ color: '#1565D8', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                Work With Us <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
