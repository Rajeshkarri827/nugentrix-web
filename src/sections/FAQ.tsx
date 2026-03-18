import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faqConfig } from '../config';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        faqsRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: faqsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative" style={{background:'#FFFFFF'}}
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-modern relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div ref={headingRef} className="lg:sticky lg:top-32 lg:self-start">
            <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-600 text-sm font-semibold mb-6">
              {faqConfig.subtitle}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{color:"#0F1D35"}}>
              {faqConfig.titleRegular}{' '}
              <span className="gradient-text">{faqConfig.titleItalic}</span>
            </h2>
            <p className="text-lg mb-8">
              Got questions? We've got answers. If you don't find what you're looking for, feel free to reach out.
            </p>
            
            {/* CTA Card */}
            <div ref={ctaRef} className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-8 text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {faqConfig.ctaText}
              </h3>
              <p className="text-white/80 mb-6">
                Our team is here to help. Get in touch and we'll respond within 24 hours.
              </p>
              <a 
                href={faqConfig.ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {faqConfig.ctaButtonText}
              </a>
            </div>
          </div>

          {/* Right Column - FAQs */}
          <div ref={faqsRef} className="space-y-4">
            {faqConfig.faqs.map((faq) => (
              <div 
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  openId === faq.id 
                    ? 'bg-blue-50/60 border-blue-200' 
                    : 'bg-white border-blue-100/60 hover:border-blue-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      openId === faq.id 
                        ? 'gradient-bg' 
                        : 'bg-slate-100'
                    }`}>
                      <HelpCircle className={`w-5 h-5 ${
                        openId === faq.id ? 'text-white' : 'text-slate-500'
                      }`} />
                    </div>
                    <span className="font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === faq.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
