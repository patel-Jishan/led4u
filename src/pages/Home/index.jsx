import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';
import { Link } from 'react-router-dom';
import heroBg from '@assets/hero.png';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <Helmet>
  <title>LED4U – LED Lighting Solutions | Trinayan Corporation</title>

  <meta
    name="description"
    content="LED4U – Trinayan Corporation provides LED lighting solutions for government, infrastructure, industrial and commercial projects across India."
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <meta
    property="og:title"
    content="LED4U – Trinayan Corporation"
  />

  <meta
    property="og:description"
    content="LED4U – Trinayan Corporation provides LED lighting solutions for government, infrastructure, industrial and commercial projects across India."
  />
</Helmet>

      <Hero />
      <Statistics />
      
      {/* About Preview Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface border border-white/10 rounded-sm overflow-hidden relative group">
                <img 
                  src={heroBg} 
                  alt="High Mast Lighting" 
                  className="object-cover w-full h-full opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-10 left-10">
                  <div className="text-6xl font-display font-bold text-white mb-2">15+</div>
                  <div className="text-primary font-semibold tracking-widest uppercase text-sm">Years of Excellence</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 border border-primary/30 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">
                About Trinayan Corporation
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Empowering India's Infrastructure with <span className="text-primary">Precision Lighting</span>.
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Headquartered in Bharuch, Gujarat, LED4U is the trusted lighting partner for government departments, municipal corporations, and large-scale industrial complexes across the nation.
              </p>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                We specialize in high-mast towers, smart LED street lighting, and heavy-duty industrial fixtures that endure the harshest conditions while delivering optimal photometric performance.
              </p>
              
              <Link 
                to="/about"
                className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm group hover:text-primary transition-colors"
              >
                <span>Discover Our Story</span>
                <span className="w-10 h-[2px] bg-primary group-hover:w-16 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <WhyChooseUs />
      <Clients />
      <Testimonials />
      
      {/* Contact CTA */}
      <section className="py-32 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-primary/10 blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-8">
            Ready to illuminate your <br /> next major project?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Connect with our engineering team to discuss customized lighting solutions, tender requirements, or industrial supply needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-amber-glow transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
            >
              Get a Detailed Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
