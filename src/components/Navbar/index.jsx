import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/utils/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
       <Link to="/" className="flex flex-col items-start leading-none group">
  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight select-none">
    <span className="text-white">LED</span>
    <span className="text-orange-500 italic -mx-1">4</span>
    <span className="text-white">U</span>
  </h1>

  <span
    className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.35em] font-semibold
               text-amber-400 group-hover:text-orange-400 transition-colors"
  >
    TRINAYAN CORPORATION
  </span>
</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors relative group ${
                pathname === link.path ? 'text-primary' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
              <span 
                className={`absolute -bottom-2 left-0 w-full h-[2px] bg-primary transform origin-left transition-transform duration-300 ${
                  pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="px-6 py-2.5 bg-white/5 border border-white/10 hover:border-primary/50 text-white text-sm font-medium uppercase tracking-widest rounded-sm transition-all hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Drawer */}
        <div 
          className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl font-display font-bold tracking-wider uppercase ${
                pathname === link.path ? 'text-primary' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="mt-4 px-8 py-3 bg-primary text-black font-bold uppercase tracking-widest rounded-sm"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
