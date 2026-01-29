import React from 'react';
import rollaLogo from '../assets/src/Rolla Logo.png';

interface RollaPageProps {
  onNavigate: (path: string) => void;
}

const RollaLogo = () => (
  <img
    src={rollaLogo}
    alt="Rolla"
    className="w-full h-full object-contain rounded-[8px]"
  />
);

// Apple App Store logo
const AppleLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.39-1.42-3.35-2.62-1.95-2.97-3.44-8.41-1.4-12.09.99-1.73 2.76-2.84 4.68-2.87 1.31-.02 2.55.88 3.39.88.84 0 2.42-.92 4.08-.79 1.69.13 3.18 1.04 4.04 2.66-3.68 2.02-2.76 7.27.9 9.08zM12.96 3.96c1.37-1.66 1.15-4.02-.23-5.43-1.38-1.42-3.63-1.65-5.01-.02-1.37 1.66-1.15 4 .23 5.42 1.38 1.42 3.63 1.65 5 .02z"/>
  </svg>
);

// Google Play logo (triangle/play shape)
const GooglePlayLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <path fill="currentColor" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z"/>
  </svg>
);

export const RollaPage: React.FC<RollaPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <nav className="w-full px-6 py-8 flex items-center max-w-4xl mx-auto">
        <button 
          onClick={() => onNavigate('/')}
          className="text-zinc-500 hover:text-white transition-colors flex items-center space-x-2 text-sm font-bold"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          <span>BACK</span>
        </button>
      </nav>

      <main className="flex-grow flex flex-col items-center px-6 pt-8 pb-16 max-w-2xl mx-auto text-center">
        <div className="w-28 h-28 mb-8 flex-shrink-0">
          <RollaLogo />
        </div>
        <p className="text-zinc-400 text-xl md:text-2xl mb-12 leading-relaxed font-light max-w-lg">
          Your life, any scene. Create realistic iPhone-style camera roll images—drop yourself into presets or dream up your own. Perfect for creators who want to show, not tell.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors text-white font-medium"
          >
            <AppleLogo />
            <span className="text-left">
              <span className="block text-[9px] leading-tight">Download on the</span>
              <span className="block text-base font-semibold tracking-tight">App Store</span>
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors text-white font-medium"
          >
            <GooglePlayLogo />
            <span className="text-left">
              <span className="block text-[9px] leading-tight">Get it on</span>
              <span className="block text-base font-semibold tracking-tight">Google Play</span>
            </span>
          </a>
        </div>
      </main>

      <footer className="w-full py-16 px-6 flex flex-col items-center space-y-12 mt-auto border-t border-zinc-900/30">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] font-black text-zinc-600 uppercase tracking-[0.3em]">
          <a href="/rolla/terms" onClick={(e) => { e.preventDefault(); onNavigate('/rolla/terms'); }} className="hover:text-white transition-colors">Terms</a>
          <a href="/rolla/privacy" onClick={(e) => { e.preventDefault(); onNavigate('/rolla/privacy'); }} className="hover:text-white transition-colors">Privacy</a>
          <a href="/rolla/contact" onClick={(e) => { e.preventDefault(); onNavigate('/rolla/contact'); }} className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 select-none font-black">
          &copy; 2026 UNREAL STUDIO
        </p>
      </footer>
    </div>
  );
};
