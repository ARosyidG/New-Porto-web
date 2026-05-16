'use client';

import ProjectsContent from './ProjectsContent';

interface TabContentProps {
  activeTab: string;
}

function AboutContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white font-mono">
        <span className="neon-text">&gt; ABOUT_ME</span>
      </h2>
      
      <div className="space-y-3">
        <p className="text-slate-300 leading-relaxed">
          Born in 2000 in Lombok, Indonesia. I'm a passionate developer with a dream to create engaging games that captivate players around the world.
        </p>
        
        <div className="border-l-4 border-cyan-500 pl-4 py-2 bg-slate-800/50 rounded p-4 shadow-md">
          <h3 className="font-semibold text-cyan-400 mb-2 font-mono">&gt; PASSION</h3>
          <p className="text-slate-300">
            I aspire to be a <span className="text-slate-100 font-medium">game developer</span>, crafting immersive experiences and compelling narratives. I'm particularly drawn to RPG games with deep storytelling and complex mechanics.
          </p>
        </div>

        <div className="border-l-4 border-cyan-500 pl-4 py-2 bg-slate-800/50 rounded p-4 shadow-md">
          <h3 className="font-semibold text-cyan-400 mb-2 font-mono">&gt; LANGUAGES</h3>
          <p className="text-slate-300">
            🇮🇩 Indonesia (Native) • 🇬🇧 English (Fluent) • 🇯🇵 Japanese (Learning)
          </p>
        </div>

        <div className="border-l-4 border-cyan-500 pl-4 py-2 bg-slate-800/50 rounded p-4 shadow-md">
          <h3 className="font-semibold text-cyan-400 mb-2 font-mono">&gt; PHILOSOPHY</h3>
          <p className="text-slate-300">
            I love learning new things! Whether it's game engines, programming languages, or game design principles, continuous growth drives my passion for development.
          </p>
        </div>

        <div className="border-l-4 border-cyan-500 pl-4 py-2 bg-slate-800/50 rounded p-4 shadow-md">
          <h3 className="font-semibold text-cyan-400 mb-2 font-mono">&gt; 3D_MODELING</h3>
          <p className="text-slate-300">
            I work with <span className="text-slate-100 font-medium">Blender</span> for 3D modeling and asset creation. While I'm still developing my skills and wouldn't consider myself a professional, I'm passionate about learning 3D design to complement my game development work. I use Blender for creating custom game assets, prototyping environments, and experimenting with visual concepts.
          </p>
        </div>
      </div>
    </div>
  );
}

function EducationContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white font-mono">
        <span className="neon-text">&gt; EDUCATION_LOG</span>
      </h2>
      <div className="space-y-4">
        <div className="border-l-4 border-slate-600 pl-4 py-2">
          <h3 className="font-bold text-white">Bachelor Degree of Electrical Engineering</h3>
          <p className="text-slate-400 text-sm">GPA: 3.25</p>
          <div className="text-slate-300 mt-2 space-y-1">
            <p><span className="font-semibold">Focus:</span> Computer Science and Network Engineering</p>
          </div>
        </div>
        <div className="border-l-4 border-slate-600 pl-4 py-2">
          <h3 className="font-bold text-white">Certifications</h3>
          <p className="text-slate-300 mt-2">
            No formal certifications at this time.
          </p>
        </div>
      </div>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white font-mono">
        <span className="neon-text">&gt; EXPERIENCE_DATA</span>
      </h2>
      <div className="space-y-4">
        <div className="border-l-4 border-slate-600 pl-4 py-2">
          <h3 className="font-bold text-white">Game Programmer</h3>
          <p className="text-slate-400 text-sm">October 2025 - Present</p>
          <p className="text-slate-300 mt-2">
            Program gameplay for Roblox games, implementing game mechanics and interactive features.
          </p>
        </div>
        <div className="border-l-4 border-slate-600 pl-4 py-2">
          <h3 className="font-bold text-white">Research Assistant</h3>
          <p className="text-slate-400 text-sm">2024</p>
          <div className="text-slate-300 mt-2 space-y-1">
            <p><span className="font-semibold">Topic:</span> VR, Medical Education, Game</p>
            <p>Developing a VR app for Medical Education</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsContentSection() {
  return <ProjectsContent />;
}

export default function TabContent({ activeTab }: TabContentProps) {
  return (
    <div className="py-8">
      {activeTab === 'about' && <AboutContent />}
      {activeTab === 'education' && <EducationContent />}
      {activeTab === 'experience' && <ExperienceContent />}
      {activeTab === 'projects' && <ProjectsContentSection />}
    </div>
  );
}
