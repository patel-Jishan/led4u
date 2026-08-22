import { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { statistics } from '@/utils/data';
import gsap from 'gsap';

export default function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView && containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [inView]);

  return (
    <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-32 bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div ref={ref}>
          <div 
            ref={containerRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center"
          >
            {statistics.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-lg bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors flex items-center">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} separator="," />
                  ) : (
                    "0"
                  )}
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
