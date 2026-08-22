import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LightbulbOff } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | LED4U</title>
      </Helmet>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* Flickering light effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[100px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] pointer-events-none" />
        
        <LightbulbOff size={64} className="text-primary mb-8 animate-pulse" />
        <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-4 tracking-tighter">
          4<span className="text-primary">0</span>4
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-lg">
          The page you're looking for is currently in the dark. Let's get you back to the light.
        </p>
        <Link 
          to="/" 
          className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-primary hover:border-primary hover:text-black transition-all"
        >
          Return Home
        </Link>
      </div>
    </>
  );
}
