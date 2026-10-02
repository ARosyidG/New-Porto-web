'use client';

import { useMemo, useState } from 'react';

export type ProjectCategory = 'Game Dev & VR' | 'Game Dev' | 'Web & Backend';

export type ProjectStatus = 'Live Demo' | 'Open Source';

export interface IProjectList {
  id: string;
  projectName: string;
  category: ProjectCategory;
  status: ProjectStatus;
  about: string;
  githubLink?: string;
  demoLink?: string;
  demoLabel?: string;
  hasHostingDisclaimer?: boolean;
  credentials?: {
    username: string;
    password: string;
    note?: string;
  };
  tags: string[];
  desc: React.ReactNode;
}

const projects: IProjectList[] = [
  {
    id: 'roblox-studio-games',
    projectName: 'Roblox Studio Titles',
    category: 'Game Dev',
    status: 'Live Demo',
    demoLink: 'https://www.roblox.com/games/85081695804302/Clean-Your-Room-before-Mom-Comes-Home',
    demoLabel: '🎮 PLAY FEATURED TITLE (ROBLOX)',
    hasHostingDisclaimer: false,
    about: 'Curated compilation of Roblox games developed at Digital Breeze Interactive',
    tags: ['Roblox Studio', 'Roblox Luau', 'Gameplay Systems', 'Pathfinding', 'UI Integration', 'Progression & Monetization'],
    desc: (
      <div className="space-y-5">
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          During my work in Digital Breeze Interactive, I programmed core gameplay mechanics, player interaction loops, and network replication for multiple published Roblox titles. Below is a curated selection of publicly available live games I contributed to:
        </p>

        {/* Transparent Note on Performance & First Experience */}
        <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-500/30 text-xs font-mono text-slate-300 flex items-start gap-2.5">
          <span className="text-amber-400 font-bold shrink-0">{'[NOTE]'}:</span>
          <span className="leading-relaxed">
            This was my very first job as a professional programmer and my first time working with Roblox. Because I hadn&apos;t touched Roblox development before and was learning on the job, some of these projects do not have the best performance optimization, but they provided invaluable hands-on experience delivering live features in a real studio pipeline.
          </span>
        </div>

        {/* Studio Games Compilation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          {/* Game 1: Clean Your Room before Mom Comes Home */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between space-y-3.5">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 font-semibold">
                  CASUAL / OBJECTIVE
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIVE
                </span>
              </div>
              <h4 className="text-base font-bold text-white font-mono">
                Clean Your Room before Mom Comes Home
              </h4>

              {/* Roles & Systems Built */}
              <ul className="space-y-1 text-xs text-slate-300 font-mono pt-1">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Organize Item System</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Custom HotBar inventory system &amp; prop interactions</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Gameplay UI implementation &amp; interaction integration</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.roblox.com/games/85081695804302/Clean-Your-Room-before-Mom-Comes-Home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 font-mono text-xs font-bold border border-cyan-500/50 transition-all"
            >
              <span>PLAY ON ROBLOX</span>
              <span>↗</span>
            </a>
          </div>

          {/* Game 2: Brainrot Claw Machine */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between space-y-3.5">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 font-semibold">
                  ARCADE / PROGRESSION
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIVE
                </span>
              </div>
              <h4 className="text-base font-bold text-white font-mono">
                Brainrot Claw Machine
              </h4>

              {/* Roles & Systems Built */}
              <ul className="space-y-1 text-xs text-slate-300 font-mono pt-1">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Programmatic claw mechanics (non-physics driven)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Unlock progression &amp; monetization logic</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Gameplay UI implementation &amp; interaction integration</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.roblox.com/games/85068532902439/Brainrot-Claw-Machine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 font-mono text-xs font-bold border border-cyan-500/50 transition-all"
            >
              <span>PLAY ON ROBLOX</span>
              <span>↗</span>
            </a>
          </div>

          {/* Game 3: Anime Claw Machine */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between space-y-3.5">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 font-semibold">
                  RESKIN / TEAM LEAD
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIVE
                </span>
              </div>
              <h4 className="text-base font-bold text-white font-mono">
                Anime Claw Machine
              </h4>

              {/* Roles & Systems Built */}
              <ul className="space-y-1 text-xs text-slate-300 font-mono pt-1">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Reskin of Brainrot Claw Machine (served as Team Lead)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Ensured new 3D models &amp; UI remained fully script-compatible</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Asset optimization &amp; performance checks to prevent lag</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.roblox.com/games/131737984105846/Anime-Claw-Machine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 font-mono text-xs font-bold border border-cyan-500/50 transition-all"
            >
              <span>PLAY ON ROBLOX</span>
              <span>↗</span>
            </a>
          </div>

          {/* Game 4: My Car Park */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between space-y-3.5">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 font-semibold">
                  IDLE GAME / SIMULATION
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIVE
                </span>
              </div>
              <h4 className="text-base font-bold text-white font-mono">
                My Car Park
              </h4>

              {/* Roles & Systems Built */}
              <ul className="space-y-1 text-xs text-slate-300 font-mono pt-1">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Autonomous car behavior &amp; pathfinding logic</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Idle game loops &amp; vehicle progression balance</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>Gameplay UI implementation &amp; interaction integration</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.roblox.com/games/124754995304613/My-Car-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 font-mono text-xs font-bold border border-cyan-500/50 transition-all"
            >
              <span>PLAY ON ROBLOX</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Unreleased / Privated Games Note */}
        <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs font-mono text-slate-400 flex items-start gap-2">
          <span className="text-cyan-400 font-bold shrink-0">{'[NOTE]'}:</span>
          <span className="leading-relaxed">
            I have also worked on several other studio projects, but they are currently privated or haven&apos;t been released yet.
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'learning-anatomy',
    projectName: 'Learning Anatomy',
    category: 'Game Dev & VR',
    status: 'Open Source',
    about: 'Virtual reality skeletal anatomy learning simulation for Mataram University (Final Project)',
    githubLink: 'https://github.com/ARosyidG/Learning-Anatomy',
    tags: ['VR', 'Unity', 'C#', '3D Modeling', 'Oculus Quest 2', 'Blender'],
    desc: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          This was the first project I built in Unity that wasn&apos;t just an exercise to learn the engine, but one I was genuinely committed to finishing, as it served as the final project for my engineering degree.
        </p>
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          The project aims to simulate skeletal anatomy learning at Mataram University through an immersive Virtual Reality experience.
        </p>
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          All 3D assets in this project were created by me except the bone and VR Controller model. The bone model used in this project is the pelvic bone model obtained from Z-Anatomy. This highly detailed model provides an accurate representation of human anatomy, which is essential for effective learning. The application&apos;s content features modified transformations of the bone model, allowing students to explore and observe the pelvic bone from all angles.
        </p>
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          In its development, I used the XRI Package provided by Unity. This package was utilized solely to obtain input from the Oculus Quest 2, and I did not use the Grab Interactable component that it offers. The limitations of this component hindered the realization of the design requested by the university. As a result, I recreated the functionalities for grabbing, rotating, and scaling to align with the university&apos;s desired design.
        </p>
      </div>
    ),
  },
  {
    id: 'panjat-pinang',
    projectName: 'Panjat Pinang',
    category: 'Game Dev',
    status: 'Live Demo',
    about: 'Indonesian Independence Day cultural game with Spring Boot REST backend',
    githubLink: 'https://github.com/ARosyidG/Panjat-Pinang',
    demoLink: 'https://17an.ganausi.com',
    hasHostingDisclaimer: true,
    tags: ['Game Dev', 'Unity', 'C#', 'Spring Boot', 'REST API', 'MySQL'],
    desc: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          One of my Unity-based games inspired by Panjat Pinang and{' '}
          <a
            href="https://www.online-stopwatch.com/duck-race/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white underline decoration-cyan-500/60 hover:decoration-cyan-300 underline-offset-4 font-medium transition-colors inline-flex items-center gap-0.5"
            title="Online Stopwatch Duck Race (Reference)"
          >
            <span>Duck Race</span>
            <span className="text-[11px] text-cyan-400 font-mono no-underline">↗</span>
          </a>
          . Panjat Pinang is a traditional Indonesian activity celebrated during Indonesia&apos;s Independence Day. In the game participants climb a slippery pole and claim prizes. I developed this project to not only commemorate the national holiday but also to showcase the potential of integrating cultural heritage with interactive digital experiences.
        </p>
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          The game was built using the Unity game engine. The gameplay interface features a menu where players can set up the event. Users can input rewards, define the height of the pole (Tinggi Tiang), and manage participants (Peserta) through a UI. Players are listed dynamically, and the system ensures that all information is processed smoothly.
        </p>
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          To manage the backend, I developed a REST API using Spring Boot, which connects the game to a relational database to track race results and record who wins the race.
        </p>
      </div>
    ),
  },
  {
    id: 'yair',
    projectName: 'E-Letter',
    category: 'Web & Backend',
    status: 'Live Demo',
    about: 'Organization e-signature and e-letter correspondence management system',
    githubLink: 'https://github.com/ARosyidG/yair',
    demoLink: 'https://yair.ganausi.com',
    hasHostingDisclaimer: true,
    credentials: {
      username: 'ganausi',
      password: '12345678',
      note: 'Demo Administrator Access',
    },
    tags: ['Laravel', 'PHP', 'Web App', 'E-Signature', 'MySQL', 'MVC'],
    desc: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          This project is designed to streamline the management of correspondence within an organization. Its primary goal is to enable members of the organization to create and sign documents from anywhere, ensuring that all processes related to correspondence can be handled swiftly and efficiently.
        </p>
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          The project is built using the Laravel framework, featuring role-based workflows, letter template generation, and digital e-signatures for official document ratification.
        </p>
      </div>
    ),
  },
];

export default function ProjectsContent() {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const activeProject = useMemo(() => {
    return projects.find((p) => p.id === activeProjectId) || projects[0];
  }, [activeProjectId]);

  const activeIndex = projects.findIndex((p) => p.id === activeProject.id);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectProject = (projectId: string) => {
    setActiveProjectId(projectId);
    scrollToTop();
  };

  const handlePrevProject = () => {
    const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
    setActiveProjectId(projects[prevIndex].id);
    scrollToTop();
  };

  const handleNextProject = () => {
    const nextIndex = (activeIndex + 1) % projects.length;
    setActiveProjectId(projects[nextIndex].id);
    scrollToTop();
  };

  const copyToClipboard = (text: string, field: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case 'Live Demo':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-500/50 text-xs font-mono font-semibold shadow-[0_0_10px_rgba(16,185,129,0.25)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
            LIVE DEMO
          </span>
        );
      case 'Open Source':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-500/50 text-xs font-mono font-semibold shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            OPEN SOURCE
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-cyan-900/60 pb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-mono">
            <span className="neon-text">&gt;</span> PROJECT_ARCHIVE
          </h2>
          <p className="text-slate-400 text-xs font-mono mt-1">
            Status: Active Repositories • Studio Works &amp; Featured Titles
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
          <span>{projects.length} FEATURED PROJECTS</span>
        </div>
      </div>

      {/* Mobile-only Project Selector (< lg screens) */}
      <div className="lg:hidden">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-4 py-3 bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-mono text-sm rounded-sm shadow-lg flex justify-between items-center transition-colors hover:border-cyan-400 cursor-pointer"
          >
            <div className="flex items-center gap-2 overflow-hidden text-left">
              <span className="text-xs text-slate-500 font-mono">
                [0{activeIndex + 1}]
              </span>
              <span className="font-bold truncate text-white">{activeProject.projectName}</span>
            </div>
            <span
              className={`text-xs text-cyan-400 transition-transform duration-300 shrink-0 ml-2 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-950/95 border border-cyan-500/50 rounded-sm shadow-2xl overflow-hidden z-30 backdrop-blur-xl divide-y divide-slate-800/80">
              {projects.map((project, idx) => (
                <button
                  key={project.id}
                  onClick={() => {
                    handleSelectProject(project.id);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left font-mono text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    activeProject.id === project.id
                      ? 'bg-cyan-950/70 text-cyan-300 border-l-4 border-cyan-400 font-bold'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-cyan-400'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-slate-500">0{idx + 1}.</span>
                    <span className="truncate">{project.projectName}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 shrink-0 ml-2">
                    [{project.status}]
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Grid: Desktop Sidebar + Showcase Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Sidebar: HUD Project Directory (Desktop Only) */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-40 space-y-4">
          {/* Project Directory List */}
          <div className="cyber-panel p-3.5 rounded-sm border border-cyan-900/50 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-2">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <span>&gt;</span> PROJECT_DIRECTORY
              </span>
              <span className="text-[10px] text-slate-500">
                [0{projects.length} PROJECTS]
              </span>
            </div>

            <div className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto pr-1">
              {projects.map((project, idx) => {
                const isActive = activeProject.id === project.id;
                return (
                  <button
                    key={project.id}
                    onClick={() => handleSelectProject(project.id)}
                    className={`w-full text-left p-3 rounded-sm font-mono transition-all duration-200 cursor-pointer relative overflow-hidden group cyber-tab-sheen ${
                      isActive
                        ? 'cyber-tab-active border-l-4 border-l-cyan-400'
                        : 'cyber-tab-inactive hover:border-cyan-500/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span
                        className={`text-[11px] font-bold ${
                          isActive ? 'text-cyan-300' : 'text-slate-500 group-hover:text-cyan-400/80'
                        }`}
                      >
                        0{idx + 1}. {'//'} {project.category.toUpperCase()}
                      </span>
                      {project.status === 'Live Demo' ? (
                        <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          LIVE
                        </span>
                      ) : (
                        <span className="text-[10px] text-cyan-400/80">OPEN</span>
                      )}
                    </div>

                    <div className="font-bold text-xs md:text-sm text-white group-hover:text-cyan-300 transition-colors truncate">
                      {isActive && <span className="text-cyan-400 mr-1.5">&gt;</span>}
                      {project.projectName}
                    </div>

                    <div className="text-[11px] text-slate-400 mt-1 truncate">
                      {project.tags.slice(0, 2).join(' • ')}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right Column: Main Project HUD Showcase Card */}
        <div className="lg:col-span-8 cyber-panel cyber-corner rounded-xl p-6 md:p-8 space-y-6">
        {/* Top Meta & Status Tracker */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400">
            <span>{'//'} ARCHIVE_ID: [PRJ-0{activeIndex + 1}]</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 uppercase tracking-wider">{activeProject.category}</span>
          </div>
          <div>{getStatusBadge(activeProject.status)}</div>
        </div>

        {/* Project Title & Tagline */}
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-mono tracking-tight flex items-center gap-2">
            <span className="neon-text">&gt;</span> {activeProject.projectName}
          </h3>
          <p className="text-cyan-300 font-mono text-sm md:text-base leading-relaxed">
            {activeProject.about}
          </p>

          {/* Tags */}
          {activeProject.tags && activeProject.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Hub / CTAs (Live Demo & Source Code) */}
        {(activeProject.demoLink || activeProject.githubLink) && (
          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              {activeProject.demoLink && (
                <a
                  href={activeProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-xs md:text-sm transition-all shadow-[0_0_15px_rgba(16,185,129,0.35)] hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:-translate-y-0.5"
                >
                  <span>{activeProject.demoLabel || '🌐 LIVE DEMO PREVIEW'}</span>
                  <span className="text-xs">↗</span>
                </a>
              )}

              {activeProject.githubLink && (
                <a
                  href={activeProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs md:text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.35)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:-translate-y-0.5"
                >
                  <span>💻 SOURCE REPOSITORY</span>
                  <span className="text-xs">↗</span>
                </a>
              )}
            </div>

            {/* Live Demo Hosting Disclaimer */}
            {activeProject.demoLink && activeProject.hasHostingDisclaimer && (
              <div className="p-3 rounded-lg bg-amber-950/25 border border-amber-500/30 text-xs font-mono text-slate-300 flex items-start gap-2 max-w-2xl">
                <span className="text-amber-400 font-bold shrink-0">⚠️ {'[DISCLAIMER]'}:</span>
                <span className="leading-relaxed">
                  Live demo availability depends on active hosting status — if the site fails to load, I might have forgotten to pay the web hosting bill! 😅 (Source code is always available on GitHub).
                </span>
              </div>
            )}
          </div>
        )}

        {/* Demo Credentials Box (if applicable, e.g. for E-Letter) */}
        {activeProject.credentials && (
          <div className="rounded-xl p-4 md:p-5 bg-slate-950/80 border border-cyan-500/30 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-slate-800/80 pb-2">
              <span className="flex items-center gap-2">
                <span>🔑</span> {'//'} DEMO_ACCESS_CREDENTIALS
              </span>
              <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE TEST ACCOUNT
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Use these credentials to authenticate and explore administrative and e-signing features:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center justify-between bg-slate-900/90 px-3.5 py-2.5 rounded-lg border border-slate-800">
                <div>
                  <span className="text-slate-500 block text-[10px]">USERNAME</span>
                  <code className="text-cyan-300 font-bold text-sm">
                    {activeProject.credentials.username}
                  </code>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(activeProject.credentials!.username, 'username')
                  }
                  className="px-2.5 py-1 rounded bg-slate-800 text-[11px] text-slate-300 hover:text-cyan-300 hover:bg-slate-700 transition-colors"
                >
                  {copiedField === 'username' ? 'COPIED ✓' : 'COPY'}
                </button>
              </div>

              <div className="flex items-center justify-between bg-slate-900/90 px-3.5 py-2.5 rounded-lg border border-slate-800">
                <div>
                  <span className="text-slate-500 block text-[10px]">PASSWORD</span>
                  <code className="text-cyan-300 font-bold text-sm">
                    {activeProject.credentials.password}
                  </code>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(activeProject.credentials!.password, 'password')
                  }
                  className="px-2.5 py-1 rounded bg-slate-800 text-[11px] text-slate-300 hover:text-cyan-300 hover:bg-slate-700 transition-colors"
                >
                  {copiedField === 'password' ? 'COPIED ✓' : 'COPY'}
                </button>
              </div>
            </div>
          </div>
        )}



        {/* In-Depth Project Details */}
        <div className="border-t border-slate-800/80 pt-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>&gt; 01. TECHNICAL_OVERVIEW &amp; CONTEXT</span>
          </div>
          <div className="text-slate-300">{activeProject.desc}</div>
        </div>

        {/* Bottom Quick-Nav Navigation Controls */}
        <div className="flex items-center justify-between border-t border-slate-800/80 pt-5 text-xs font-mono">
          <button
            onClick={handlePrevProject}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 border border-slate-800 hover:border-cyan-500/30 transition-all"
          >
            <span>◂</span> PREV_PROJECT
          </button>
          <span className="text-slate-500 text-xs">
            [ 0{activeIndex + 1} / 0{projects.length} ]
          </span>
          <button
            onClick={handleNextProject}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 border border-slate-800 hover:border-cyan-500/30 transition-all"
          >
            NEXT_PROJECT <span>▸</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);
}

