import { useEffect, useRef } from 'react';
import { clientMarquee } from '@/utils/data';
import gsap from 'gsap';

export default function Clients() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    
    // Simple marquee animation
    const content = scrollerRef.current.querySelector('.marquee-content');
    if (!content) return;
    
    // Clone content for seamless loop
    const clone = content.cloneNode(true);
    scrollerRef.current.appendChild(clone);
    
    gsap.to(scrollerRef.current.children, {
      xPercent: -100,
      repeat: -1,
      duration: 30,
      ease: "none"
    });
  }, []);

  return (
    <section className="py-16 bg-background border-y border-white/5 overflow-hidden flex flex-col items-center">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-8">Trusted by</p>
      
      <div 
        ref={scrollerRef} 
        className="flex whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-500"
      >
        <div className="marquee-content flex items-center gap-12 px-6">
          {clientMarquee.map((client, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <span className="text-2xl md:text-4xl font-display font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                {client}
              </span>
              <span className="text-primary text-xl">*</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
