import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Code2, Cloud, Users } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85',
  'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=1200&q=85',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85',
];

const techTags = ['Java', 'React', 'Python', 'Kubernetes', 'Docker', 'DevOps', 'AWS', 'Azure'];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setCurrentImage(p => (p + 1) % heroImages.length), 4500);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content stagger
      gsap.fromTo(
        Array.from(leftRef.current?.children || []),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
      );
      // Right image
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'power3.out', delay: 0.4 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #deeaff 0%, #e4eeff 30%, #ddeeff 60%, #ccf5ee 100%)' }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-pattern opacity-80" />

      {/* Soft radial glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(26,110,245,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(0,198,167,0.07) 0%, transparent 70%)' }} />

      <div className="container-modern relative z-10 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── LEFT CONTENT ── */}
          <div ref={leftRef} className="flex flex-col gap-7">

            {/* Location badge */}
            <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border"
              style={{ background: 'rgba(26,110,245,0.06)', borderColor: 'rgba(26,110,245,0.18)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#1a6ef5' }} />
              <span className="text-sm font-semibold" style={{ color: '#1a6ef5', fontFamily: "'DM Sans',sans-serif" }}>
                Mississauga, Ontario · Canada
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(3rem, 5.5vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#0e1b2e',
            }}>
              Powering<br />
              <span className="gradient-text">Software.</span><br />
              Empowering<br />
              <span className="gradient-text">Talent.</span>
            </h1>

            {/* Description */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.1rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#4a6080',
              maxWidth: '520px',
            }}>
              Nugentrix delivers world-class software engineering and strategic staffing solutions.
              Backed by 15+ years of deep expertise in Java, DevOps, Kubernetes, and cloud architecture.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 2rem', borderRadius: '12px', border: '1.5px solid rgba(14,27,46,0.18)',
                  fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: '0.95rem', color: '#0e1b2e',
                  background: 'transparent', transition: 'all 0.3s', textDecoration: 'none', cursor: 'pointer',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#1a6ef5'; (e.currentTarget as HTMLElement).style.color = '#1a6ef5'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,27,46,0.18)'; (e.currentTarget as HTMLElement).style.color = '#0e1b2e'; }}
              >
                Our Services
              </a>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {techTags.map(tag => (
                <span key={tag} style={{
                  padding: '0.35rem 1rem', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(26,110,245,0.14)',
                  fontFamily: "'DM Sans',sans-serif", fontSize: '0.82rem', fontWeight: 500, color: '#4a6080',
                  cursor: 'default', transition: 'all 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div ref={rightRef} className="relative flex justify-center lg:justify-end">

            {/* Main image card */}
            <div className="relative" style={{ width: '100%', maxWidth: '540px' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  height: '460px',
                  boxShadow: '0 30px 80px rgba(26,110,245,0.15), 0 8px 24px rgba(0,0,0,0.1)',
                }}>
                {heroImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Nugentrix Technology"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{ opacity: i === currentImage ? 1 : 0 }}
                  />
                ))}
                {/* Subtle overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(26,110,245,0.12) 0%, transparent 50%)' }} />
                {/* Image dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: i === currentImage ? '24px' : '6px',
                        background: i === currentImage ? 'white' : 'rgba(255,255,255,0.45)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating badge — top right: 15+ Years */}
              <div className="float absolute -top-5 -right-4 glass-card rounded-2xl px-4 py-3 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold" style={{ fontFamily: "'Sora',sans-serif", color: '#0e1b2e', lineHeight: 1.1 }}>15+</p>
                    <p className="text-xs font-medium" style={{ color: '#64748b', fontFamily: "'DM Sans',sans-serif" }}>Years Exp.</p>
                  </div>
                </div>
              </div>

              {/* Floating badge — right middle: Cloud */}
              <div className="float absolute -right-6 top-1/2 -translate-y-1/2 glass-card rounded-2xl px-4 py-3 z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #1a6ef5, #2d9cdb)' }}>
                    <Cloud className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-base font-bold" style={{ fontFamily: "'Sora',sans-serif", color: '#0e1b2e', lineHeight: 1.1 }}>Cloud</p>
                    <p className="text-xs font-medium" style={{ color: '#64748b', fontFamily: "'DM Sans',sans-serif" }}>AWS · Azure</p>
                  </div>
                </div>
              </div>

              {/* Floating badge — bottom left: Java & DevOps */}
              <div className="float absolute -bottom-5 -left-4 glass-card rounded-2xl px-4 py-3 z-20" style={{ animationDelay: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #00c6a7, #1a6ef5)' }}>
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-base font-bold" style={{ fontFamily: "'Sora',sans-serif", color: '#0e1b2e', lineHeight: 1.1 }}>Java</p>
                    <p className="text-xs font-medium" style={{ color: '#64748b', fontFamily: "'DM Sans',sans-serif" }}>&amp; DevOps Experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS ROW ── */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '15+', label: 'Years Experience', sub: 'Java, DevOps, Cloud' },
            { value: 'Full', label: 'End-to-End Delivery', sub: 'Design to Deployment' },
            { value: 'CA', label: 'Canadian Company', sub: 'Mississauga, Ontario' },
            { value: '24/7', label: 'Global Coverage', sub: 'Canada & North America' },
          ].map((s, i) => (
            <div key={i}
              className="text-center rounded-2xl transition-all duration-300"
              style={{
                padding: '1.5rem 1rem',
                background: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(26,110,245,0.1)',
                boxShadow: '0 4px 16px rgba(26,110,245,0.06)',
              }}
            >
              <p className="text-3xl lg:text-4xl font-bold gradient-text mb-1"
                style={{ fontFamily: "'Sora',sans-serif" }}>{s.value}</p>
              <p className="font-semibold text-sm mb-0.5" style={{ color: '#0e1b2e' }}>{s.label}</p>
              <p className="text-xs" style={{ color: '#94a3b8' }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
