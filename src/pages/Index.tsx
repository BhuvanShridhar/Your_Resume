
import React from 'react';
import Layout from '@/components/layout/Layout';
import AboutMe from '@/components/sections/AboutMe';
import Skills from '@/components/sections/Skills';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-portfolio-primary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-portfolio-accent">Bhuvan Shridhar</span>
              <br />
              The cool guy who builds stuff
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Runs on coffee, code, and occasional debugging rage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-portfolio-accent hover:bg-portfolio-accent/90">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AboutMe />
      <Skills />
      
      {/* Featured Projects Preview */}
      <section className="section-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title mb-0 animate-fadeIn">Featured Projects</h2>
          <Button asChild variant="outline" className="animate-fadeIn">
            <Link to="/projects">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* This is just a preview - will show 3 projects on the home page */}
          {[1, 2, 3].map((num) => (
            <div 
              key={num}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg animate-slideUp"
              style={{ animationDelay: `${0.1 * num}s` }}
            >
              <div className="aspect-video bg-gray-200">
                <img 
                  src={`View_all.png`} 
                  alt={`Project ${num}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project {num}</h3>
                <p className="text-portfolio-muted mb-4">
                  
                </p>
                <Button asChild variant="link" className="p-0 h-auto font-medium text-portfolio-accent">
                  <Link to={`/projects#project-${num}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
