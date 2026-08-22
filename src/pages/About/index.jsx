import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';
import founder1 from '@assets/Daxesh.jpeg';
import founder2 from '@assets/Jatin.jpeg';
import facilityImg from '@assets/showroom1.png';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | LED4U – Trinayan Corporation</title>
        <meta name="description" content="Learn about LED4U - Trinayan Corporation, Gujarat's premier government and industrial lighting infrastructure company." />
      </Helmet>

      <main className="pt-32 pb-24 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-4xl mb-24">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
              Pioneering <span className="text-primary">Light</span> <br />
              for a growing nation.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Founded in Bharuch, Gujarat, LED4U – Trinayan Corporation We have committed ourselves to make peoples lives more
              comfortable and highly efficient. We are working hard at making
              technology progress to let people enjoy the changes of new
              technology.
              To bridge the gap between the manufacturing and the buyer
              with right quality products. Have adequate systems to ensure
              timely deliveries & prompt after sales service along with
              competitive prices to make customer delight.
              Keeping in mind Vision for India - “POWER SAVING IS AS GOOD
              AS POWER GENERATION”
              We provides Best Quality Products & Service to our customers.
              We believe in keeping the customers happy and providing them
              with products at a very competent price.
              We look forward to a wonderful relationship together and
              success for all concerned.
            </p>
          </div>

          {/* Story & Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            <div>
              <div className="aspect-[4/5] bg-surface rounded-sm overflow-hidden relative border border-white/10">
                <img src={facilityImg} alt="Company Facility" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-display font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 mb-12 leading-relaxed">
                To engineer, supply, and install lighting infrastructure that stands the test of time. We believe in reducing energy consumption without compromising on safety, visibility, and architectural aesthetics.
              </p>

              <h2 className="text-3xl font-display font-bold text-white mb-6">Core Values</h2>
              <ul className="space-y-6">
                {[
                  { title: 'Uncompromising Quality', desc: 'Every fixture is tested for extreme Indian weather conditions, voltage fluctuations, and thermal stress.' },
                  { title: 'Execution Excellence', desc: 'From tender bidding to final high-mast erection, our project management is flawless.' },
                  { title: 'Continuous Innovation', desc: 'Integrating smart city sensors, automated DMX controls, and high-efficiency LED chips.' },
                ].map((val, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">{val.title}</h4>
                      <p className="text-gray-400 text-sm">{val.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Leadership */}
          
{/* <div className="mb-32">             <div className="text-center mb-16">               <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Leadership</h2>               <p className="text-gray-400">The visionaries driving Trinayan Corporation.</p>             </div> */}
 <div className="mb-32">
            <div className="text-center mb-16">
    <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3">
      Leadership
    </p>

    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
      Our Founders
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto">
      Meet the visionaries behind LED4U – Trinayan Corporation.
    </p>
  </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group text-center">
                <div className="aspect-square bg-surface mb-6 overflow-hidden rounded-sm border border-white/10 relative">
                  <img src={founder1} alt="Daxesh Patel" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Daxesh Patel</h3>
                {/* <p className="text-primary font-semibold uppercase tracking-wider text-sm">Founder</p> */}
              </div>

              <div className="group text-center">
                <div className="aspect-square bg-surface mb-6 overflow-hidden rounded-sm border border-white/10 relative">
                  <img src={founder2} alt="Jatin Patel" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Jatin Patel</h3>
                {/* <p className="text-primary font-semibold uppercase tracking-wider text-sm">Co-Founder</p> */}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-white">Certifications & Approvals</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                'MSME Registered',
                'Udyam Registration',
                'GeM Portal Verified',
                'ISO 9001:2015',
                'Govt. Approved Contractor'
              ].map((cert, i) => (
                <div key={i} className="bg-surface border border-white/5 p-6 rounded-sm text-center flex items-center justify-center min-h-[120px] hover:border-primary/50 hover:bg-white/5 transition-all">
                  <span className="text-white font-semibold text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
