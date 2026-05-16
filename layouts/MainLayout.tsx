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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
        {children || <TabContent activeTab={activeTab} />}
      </main>
      <footer className="bg-slate-950 text-slate-300 py-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm md:text-base">&copy; 2026 Ganausi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
