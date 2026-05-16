'use client';

import { ReactNode, useState } from 'react';
import Header from '@/components/Header';
import TabContent from '@/components/TabContent';

interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated grid background */}
      <div className="grid-bg"></div>
      
      {/* Main content wrapper with flex-1 to push footer to bottom */}
      <div className="relative z-10 flex flex-col flex-1">
        <Header activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
          {children || <TabContent activeTab={activeTab} />}
        </main>
      </div>

      {/* Footer pinned to bottom */}
      <footer className="relative z-10 bg-slate-950 text-slate-300 py-8 border-t border-cyan-900 border-glow">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm md:text-base">
            <span className="neon-text">&gt;</span> &copy; 2026 Ganausi. All rights reserved. <span className="neon-text">&lt;</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
