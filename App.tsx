import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { RollaPage } from './components/RollaPage';
import { RollaTermsPage } from './components/RollaTermsPage';
import { RollaPrivacyPage } from './components/RollaPrivacyPage';
import { RollaContactPage } from './components/RollaContactPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {currentPath === '/rolla/terms' ? (
        <RollaTermsPage onNavigate={navigate} />
      ) : currentPath === '/rolla/privacy' ? (
        <RollaPrivacyPage onNavigate={navigate} />
      ) : currentPath === '/rolla/contact' ? (
        <RollaContactPage onNavigate={navigate} />
      ) : currentPath === '/rolla' ? (
        <RollaPage onNavigate={navigate} />
      ) : (
        <LandingPage onNavigate={navigate} />
      )}
    </div>
  );
};

export default App;
