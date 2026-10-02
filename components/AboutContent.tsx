'use client';

import { useState } from 'react';

interface SkillTier {
  id: string;
  tierLabel: string;
  badgeText: string;
  badgeStyle: string;
  title: string;
  confidence: string;
  confidenceColor: string;
  summary: string;
  details: string[];
  honestNote: string;
  technologies: string[];
}

const skillTiers: SkillTier[] = [
  {
    id: 'game-dev',
    tierLabel: 'TIER 01 // CORE SPECIALIZATION',
    badgeText: 'PROFESSIONAL EXPERIENCE',
    badgeStyle: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/60 shadow-[0_0_10px_rgba(0,255,255,0.2)]',
    title: 'Game Programming & Mechanics',
    confidence: 'High Confidence (Primary Craft)',
    confidenceColor: 'text-cyan-300',
    summary:
      'I have worked in a professional studio environment programming gameplay mechanics for Roblox games. This is where I am most confident and invest most of my engineering focus.',
    details: [
      'Production experience with client-server network replication and remote communication',
      'Implementing responsive player controllers, state machines, and interactive game loops',
      'Engine versatility across Roblox Studio (Luau), Unity (C# / VR), and Godot',
    ],
    honestNote:
      'Proven hands-on experience in a professional production environment delivering real gameplay features.',
    technologies: ['Roblox Studio', 'Roblox Luau', 'Unity (C#)', 'Godot', 'Gameplay Scripting'],
  },
  {
    id: 'web-dev',
    tierLabel: 'TIER 02 // SECONDARY CAPABILITY',
    badgeText: 'FUNCTIONAL / CONTINUOUS LEARNING',
    badgeStyle: 'bg-blue-950/80 text-blue-300 border-blue-500/50',
    title: 'Web & Backend Development',
    confidence: 'Moderate Confidence (Functional)',
    confidenceColor: 'text-blue-300',
    summary:
      'I can build functional fullstack web applications and backend APIs, but I am still actively learning deeper production topics.',
    details: [
      'Frontend development with Next.js, React, TypeScript, and Tailwind CSS',
      'Backend REST APIs and database handling with Laravel (PHP) and Spring Boot (Java)',
      'Building authentication, CRUD services, and responsive dashboards',
    ],
    honestNote:
      'Currently focused on learning and improving web security, latency optimization, and production-grade architecture.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'Spring Boot'],
  },
  {
    id: '3d-modeling',
    tierLabel: 'TIER 03 // SUPPORTING SKILL',
    badgeText: 'PROPS & BASIC SCULPTING',
    badgeStyle: 'bg-amber-950/80 text-amber-300 border-amber-500/50',
    title: '3D Modeling & Basic Sculpting (Blender)',
    confidence: 'Foundational (Prototyping Level)',
    confidenceColor: 'text-amber-300',
    summary:
      'I use Blender as a supporting tool to create props and environment blockouts for game development. I also do basic sculpting for prop details (such as stones or damaged items like a broken sword) while actively practicing to improve.',
    details: [
      'Simple hard-surface prop modeling and geometric in-game items',
      'Basic sculpting for organic or damaged prop details (e.g. stones, chipped rocks, broken weapons)',
      'Level prototyping, spatial layouts, and whitebox scene blockouts',
      'Asset export pipeline into game engines (Roblox Studio, Unity, Godot)',
    ],
    honestNote:
      'Still learning sculpting: I use it for detailing props, though I know it is not yet at a professional studio standard. Hard boundary: I do not do character design, character sculpting, or character rigging.',
    technologies: ['Blender', 'Prop Modeling', 'Basic Sculpting', 'Level Blockouts', 'Asset Pipeline'],
  },
];

interface ProgrammingLangItem {
  name: string;
  ext: string;
  tier: 'Core' | 'Secondary' | 'Foundations';
  focus: string;
}

const programmingLanguages: ProgrammingLangItem[] = [
  { name: 'Lua / Luau', ext: '.luau', tier: 'Core', focus: 'Roblox Gameplay & Systems (Professional)' },
  { name: 'C#', ext: '.cs', tier: 'Core', focus: 'Unity Game Logic & VR Mechanics' },
  { name: 'TypeScript', ext: '.ts', tier: 'Secondary', focus: 'Next.js & Frontend Architecture' },
  { name: 'JavaScript', ext: '.js', tier: 'Secondary', focus: 'Interactive UI & Web APIs' },
  { name: 'PHP', ext: '.php', tier: 'Secondary', focus: 'Laravel Backend APIs' },
  { name: 'Python', ext: '.py', tier: 'Foundations', focus: 'Scripting & Automation' },
  { name: 'Java', ext: '.java', tier: 'Foundations', focus: 'Networking & Spring Boot' },
  { name: 'C++', ext: '.cpp', tier: 'Foundations', focus: 'Systems & Computing Foundations' },
];

