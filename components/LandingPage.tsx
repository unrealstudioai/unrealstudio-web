
import React from 'react';
import rollaLogo from '../assets/src/Rolla Logo.png';
import unrealLogo from '../assets/src/UNREAL white.png';

interface LandingPageProps {
  onNavigate: (path: string) => void;
}

const UnrealLogo = () => (
  <img src={unrealLogo} alt="UNREAL" className="w-full h-auto max-h-24 object-contain object-left" />
);

const RollaLogo = () => (
  <img
    src={rollaLogo}
    alt="Rolla"
    className="w-full h-full object-contain rounded-[8px]"
  />
);

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-grow flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-[280px] flex flex-col items-center space-y-10">
          
          {/* Main Logo and Tagline */}
          <div className="flex flex-col items-center space-y-1.5 text-center">
            <div className="w-full hover:opacity-90 transition-opacity duration-300">
              <UnrealLogo />
            </div>
            <p className="text-zinc-400 text-xl font-medium tracking-tight select-none">
              We make unreal apps
            </p>
          </div>

          {/* Nav Button */}
          <div className="w-full pt-0">
            <button
              onClick={() => onNavigate('/rolla')}
              className="group flex items-center justify-between w-full py-3 px-3.5 bg-[#080808] border border-zinc-900 hover:bg-[#111] hover:border-zinc-800 rounded-[24px] transition-all duration-300 active:scale-[0.98] shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 flex-shrink-0">
                  <RollaLogo />
                </div>
                
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-white text-base font-bold tracking-tight">
                    Go to Rolla
                  </span>
                  <span className="text-zinc-600 text-xs mt-0.5 font-medium">
                    AI Camera Roll
                  </span>
                </div>
              </div>
              
              <div className="pr-2.5 opacity-30 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full py-12 text-center mt-auto">
        <p className="text-[11px] uppercase tracking-[0.5em] text-zinc-600 select-none font-black opacity-70">
          &copy; 2026 UNREAL STUDIO
        </p>
      </footer>
    </div>
  );
};
