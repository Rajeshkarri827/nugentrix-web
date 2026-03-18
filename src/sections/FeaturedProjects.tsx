import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { featuredProjectsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProjects() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headingRef  = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current?.children || [], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
      gsap.fromTo(projectsRef.current?.children || [], { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: projectsRef.current, start: 'top 70%', toggleActions: 'play none none reverse' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding relative" style={{ background: '#FFFFFF' }}>
      <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.3 }} />

      <div className="container-modern relative z-10">
        <div ref={headingRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: 'rgba(46,196,182,0.08)', border: '1px solid rgba(46,196,182,0.22)', color: '#18A99C' }}>
              {featuredProjectsConfig.subtitle}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#0F1D35' }}>
              {featuredProjectsConfig.titleRegular}{' '}
              <span className="gradient-text">{featuredProjectsConfig.titleItalic}</span>
            </h2>
            <p className="mt-4 max-w-xl" style={{ color: '#4A6080' }}>
              Our team brings deep technical expertise across the full software delivery lifecycle — from architecture to deployment, engineering to talent.
            </p>
          </div>
          <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 font-semibold group shrink-0" style={{ color: '#1565D8' }}>
            Start a Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 gap-8">
          {featuredProjectsConfig.projects.map((project) => (
            <div key={project.id} className="group relative rounded-3xl overflow-hidden transition-all duration-300"
              style={{ background: 'var(--bg-1)', border: '1px solid rgba(21,101,216,0.08)', boxShadow: '0 2px 16px rgba(21,101,216,0.05)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(21,101,216,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,101,216,0.22)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(21,101,216,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,101,216,0.08)'; }}
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,29,53,0.8) 30%, rgba(15,29,53,0.15) 100%)' }} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-sm font-semibold" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', color: '#0F1D35' }}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full text-sm font-semibold text-white gradient-bg">
                    {project.year}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 transition-colors" style={{ color: '#0F1D35' }} onMouseEnter={e => (e.currentTarget.style.color = '#1565D8')} onMouseLeave={e => (e.currentTarget.style.color = '#0F1D35')}>
                  {project.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#4A6080' }}>{project.description}</p>
              </div>
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/20 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
