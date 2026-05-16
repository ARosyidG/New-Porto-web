'use client';

import ProjectsContent from './ProjectsContent';

interface TabContentProps {
  activeTab: string;
}

function AboutContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">About Me</h2>
      
      <div className="space-y-3">
        <p className="text-slate-300 leading-relaxed">
          Born in 2000 in Lombok, Indonesia. I'm a passionate developer with a dream to create engaging games that captivate players around the world.
        </p>
        
        <div className="border-l-4 border-slate-600 pl-4 py-2">
          <h3 className="font-semibold text-slate-100 mb-2">My Passion</h3>
          <p className="text-slate-300">
            I aspire to be a <span className="text-slate-100 font-medium">game developer</span>, crafting immersive experiences and compelling narratives. I'm particularly drawn to RPG games with deep storytelling and complex mechanics.
          </p>
        </div>

        <div className="border-l-4 border-slate-600 pl-4 py-2">
          <h3 className="font-semibold text-slate-100 mb-2">Languages</h3>
          <p className="text-slate-300">
            🇮🇩 Indonesia (Native) • 🇬🇧 English (Fluent) • 🇯🇵 Japanese (Learning)
          </p>
        </div>

        <div className="border-l-4 border-slate-600 pl-4 py-2">
          <h3 className="font-semibold text-slate-100 mb-2">Learning Philosophy</h3>
          <p className="text-slate-300">
            I love learning new things! Whether it's game engines, programming languages, or game design principles, continuous growth drives my passion for development.
          </p>
        </div>
      </div>
    </div>
  );
}

function EducationContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Education</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-slate-600 pl-4 py-2">
          <h3 className="font-bold text-white">Degree in Computer Science</h3>
          <p className="text-slate-400 text-sm">University Name • Graduation Year</p>
          <p className="text-slate-300 mt-2">
            Completed coursework in data structures, algorithms, and web development.
          </p>
        </div>
        <div className="border-l-4 border-slate-600 pl-4 py-2">
          <h3 className="font-bold text-white">Certifications</h3>
          <p className="text-slate-400 text-sm">Various Online Platforms</p>
          <p className="text-slate-300 mt-2">
            Advanced certifications in React, Node.js, and Full Stack Development.
          </p>
        </div>
      </div>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Experience</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-slate-600 pl-4 py-2">
          <h3 className="font-bold text-white">Game Developer</h3>
          <p className="text-slate-400 text-sm">October 2025 - Present</p>
          <p className="text-slate-300 mt-2">
            Currently developing a Roblox game, leveraging my expertise in game design and development to create engaging gameplay experiences.
          </p>
        </div>
        <div className="border-l-4 border-slate-600 pl-4 py-2">
          <h3 className="font-bold text-white">Research Assistant</h3>
          <p className="text-slate-400 text-sm">2024</p>
          <p className="text-slate-300 mt-2">
            Topic: VR, Medical Education, Game. Developing a VR application for medical education, combining virtual reality technology with educational content to enhance learning experiences.
          </p>
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
