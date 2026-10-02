'use client';

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
          <span>// 01. PROFILE_OVERVIEW</span>
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
    </div>
  );
}
