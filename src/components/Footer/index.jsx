import { Link } from 'react-router-dom';
import { navLinks, servicesList } from '@/utils/data';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex flex-col items-start leading-none group">
              <h1
                className="text-4xl md:text-5xl font-black tracking-tight"
                style={{
                  textShadow: `
        0 0 8px rgba(255,255,255,.8),
        0 0 18px rgba(255,255,255,.4)
      `,
                }}
              >
                <span className="text-white">LED</span>
                <span
                  className="text-orange-500 italic"
                  style={{
                    textShadow: `
          0 0 10px rgba(255,120,0,.9),
          0 0 20px rgba(255,120,0,.6)
        `,
                  }}
                >
                  4
                </span>
                <span className="text-white">U</span>
              </h1>

              <span
                className="mt-1 text-[11px] md:text-xs tracking-[0.4em] uppercase font-bold text-amber-400"
                style={{
                  textShadow: "0 0 8px rgba(255,180,0,.5)",
                }}
              >
                TRINAYAN CORPORATION
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium corporate lighting solutions for government, industrial, and commercial infrastructure. Illuminating India with precision and authority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 tracking-wide">Key Services</h4>
            <ul className="flex flex-col gap-3">
              {servicesList.slice(0, 6).map((service) => (
                <li key={service}>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 tracking-wide">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <span>
                  LED4U – Trinayan Corporation<br />
                  FF - 5&6, Sai Dham Complex, opp. Maruti True Value,
                  ABC Chowkdi,Bholav,Bharuch, Gujarat 393015<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 9824192708 , +91 9427116700
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:info@led4u.in" className="hover:text-primary transition-colors">
                  trinayan.corporation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} LED4U &ndash; Trinayan Corporation. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Designed &amp; Developed by</span>

            <a
  href="https://jshanportfolio-tan.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary font-semibold animate-pulse hover:text-amber-400 transition-colors duration-300"
>
  Jishan's
</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
