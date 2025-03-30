
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "My Resume",
      description: "My personal portfolio website showcasing my skills, projects, and professional experience.",
      image: "shutterstock_1074499718-scaled.jpg",
      technologies: ["Vite", "TypeScript", "React", "shadcn-ui","Tailwind CSS"],
      demoUrl: "https://your-resume.vercel.app/",
      githubUrl: "https://github.com/BhuvanShridhar/Your_Resume"
    },
    {
      id: 2,
      title: "Green Energy Exchange",
      description: "Green Energy Exchange is a platform for seamless energy trading, enabling both producers and sellers to log in and trade efficiently. The platform also integrates with MetaMask, allowing secure and decentralized transactions.",
      image: "Tackling-the-shift-to-renewable-energy-trading.jpg",
      technologies: ["Vite", "TypeScript", "React", "shadcn-ui","Tailwind CSS","solidity","ethers.js","web3.js"],
      demoUrl: "https://greenenergy-exchange.vercel.app/",
      githubUrl: "https://github.com/gettrilled/green-energy-exchange"
    },
    {
      id: 3,
      title: "AI Powered PERSONAL FINANCE MANAGER",
      description: "AI-Powered Personal Finance Manager – a smart solution to track your expenses effortlessly. Integrated with an AI bot, it helps you monitor your finances and provides real-time insights for better money management.****(Put Username as user and Password as pass)****",
      image: "finance.jpeg",
      technologies: ["React", "Tailwind CSS", "HTML/CSS","JavaScript","mangoDB","api"],
      demoUrl: "https://ai-powered-personal-finance-manager.vercel.app/",
      githubUrl: "https://github.com/BhuvanShridhar/AI-Powered_PERSONAL_FINANCE_MANAGER"
    },
    {
      id: 4,
      title: "Rock Vs Mine",
      description: "In the Rock vs Mine project, the goal is to predict whether the input coordinates correspond to a rock or a mine, based on a machine learning model. However, before making predictions, the raw data must undergo preprocessing to ensure it is in the right format and optimized for the model. Preprocessing typically involves steps like handling missing values, feature scaling, and encoding categorical data, among others. To achieve this, it is crucial to import several important libraries.",
      image: "Rock_VS_MINE.jpg",
      technologies: ["python"],
      demoUrl: "https://github.com/BhuvanShridhar/Rock-Vs-Mine/blob/main/rock_vs_mine_prediction.py",
      githubUrl: "https://github.com/BhuvanShridhar/Rock-Vs-Mine"
    },
    {
      id: 5,
      title: "Notes App",
      description: "Notes App – a user-friendly platform where you can create deadlines, add notes, and share them effortlessly with others for seamless collaboration and accessibility",
      image: "notes app.jpeg",
      technologies: ["JavaScript", "HTML/CSS", "Firebase"],
      demoUrl: "https://smartnotes-zeta.vercel.app/",
      githubUrl: "https://github.com/PritamP20/Notes-App"
    },
  ];

  return (
    <Layout>
      <section className="bg-portfolio-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-4 animate-fadeIn">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl animate-slideUp">
            A showcase of my recent work, personal projects, and things I've built. 
            Each project reflects my skills, problem-solving abilities, and attention to detail.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              id={`project-${project.id}`}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-slideUp"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-portfolio-dark text-sm">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-portfolio-accent hover:bg-portfolio-accent/90">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
