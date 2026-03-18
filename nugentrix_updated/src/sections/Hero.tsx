import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Code, Users, Cloud, ChevronDown } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, x: 50 },
        { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      );
      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.9 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="container-modern relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={contentRef} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-600">Mississauga, Ontario · Canada</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-slate-900">Powering</span>
              <br />
              <span className="gradient-text">Software.</span>
              <br />
              <span className="text-slate-900">Empowering</span>
              <br />
              <span className="gradient-text">Talent.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed">
              Nugentrix delivers world-class software engineering and strategic staffing solutions.
              Backed by 15+ years of deep expertise in Java, DevOps, Kubernetes, and cloud architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary inline-flex items-center gap-2">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-8 py-4 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-300">
                Our Services
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Java', 'React', 'Python', 'Kubernetes', 'Docker', 'DevOps', 'AWS', 'Azure'].map((tech) => (
                <span key={tech} className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] lg:h-[520px]">
              {heroImages.map((src, i) => (
                <img key={i} src={src} alt="Nugentrix Technology" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000" style={{ opacity: i === currentImage ? 1 : 0 }} />
              ))}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, i) => (
                  <button key={i} onClick={() => setCurrentImage(i)} className={`h-2 rounded-full transition-all duration-300 ${i === currentImage ? 'bg-white w-6' : 'bg-white/50 w-2'}`} />
                ))}
              </div>
            </div>

            <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">15+</p>
                  <p className="text-sm text-slate-500">Years Exp.</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">Java</p>
                  <p className="text-sm text-slate-500">& DevOps Experts</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 glass-card rounded-2xl p-4 float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">Cloud</p>
                  <p className="text-sm text-slate-500">AWS · Azure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { value: '15+', label: 'Years Experience', sublabel: 'Java, DevOps, K8s' },
            { value: 'Full', label: 'End-to-End Delivery', sublabel: 'Design to Deployment' },
            { value: 'CA', label: 'Canadian Company', sublabel: 'Mississauga, Ontario' },
            { value: '24/7', label: 'Global Coverage', sublabel: 'Canada & North America' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
              <p className="text-3xl lg:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="font-semibold text-slate-900">{stat.label}</p>
              <p className="text-sm text-slate-500">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors">
        <span className="text-sm">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
