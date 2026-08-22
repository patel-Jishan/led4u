import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    if (!progressRef.current) return;

    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9998] pointer-events-none">
      <div 
        ref={progressRef}
        className="w-full h-full bg-primary origin-left scale-x-0 glow-amber"
      />
    </div>
  );
}
