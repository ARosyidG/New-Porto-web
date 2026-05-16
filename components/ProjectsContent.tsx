'use client';

import { useState } from 'react';

export interface IProjectList {
  projectName: string;
  about: string;
  githubLink?: string;
  desc: React.ReactNode;
  tags?: string[];
}

const projectsMap = new Map<string, IProjectList>();

projectsMap.set('LearningAnatomy', {
  projectName: 'Learning Anatomy',
  about: 'This is my final project in University',
  githubLink: 'https://github.com/ARosyidG/Learning-Anatomy',
  tags: ['VR', 'Unity', 'C#', '3D Modeling'],
  desc: (
    <div className="space-y-4">
      <p className="text-justify">
        This project aims to simulate skeletal anatomy learning at Mataram University. The application developed from this project is based on Virtual Reality.
      </p>
      <p className="text-justify">
        All 3D assets in this project is created by me except The bone and VR Controller model. The bone model used in this project is the pelvic bone model obtained from Z-Anatomy. This highly detailed model provides an accurate representation of human anatomy, which is essential for effective learning. The application&apos;s content features modified transformations of the bone model, allowing students to explore and observe the pelvic bone from all angles.
      </p>
      <p className="text-justify">
        In its development, I used the XRI Package provided by Unity. This package was utilized solely to obtain input from the Oculus Quest 2, and I did not use the Grab Interactable component that it offers. The limitations of this component hindered the realization of the design requested by the university. As a result, I recreated the functionalities for grabbing, rotating, and scaling to align with the university&apos;s desired design.
      </p>
    </div>
  ),
});

projectsMap.set('PanjatPinang', {
  projectName: 'Panjat Pinang',
  about: 'Game to Celebrate Indonesian Independence Day',
  githubLink: 'https://github.com/ARosyidG/Panjat-Pinang',
  tags: ['Game Dev', 'Unity', 'C#', 'Spring Boot'],
  desc: (
    <div className="space-y-4">
      <p className="text-justify">
        One of my Unity-based game inspired by Panjat Pinang and Duck Race. Panjat Pinang is a traditional Indonesian activity celebrated during Indonesia&apos;s Independence Day. In the game participants climb a slippery pole and claim prizes. I developed this project to not only commemorate the national holiday but also to showcase the potential of integrating cultural heritage with interactive digital experiences.
      </p>
      <p className="text-justify">
        The game was built using the Unity game engine. The gameplay interface features a menu where players can set up the event. Users can input rewards, define the height of the pole (Tinggi Tiang), and manage participants (Peserta) through a UI. Players are listed dynamically, and the system ensures that all information is processed smoothly.
      </p>
      <p className="text-justify">
        To manage the backend, I developed a REST API using Spring Boot, which connects the game to a relational database. The database stores player login info, participants names and the rewards they earned during the game.
      </p>
      <div>
        <span className="text-slate-300">Demo: </span>
        <a
          href="https://17an.ganausi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-100 hover:text-white underline"
        >
          https://17an.ganausi.com
        </a>
      </div>
    </div>
  ),
});

projectsMap.set('yair', {
  projectName: 'E-Letter',
  about: 'Organization e-signature and e-letter app.',
  githubLink: 'https://github.com/ARosyidG/yair',
  tags: ['Laravel', 'PHP', 'Web App', 'E-Signature'],
  desc: (
    <div className="space-y-4">
      <p className="text-justify">
        This project is designed to streamline the management of correspondence within an organization. Its primary goal is to enable members of the organization to create and sign documents from anywhere, ensuring that all processes related to correspondence can be handled swiftly and efficiently.
      </p>
      <p className="text-justify">The project is built using the Laravel framework</p>
      <div className="space-y-3">
        <div>
          <span className="text-slate-300">Demo: </span>
          <a
            href="https://yair.ganausi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 hover:text-white underline"
          >
            https://yair.ganausi.com
          </a>
        </div>
        <div className="bg-slate-700 rounded p-3">
          <p className="text-slate-300 text-sm">
            <span className="font-bold">Username:</span> ganausi
          </p>
          <p className="text-slate-300 text-sm">
            <span className="font-bold">Password:</span> 12345678
          </p>
        </div>
      </div>
    </div>
  ),
});

projectsMap.set('GroupTaskSync', {
  projectName: 'Group Task Sync',
  about: 'App to synchronize task list.',
  githubLink: 'https://github.com/ARosyidG/Java.net-GroupTaskSync',
  tags: ['Java', 'Networking', 'Java.net'],
  desc: (
    <div className="space-y-4">
      <p className="text-justify">
        A learning project to explore and master Java networking (java.net) capabilities. This application demonstrates real-time task synchronization across multiple clients in a group environment.
      </p>
    </div>
  ),
});

