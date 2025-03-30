
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML/CSS', level: 78 },
    { name: 'JavaScript', level: 63 },
    { name: 'React', level: 61 },
    { name: 'Node.js', level: 67 },
    { name: 'Express.js', level: 50 },
    { name: 'MongoDB', level: 45 },
    { name: 'Python', level: 55 },
    { name: 'Django', level: 50 },
    { name: 'Solidity', level: 20 },
    { name: 'Ethereum', level: 23 },
    { name: 'Web3.js', level: 10 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'Bootstrap', level: 65 },
    { name: 'Git/GitHub', level: 63 },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="section-container">
        <h2 className="section-title animate-fadeIn">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="animate-slideUp" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-portfolio-muted">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