export default function AboutContent() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('ahmadrosyidganausi@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Header & Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-cyan-900/60 pb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-mono">
            <span className="neon-text">&gt;</span> ABOUT_ME
          </h2>
          <p className="text-slate-400 text-xs font-mono mt-1">
            Role: Game Programmer • Specialization: Gameplay Systems • Origin: Lombok, ID
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
          <span>AVAILABLE FOR GAME PROJECTS</span>
        </div>
      </div>

      {/* 2. Profile Overview Card */}
      <div className="cyber-panel cyber-corner rounded-xl p-6 md:p-7 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
          <span>{'//'} 01. PROFILE_OVERVIEW</span>
        </div>

        <p className="text-slate-200 text-base md:text-lg leading-relaxed">
          Born in <span className="text-white font-semibold">2000 in Lombok, Indonesia</span>. I&apos;m a developer with a Bachelor Degree in <span className="text-cyan-300 font-medium">Electrical Engineering</span> (focusing on Computer Science &amp; Network Engineering) and professional experience in game development.
        </p>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          My primary strength is <span className="text-white font-semibold underline decoration-cyan-500 underline-offset-4">game programming</span>, where I have worked in a professional studio environment building gameplay mechanics for Roblox. In addition to game development, I also have functional experience in web development and basic 3D prop modeling (including basic sculpting for props like stones or damaged items) as complementary skills.
        </p>

        {/* Quick Summary Pill Row */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-700/60 font-semibold">
            <span>🎮</span> Primary: Game Dev (Professional)
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-md bg-blue-950/40 text-blue-300 border border-blue-800/50">
            <span>🌐</span> Secondary: Web &amp; Backend (Functional)
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-md bg-amber-950/40 text-amber-300 border border-amber-800/50">
            <span>📦</span> Supporting: 3D Modeling (Props &amp; Basic Sculpting)
          </span>
        </div>

        {/* Quick Connect & Socials Strip */}
        <div className="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-800/80">
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mr-1">
            <span className="text-cyan-400 font-bold">&gt;</span> CONTACT:
          </span>

          {/* Email button displaying actual address + integrated copy button */}
          <div className="inline-flex items-center rounded-sm bg-slate-900/90 border border-cyan-700/60 overflow-hidden text-xs font-mono shadow-[0_0_10px_rgba(6,182,212,0.15)]">
            <a
              href="mailto:ahmadrosyidganausi@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-cyan-300 hover:text-white hover:bg-cyan-950/60 transition-colors font-medium"
              title="Click to compose email"
            >
              <span>✉️</span>
              <span className="font-bold">ahmadrosyidganausi@gmail.com</span>
              <span className="text-[11px] text-cyan-400/80">↗</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1.5 bg-slate-800/90 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 font-bold border-l border-slate-700/80 transition-all cursor-pointer text-[11px] shrink-0"
              title="Copy email to clipboard"
            >
              {copiedEmail ? 'COPIED ✓' : 'COPY'}
            </button>
          </div>

          <a
            href="https://www.linkedin.com/in/rosyid-ganausi-98ab41133/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-sm bg-slate-900/90 text-blue-300 hover:text-white hover:bg-blue-950/60 border border-blue-700/50 hover:border-blue-400 transition-colors"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>
          <a
            href="https://www.instagram.com/ganausi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-sm bg-slate-900/90 text-pink-300 hover:text-white hover:bg-pink-950/60 border border-pink-700/50 hover:border-pink-400 transition-colors"
          >
            <span>Instagram</span>
            <span>↗</span>
          </a>
          <a
            href="https://web.facebook.com/ahmadrosyid.ganausi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-sm bg-slate-900/90 text-indigo-300 hover:text-white hover:bg-indigo-950/60 border border-indigo-700/50 hover:border-indigo-400 transition-colors"
          >
            <span>Facebook</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* 3. Skill Highlight & Confidence Tiers (Top-to-Bottom) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-cyan-900/40 pb-2">
          <h3 className="text-lg md:text-xl font-bold text-white font-mono flex items-center gap-2">
            <span className="neon-text">&gt;</span> SKILL_CONFIDENCE_LEVELS
          </h3>
          <span className="text-xs font-mono text-slate-400">[ TRANSPARENT_ASSESSMENT ]</span>
        </div>

        <div className="space-y-4">
          {skillTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-xl p-5 md:p-6 border transition-all duration-300 ${tier.id === 'game-dev'
                  ? 'cyber-panel border-cyan-500/40 bg-slate-900/80'
                  : tier.id === 'web-dev'
                    ? 'cyber-panel border-blue-500/30 bg-slate-900/60'
                    : 'cyber-panel-amber border-amber-500/30 bg-slate-900/60'
                }`}
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 block tracking-wider">
                    {tier.tierLabel}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-white font-mono">
                    {tier.title}
                  </h4>
                </div>
                <div className="flex flex-col sm:items-end gap-1">
                  <span className={`text-xs font-mono px-2.5 py-1 rounded border font-semibold ${tier.badgeStyle}`}>
                    {tier.badgeText}
                  </span>
                  <span className={`text-xs font-mono font-medium ${tier.confidenceColor}`}>
                    {tier.confidence}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-3">
                {tier.summary}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-1.5 mb-4">
                {tier.details.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Honest Note Callout */}
              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2 mb-3">
                <span className="text-amber-400 font-bold shrink-0">[NOTE]:</span>
                <span>{tier.honestNote}</span>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                {tier.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Passion & Game Design Focus (Full Width) */}
      <div className="cyber-panel rounded-xl p-6 md:p-7 space-y-4">
        <div className="flex items-center justify-between border-b border-cyan-900/40 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>&gt; 03. PASSION &amp; GAME_DESIGN</span>
          </div>
          <span className="text-xs font-mono text-slate-400">[ INSPIRATIONS ]</span>
        </div>

        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          I aspire to grow as a <span className="text-slate-100 font-semibold">game developer </span> and I&apos;m passionate about building engaging gameplay. While I continue to build professional experience, I work toward creating my own immersive game experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div className="p-4 rounded-lg bg-slate-900/70 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg">🗡️</span>
              <h4 className="font-semibold font-mono text-cyan-300 text-sm">Rich-Lore RPGs</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              I particularly enjoy RPGs with rich lore, deep environmental storytelling, and immersive worlds that reward player curiosity.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/70 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg">⚙️</span>
              <h4 className="font-semibold font-mono text-cyan-300 text-sm">Simulation Games</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              I love games like <span className="text-slate-200 font-medium">Factorio</span> — complex interlocking systems, automation loops, optimization, and mechanical design.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Programming Languages by Level (List Format) */}
      <div className="cyber-panel rounded-xl p-6 md:p-7 space-y-4">
        <div className="flex items-center justify-between border-b border-cyan-900/40 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>&gt; 04. PROGRAMMING_LANGUAGES</span>
          </div>
          <span className="text-xs font-mono text-slate-400">[ CODE_INDEX ]</span>
        </div>

        <div className="divide-y divide-slate-800/80">
          {programmingLanguages.map((lang, idx) => (
            <div
              key={lang.name}
              className="py-3 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 hover:bg-slate-800/40 px-3 -mx-3 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                <span className="text-xs font-mono text-cyan-400/70 w-5">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <span className="font-bold font-mono text-white text-sm sm:text-base">
                  {lang.name}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/50 text-slate-400 border border-slate-700">
                  {lang.ext}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${lang.tier === 'Core'
                      ? 'bg-cyan-950/70 text-cyan-300 border-cyan-600/60'
                      : lang.tier === 'Secondary'
                        ? 'bg-blue-950/60 text-blue-300 border-blue-600/50'
                        : 'bg-slate-800/80 text-slate-400 border-slate-700'
                    }`}
                >
                  [{lang.tier.toUpperCase()}]
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 font-mono sm:text-right pl-7 sm:pl-0">
                {lang.focus}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Languages & Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Spoken Languages */}
        <div className="cyber-panel rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-cyan-900/40 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>&gt; 05. HUMAN_LANGUAGES</span>
            </div>
            <span className="text-xs font-mono text-slate-400">[ SPOKEN ]</span>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/70 border border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="text-lg">🇮🇩</span>
                <div>
                  <span className="text-sm font-medium text-white block">Indonesian</span>
                  <span className="text-xs text-slate-400">Native tongue</span>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 font-semibold">
                Native
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/70 border border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="text-lg">🇬🇧</span>
                <div>
                  <span className="text-sm font-medium text-white block">English</span>
                  <span className="text-xs text-slate-400">Professional &amp; technical</span>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 font-semibold">
                Fluent
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/70 border border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="text-lg">🇯🇵</span>
                <div>
                  <span className="text-sm font-medium text-white block">Japanese (日本語)</span>
                  <span className="text-xs text-slate-400">Active study</span>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-purple-950/60 text-purple-300 border border-purple-800/60 font-semibold">
                Learning
              </span>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="cyber-panel-purple rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                <span>&gt; 06. PHILOSOPHY</span>
              </div>
              <span className="text-xs font-mono text-slate-400">[ MINDSET ]</span>
            </div>

            <div className="relative p-4 rounded-lg bg-slate-900/80 border-l-4 border-purple-400 border border-slate-800/80">
              <p className="text-slate-200 text-sm md:text-base leading-relaxed italic">
                &ldquo;I love learning new things! Whether it&apos;s game engines, programming languages, or game design principles, continuous growth drives my passion for development.&rdquo;
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Open and honest about where I stand: confident in game programming, while constantly expanding my engineering horizons into web security, networking, and technical art.
            </p>
          </div>

          <div className="text-xs font-mono text-purple-300/80 flex items-center gap-2 pt-2 border-t border-purple-900/30">
            <span>✦</span>
            <span>Continuous learning &amp; growth driven by passion</span>
          </div>
        </div>
      </div>

      {/* 7. Comms & Social Channels Card */}
      <div className="cyber-panel cyber-corner rounded-xl p-6 md:p-7 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-900/40 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>&gt; 07. COMMS_CHANNELS &amp; SOCIAL_PROFILES</span>
          </div>
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            OPEN_FOR_COMMUNICATION
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Card */}
          <div className="p-4 rounded-lg bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-sm bg-cyan-950/80 text-cyan-300 border border-cyan-700/50 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {'//'} DIRECT_EMAIL
                </span>
                <h4 className="font-bold font-mono text-white text-sm truncate">
                  ahmadrosyidganausi@gmail.com
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
              <a
                href="mailto:ahmadrosyidganausi@gmail.com"
                className="flex-1 py-1.5 px-3 rounded-sm bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 font-mono text-xs font-bold border border-cyan-500/50 transition-all text-center"
              >
                SEND_MAIL ↗
              </a>
              <button
                onClick={handleCopyEmail}
                className="py-1.5 px-3 rounded-sm bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 font-mono text-xs border border-slate-700 transition-all cursor-pointer shrink-0"
              >
                {copiedEmail ? 'COPIED ✓' : 'COPY'}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-4 rounded-lg bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-sm bg-blue-950/80 text-blue-300 border border-blue-700/50 shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {'//'} LINKEDIN
                </span>
                <h4 className="font-bold font-mono text-white text-sm truncate">
                  Rosyid Ganausi
                </h4>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <a
                href="https://www.linkedin.com/in/rosyid-ganausi-98ab41133/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-sm bg-blue-500/20 hover:bg-blue-500 text-blue-300 hover:text-slate-950 font-mono text-xs font-bold border border-blue-500/50 transition-all text-center"
              >
                <span>CONNECT ON LINKEDIN</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="p-4 rounded-lg bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-sm bg-pink-950/80 text-pink-300 border border-pink-700/50 shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {'//'} INSTAGRAM
                </span>
                <h4 className="font-bold font-mono text-white text-sm truncate">
                  @ganausi
                </h4>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <a
                href="https://www.instagram.com/ganausi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-sm bg-pink-500/20 hover:bg-pink-500 text-pink-300 hover:text-slate-950 font-mono text-xs font-bold border border-pink-500/50 transition-all text-center"
              >
                <span>VIEW INSTAGRAM</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Facebook Card */}
          <div className="p-4 rounded-lg bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-sm bg-indigo-950/80 text-indigo-300 border border-indigo-700/50 shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {'//'} FACEBOOK
                </span>
                <h4 className="font-bold font-mono text-white text-sm truncate">
                  Ahmad Rosyid Ganausi
                </h4>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <a
                href="https://web.facebook.com/ahmadrosyid.ganausi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-sm bg-indigo-500/20 hover:bg-indigo-500 text-indigo-300 hover:text-slate-950 font-mono text-xs font-bold border border-indigo-500/50 transition-all text-center"
              >
                <span>VIEW FACEBOOK</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

