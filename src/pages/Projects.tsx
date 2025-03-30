
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
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform built with React, featuring product listings, shopping cart, and checkout functionality.",
      image: "https://picsum.photos/800/600?random=1",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application that helps users organize tasks, set deadlines, and track progress on various projects.",
      image: "https://picsum.photos/800/600?random=2",
      technologies: ["React", "TypeScript", "Firebase"],
      demoUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and professional experience.",
      image: "https://picsum.photos/800/600?random=3",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/yourusername/project3"
    },
    {
      id: 4,
      title: "Weather Application",
      description: "A weather forecasting application that displays current conditions and weekly forecasts based on user location.",
      image: "https://picsum.photos/800/600?random=4",
      technologies: ["JavaScript", "OpenWeather API", "HTML/CSS"],
      demoUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/yourusername/project4"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A content management system allowing users to create, edit, and publish blog posts with rich text formatting.",
      image: "https://picsum.photos/800/600?random=5",
      technologies: ["Next.js", "GraphQL", "PostgreSQL"],
      demoUrl: "https://example.com/demo5",
      githubUrl: "https://github.com/yourusername/project5"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "An analytics dashboard for tracking engagement metrics across various social media platforms.",
      image: "https://picsum.photos/800/600?random=6",
      technologies: ["Vue.js", "D3.js", "Express"],
      demoUrl: "https://example.com/demo6",
      githubUrl: "https://github.com/yourusername/project6"
    }
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
