import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseMeConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function WhyChooseMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const wideImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats animation with counter
      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Wide image animation
      gsap.fromTo(
        wideImageRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wideImageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding relative bg-slate-900 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-modern relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-blue-300 text-sm font-semibold mb-6">
            {whyChooseMeConfig.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {whyChooseMeConfig.titleRegular}{' '}
            <span className="gradient-text">{whyChooseMeConfig.titleItalic}</span>
          </h2>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <p className="text-center text-blue-300 text-sm font-semibold uppercase tracking-wider mb-8">
            {whyChooseMeConfig.statsLabel}
          </p>
          <div 
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseMeConfig.stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {whyChooseMeConfig.featureCards.map((card, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-80 lg:h-96">
                <img 
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Wide Image Banner */}
        <div 
          ref={wideImageRef}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="relative h-80 lg:h-[400px]">
            <img 
              src={whyChooseMeConfig.wideImage}
              alt={whyChooseMeConfig.wideImageAlt}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="p-8 lg:p-16 max-w-2xl">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {whyChooseMeConfig.wideTitle}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                {whyChooseMeConfig.wideDescription}
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl font-semibold text-slate-900 bg-white hover:bg-blue-50 transition-colors"
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
