import React from 'react';

interface RollaContactPageProps {
  onNavigate: (path: string) => void;
}

export const RollaContactPage: React.FC<RollaContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <nav className="w-full px-6 py-8 flex items-center max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate('/rolla')}
          className="text-zinc-500 hover:text-white transition-colors flex items-center space-x-2 text-sm font-bold"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          <span>BACK</span>
        </button>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center px-6 max-w-2xl mx-auto text-center">
        <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed">
          For support contact{' '}
          <a href="mailto:rolla@unrealstudio.ai" className="text-white underline hover:no-underline font-medium">
            rolla@unrealstudio.ai
          </a>
        </p>
      </main>

      <footer className="w-full py-12 px-6 border-t border-zinc-900/30 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 select-none font-black">
          &copy; 2026 UNREAL STUDIO
        </p>
      </footer>
    </div>
  );
};
