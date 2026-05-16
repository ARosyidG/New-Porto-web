'use client';

import { useState } from 'react';

interface TabProps {
  label: string;
  id: string;
  isActive: boolean;
  onClick: () => void;
}

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 font-medium transition-all duration-300 rounded-lg ${
        isActive
          ? 'w-full md:w-auto bg-cyan-500 text-slate-900 shadow-lg border border-cyan-400 glow-animation font-mono font-bold'
          : 'text-slate-300 hover:text-cyan-400 border border-transparent hover:border-cyan-600 hover:bg-slate-700/30'
      }`}
    >
      {label}
    </button>
  );
}

interface HeaderProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  const activeTabLabel = tabs.find((tab) => tab.id === activeTab)?.label || 'Select';

  const handleMobileTabChange = (tabId: string) => {
    onTabChange(tabId);
    setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-cyan-900 shadow-lg border-glow">
      <div className="max-w-6xl mx-auto px-6">
        {/* Brand Section */}
        <div className="py-6">
          <h1 className="text-3xl font-bold text-white font-mono">
            <span className="neon-text">&gt;</span> GANAUSI <span className="neon-accent">// ENGINEER</span>
          </h1>
          <p className="text-cyan-400 mt-1 font-mono text-sm">[ GAME PROGRAMMER ]</p>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden pb-6">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-6 py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-slate-900 font-medium font-mono rounded-lg shadow-lg flex justify-between items-center border border-cyan-400 glow-animation"
            >
              [{activeTabLabel}]
              <span className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border-2 border-cyan-600 rounded-lg shadow-lg overflow-hidden z-10 border-glow">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleMobileTabChange(tab.id)}
                    className={`w-full px-6 py-3 text-left font-medium font-mono transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-cyan-600/30 text-cyan-400 border-l-4 border-cyan-400'
                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-cyan-400'
                    }`}
                  >
                    &gt; {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Horizontal Tabs */}
        <nav className="hidden md:flex flex-wrap gap-2 pb-6 md:pb-4 items-center md:items-start justify-center md:justify-start">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              label={tab.label}
              id={tab.id}
              isActive={activeTab === tab.id}
              onClick={() => onTabChange(tab.id)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
