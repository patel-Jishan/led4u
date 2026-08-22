import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { projects } from '@/utils/data';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const timelineRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const items = document.querySelectorAll('.timeline-item');

      items.forEach((item, index) => {
        const direction = index % 2 === 0 ? -50 : 50;

        gsap.fromTo(
          item,
          { x: direction, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects | LED4U – Trinayan Corporation</title>
        <meta
          name="description"
          content="Explore our portfolio of government, industrial, and commercial lighting projects across India."
        />
      </Helmet>

      <main className="pt-32 pb-24 min-h-screen bg-black relative">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-full max-w-2xl h-96 bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">

          {/* Page Header */}
          <div className="max-w-3xl mb-24 text-center mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
              Our <span className="text-primary">Legacy</span>
            </h1>

            <p className="text-gray-400 text-lg">
              A track record of flawless execution for municipal corporations,
              smart cities, and heavy industries.
            </p>
          </div>

          {/* ================= PROJECT TIMELINE ================= */}
          <div
            ref={timelineRef}
            className="relative max-w-5xl mx-auto"
          >
            {/* Center Line - Desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

            {/* Mobile Line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10 md:hidden" />

            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="timeline-item relative flex flex-col md:flex-row justify-between items-center w-full mb-16 last:mb-0 group"
              >

                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary z-10 group-hover:scale-150 group-hover:bg-primary transition-all duration-300" />

                {/* Project Content */}
                <div
                  className={`w-full md:w-[45%] pl-16 md:pl-0 pt-2 md:pt-0 ${
                    idx % 2 === 0
                      ? 'md:pr-12 md:text-right'
                      : 'md:order-2 md:pl-12 text-left'
                  }`}
                >
                  <div className="bg-surface border border-white/5 p-8 rounded-sm hover:border-primary/50 transition-colors relative overflow-hidden group-hover:bg-white/[0.03]">

                    {/* Hover Glow */}
                    <div
                      className={`absolute top-0 w-32 h-32 bg-primary/5 blur-[40px] pointer-events-none ${
                        idx % 2 === 0 ? 'right-0' : 'left-0'
                      }`}
                    />

                    {/* Category */}
                    <div
                      className={`flex flex-wrap gap-2 mb-4 ${
                        idx % 2 === 0
                          ? 'md:justify-end'
                          : 'justify-start'
                      }`}
                    >
                      <span className="px-3 py-1 bg-white/5 text-primary text-xs font-semibold uppercase tracking-wider rounded-sm">
                        {project.category}
                      </span>

                      {/* Year */}
                      {/*
                      <span className="px-3 py-1 bg-white/5 text-white text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center gap-1">
                        <Calendar size={12} />
                        {project.year}
                      </span>
                      */}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Client & Location */}
                    <div
                      className={`flex flex-col gap-2 mb-4 text-sm text-gray-400 ${
                        idx % 2 === 0
                          ? 'md:items-end'
                          : 'items-start'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Briefcase
                          size={14}
                          className="text-gray-500"
                        />
                        <span>{project.client}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin
                          size={14}
                          className="text-gray-500"
                        />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Empty Side for Timeline Layout */}
                <div
                  className={`hidden md:block w-[45%] ${
                    idx % 2 === 0 ? 'order-2' : ''
                  }`}
                />
              </div>
            ))}
          </div>

          {/* ================= MORE PROJECTS CTA ================= */}
          <div className="mt-24 text-center max-w-3xl mx-auto">
            <div className="bg-surface border border-white/5 p-10 md:p-12 rounded-sm hover:border-primary/30 transition-colors">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to See More{' '}
                <span className="text-primary">Projects?</span>
              </h2>

              <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Explore more of our lighting, industrial, and infrastructure
                work. Get in touch with us to learn more about our projects
                and services.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-primary text-black font-semibold uppercase tracking-wider rounded-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>

            </div>
          </div>

        </div>
      </main>
    </>
  );
}