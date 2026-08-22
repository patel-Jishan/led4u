import { useRef, useEffect } from 'react';
import { servicesList } from '@/utils/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(
        '.service-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 bg-background relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div ref={headerRef} className="mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-6">
            Comprehensive <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-glow">Lighting Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            From heavy-duty industrial high masts to aesthetic smart city street lighting, we deliver end-to-end solutions designed for reliability and performance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {servicesList.map((service, idx) => (
            <Link 
              to="/products"
              key={idx} 
              className="service-card group relative p-6 bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:bg-white/[0.04] transition-colors"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
              
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors relative z-10">
                {service}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
