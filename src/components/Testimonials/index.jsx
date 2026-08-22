import { useRef, useEffect } from 'react';
import { testimonials } from '@/utils/data';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 bg-black relative" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-primary/5 to-black pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">
            Client Feedback
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Trust <span className="text-primary">Earned</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center text-center px-4 md:px-12">
                  <Quote className="text-primary/40 w-16 h-16 mb-8" />
                  <p className="text-2xl md:text-3xl text-white font-display leading-tight mb-10">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-lg">{t.author}</h4>
                    <p className="text-primary text-sm font-semibold tracking-wider uppercase">{t.org}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="custom-swiper-pagination flex justify-center gap-2 mt-4" />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: rgba(255,255,255,0.2);
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: var(--color-primary);
          width: 32px;
          border-radius: 4px;
        }
      `}} />
    </section>
  );
}