projectsMap.set('terrain-generator', {
  projectName: 'Terrain Generator',
  about: 'Procedural terrain generator',
  githubLink: 'https://github.com/ARosyidG/terrain-generator.git',
  tags: ['Godot', 'GDScript', 'Procedural Generation'],
  desc: (
    <div className="space-y-4">
      <p className="text-justify">
        The script is written in Godot and designed to procedurally generate terrain by assigning a specific 3D model (created in Blender) to each tile in a grid, following a set of predefined rules.
      </p>
      <div>
        <h4 className="font-bold text-slate-100 mb-2">How it works:</h4>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>Scans surrounding tiles to generate a neighbor configuration array</li>
          <li>Matches array against patterns stored in a dictionary</li>
          <li>Assigns selected model/mesh to the tile with optional rotation</li>
        </ul>
      </div>
    </div>
  ),
});

projectsMap.set('LearningAnatomyV2', {
  projectName: 'Learning Anatomy V2',
  about: 'Coming Soon (Legal reasons)',
  tags: ['VR', 'Unity', 'Under Development'],
  desc: (
    <div className="space-y-4">
      <p className="text-slate-400 italic">
        This project is in development. Details will be available once legal procedures are completed.
      </p>
    </div>
  ),
});

const projects = Array.from(projectsMap.values());

function ProjectTab({
  project,
  isActive,
  onClick,
}: {
  project: IProjectList;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base font-mono ${
        isActive
          ? 'bg-cyan-500 text-slate-900 shadow-lg border border-cyan-400 glow-animation font-bold'
          : 'text-slate-300 hover:text-cyan-400 border border-transparent hover:border-cyan-600 hover:bg-slate-700/30'
      }`}
    >
      {project.projectName}
    </button>
  );
}

export default function ProjectsContent() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMobileProjectChange = (project: IProjectList) => {
    setActiveProject(project);
    setIsDropdownOpen(false);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white font-mono">
        <span className="neon-text">&gt; PROJECT_ARCHIVE</span>
      </h2>

      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-6 py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-slate-900 font-medium font-mono rounded-lg shadow-lg flex justify-between items-center border border-cyan-400 glow-animation"
          >
            [{activeProject.projectName}]
            <span
              className={`transition-transform duration-300 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border-2 border-cyan-600 rounded-lg shadow-lg overflow-hidden z-10 border-glow">
              {projects.map((project) => (
                <button
                  key={project.projectName}
                  onClick={() => handleMobileProjectChange(project)}
                  className={`w-full px-6 py-3 text-left font-medium font-mono transition-all duration-300 ${
                    activeProject.projectName === project.projectName
                      ? 'bg-cyan-600/30 text-cyan-400 border-l-4 border-cyan-400'
                      : 'text-slate-300 hover:bg-slate-700/50 hover:text-cyan-400'
                  }`}
                >
                  &gt; {project.projectName}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Project Tabs */}
      <div className="hidden md:flex flex-wrap gap-2 p-4 bg-slate-800 rounded-lg overflow-x-auto border border-cyan-600/30 border-glow">
        {projects.map((project) => (
          <ProjectTab
            key={project.projectName}
            project={project}
            isActive={activeProject.projectName === project.projectName}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>

      {/* Project Details */}
      <div className="space-y-6">
        {/* Project Header */}
        <div className="border-l-4 border-cyan-500 pl-6 py-2 bg-slate-800/50 rounded p-6">
          <h3 className="text-3xl font-bold text-white mb-2 font-mono">
            <span className="neon-text">&gt;</span> {activeProject.projectName}
          </h3>
          <p className="text-cyan-300 text-lg mb-4">{activeProject.about}</p>

          {/* Tags */}
          {activeProject.tags && activeProject.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-600 font-mono"
                >
                  [ {tag} ]
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Project Description */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-600/30 border-glow">
          <div className="text-slate-300 space-y-4">{activeProject.desc}</div>
        </div>

        {/* Call to Action */}
        {activeProject.githubLink && (
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg p-6 border-2 border-cyan-600 border-glow">
            <p className="text-slate-300 mb-4 font-mono">
              <span className="neon-text">&gt;</span> View source code on GitHub
            </p>
            <a
              href={activeProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 border border-cyan-400 glow-animation font-mono"
            >
              [ OPEN_REPO ]
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
