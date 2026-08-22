import { useRef, useEffect } from 'react';
import { whyChooseUs } from '@/utils/data';
import * as Icons from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WhyChooseUs() {
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
        '.feature-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 bg-black relative border-y border-white/5" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            The LED4U Advantage
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6">
            Engineered for <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We don't just supply lights; we build infrastructure. Our commitment to quality and execution makes us the preferred choice for major government and industrial projects.
          </p>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((feature, idx) => {
            const Icon = Icons[feature.icon];
            
            return (
              <div 
                key={idx} 
                className="feature-card group p-8 bg-surface rounded-sm border border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
                
                <div className="w-14 h-14 bg-background border border-white/10 flex items-center justify-center rounded-sm mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  {Icon && <Icon className="text-primary" size={24} strokeWidth={1.5} />}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
