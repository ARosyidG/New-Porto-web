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
          ? 'w-full md:w-auto bg-slate-100 text-slate-900 shadow-lg'
          : 'text-slate-300 hover:text-white hover:bg-slate-700'
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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 shadow-lg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Brand Section */}
        <div className="py-6">
          <h1 className="text-3xl font-bold text-white">Ganausi</h1>
          <p className="text-slate-400 mt-1">Game Developer & Full Stack Developer</p>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden pb-6">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-6 py-2 bg-slate-100 text-slate-900 font-medium rounded-lg shadow-lg flex justify-between items-center"
            >
              {activeTabLabel}
              <span className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-lg overflow-hidden z-10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleMobileTabChange(tab.id)}
                    className={`w-full px-6 py-3 text-left font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {tab.label}
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
