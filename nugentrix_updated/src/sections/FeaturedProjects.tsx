import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { featuredProjectsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

      // Projects animation
      gsap.fromTo(
        projectsRef.current?.children || [],
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section-padding relative bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-modern relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-600 text-sm font-semibold mb-6">
              {featuredProjectsConfig.subtitle}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              {featuredProjectsConfig.titleRegular}{' '}
              <span className="gradient-text">{featuredProjectsConfig.titleItalic}</span>
            </h2>
            <p className="text-slate-600 mt-4 max-w-xl">
              Our team brings deep technical expertise across the full software delivery lifecycle — from architecture to deployment, engineering to talent.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold group shrink-0"
          >
            Start a Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {featuredProjectsConfig.projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-50 rounded-3xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold text-slate-900">
                    {project.category}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 rounded-full bg-blue-500 text-sm font-semibold text-white">
                    {project.year}
                  </span>
                </div>

                {/* View Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
