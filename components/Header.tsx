'use client';

import { useState } from 'react';

interface TabProps {
  id: string;
  index: string;
  label: string;
  delayClass: string;
  isActive: boolean;
  onClick: () => void;
}

function Tab({ index, label, delayClass, isActive, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative px-4 py-2 font-mono text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 rounded-sm cursor-pointer flex items-center gap-2 cyber-tab-sheen ${delayClass} ${
        isActive ? 'cyber-tab-active' : 'cyber-tab-inactive'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {isActive ? (
        <span className="text-cyan-400 font-bold">&gt;</span>
      ) : (
        <span className="text-slate-500 group-hover:text-cyan-400/80 transition-colors">
          {index} {'//'}
        </span>
      )}
      <span>{label}</span>
      {isActive && (
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00ffff] animate-pulse ml-0.5"></span>
      )}
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
    { id: 'about', index: '01', label: 'ABOUT' },
    { id: 'education', index: '02', label: 'EDUCATION' },
    { id: 'experience', index: '03', label: 'EXPERIENCE' },
    { id: 'projects', index: '04', label: 'PROJECTS' },
  ];

  const activeTabLabel = tabs.find((tab) => tab.id === activeTab)?.label || 'SELECT';

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    scrollToTop();
  };

  const handleMobileTabChange = (tabId: string) => {
    onTabChange(tabId);
    setIsDropdownOpen(false);
    scrollToTop();
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.7),0_1px_15px_rgba(0,255,255,0.08)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Row 1: Brand & Engineer Header */}
        <div className="pt-4 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800/70">
          <div
            onClick={() => {
              onTabChange('about');
              scrollToTop();
            }}
            className="cursor-pointer group select-none"
            title="Return to About"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#00ffff] animate-pulse shrink-0"></span>
              <h1 className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                <span className="neon-text">&gt;</span> GANAUSI <span className="neon-accent">{'//'} ENGINEER</span>
              </h1>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wide">[ GAME PROGRAMMER ]</p>
              <span className="text-slate-700 text-xs font-mono">•</span>
              <span className="text-slate-400 text-xs font-mono">SYS_VER 2.6.0</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse"></span>
            <span className="text-slate-400">SYSTEM:</span>
            <span className="text-emerald-400 font-semibold">ONLINE</span>
          </div>
        </div>

        {/* Row 2: Dedicated Navigation Strip (Positioned Directly Below Brand) */}
        <div className="py-2.5">
          {/* Desktop Navigation Deck */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400 tracking-wider shrink-0 select-none">
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span>NAV_DECK:</span>
            </div>

            <nav className="flex items-center gap-2 bg-slate-900/70 p-1 rounded-sm border border-cyan-900/40 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
              {tabs.map((tab, idx) => (
                <Tab
                  key={tab.id}
                  id={tab.id}
                  index={tab.index}
                  label={tab.label}
                  delayClass={`cyber-tab-delay-${idx + 1}`}
                  isActive={activeTab === tab.id}
                  onClick={() => handleTabClick(tab.id)}
                />
              ))}
            </nav>
          </div>

          {/* Mobile Dropdown Button & Menu */}
          <div className="md:hidden">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-2.5 bg-slate-900/90 hover:bg-slate-800 text-cyan-300 font-mono text-xs sm:text-sm rounded-sm border border-cyan-500/50 shadow-[0_0_15px_rgba(0,255,255,0.15)] flex justify-between items-center transition-all cyber-tab-sheen cyber-tab-delay-1"
              >
                <span className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">&gt;</span>
                  <span className="text-slate-400 text-xs">NAV:</span>
                  <span className="font-bold tracking-wider">[ {activeTabLabel} ]</span>
                </span>
                <span className={`text-cyan-400 transition-transform duration-300 text-xs ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-slate-950/95 border border-cyan-500/50 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,255,0.2)] overflow-hidden z-30 backdrop-blur-xl divide-y divide-slate-800/80">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleMobileTabChange(tab.id)}
                      className={`w-full px-4 py-3 text-left font-mono text-xs sm:text-sm transition-all flex items-center justify-between ${
                        activeTab === tab.id
                          ? 'bg-cyan-950/70 text-cyan-300 font-bold border-l-4 border-cyan-400 shadow-[inset_0_0_15px_rgba(0,255,255,0.15)]'
                          : 'text-slate-300 hover:bg-slate-900 hover:text-cyan-400'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-slate-500 text-xs">{tab.index} {'//'}</span>
                        <span>{tab.label}</span>
                      </span>
                      {activeTab === tab.id && (
                        <span className="text-[10px] px-2 py-0.5 rounded-sm bg-cyan-950 text-cyan-300 border border-cyan-500/50 font-semibold shadow-[0_0_8px_rgba(0,255,255,0.3)]">
                          ACTIVE
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
