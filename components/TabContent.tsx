'use client';

import AboutContent from './AboutContent';
import ProjectsContent from './ProjectsContent';

interface TabContentProps {
  activeTab: string;
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
  const experiences = [
    {
      year: '2024',
      title: 'Research Assistant',
      description: 'Developing a VR app for Medical Education',
      topic: 'VR, Medical Education, Game',
      side: 'left'
    },
    {
      year: 'October 2025 - Present',
      title: 'Game Programmer',
      description: 'Program gameplay for Roblox games, implementing game mechanics and interactive features.',
      side: 'right'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white font-mono">
        <span className="neon-text">&gt; EXPERIENCE_DATA</span>
      </h2>
      
      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-slate-700"></div>

        {/* Experience Items */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-8 items-start relative">
              {exp.side === 'left' ? (
                <>
                  {/* Left Side Content */}
                  <div className="text-right pr-4">
                    <h3 className="font-bold text-cyan-400 text-lg">{exp.year}</h3>
                    <p className="font-semibold text-white">{exp.title}</p>
                    <p className="text-slate-300 text-sm mt-2">{exp.description}</p>
                    {exp.topic && (
                      <p className="text-slate-300 text-sm mt-1">
                        <span className="font-semibold">Topic:</span> {exp.topic}
                      </p>
                    )}
                  </div>
                  
                  {/* Right Side Empty */}
                  <div></div>
                </>
              ) : (
                <>
                  {/* Left Side Empty */}
                  <div></div>
                  
                  {/* Right Side Content */}
                  <div className="text-left pl-4">
                    <h3 className="font-bold text-cyan-400 text-lg">{exp.year}</h3>
                    <p className="font-semibold text-white">{exp.title}</p>
                    <p className="text-slate-300 text-sm mt-2">{exp.description}</p>
                  </div>
                </>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-2">
                <div className="w-4 h-4 bg-cyan-500 rounded-full border-2 border-slate-900 shadow-lg"></div>
              </div>
            </div>
          ))}

          {/* Final Dot */}
          <div className="relative h-4">
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
              <div className="w-4 h-4 bg-cyan-500 rounded-full border-2 border-slate-900 shadow-lg"></div>
            </div>
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
