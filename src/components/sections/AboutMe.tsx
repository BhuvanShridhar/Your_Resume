
import React from 'react';
import { Briefcase, GraduationCap, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title animate-fadeIn">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Photo */}
        <div className="md:col-span-1 flex justify-center md:justify-start animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-portfolio-accent shadow-lg">
            <img 
              src="/1666285197722.jpeg" 
              alt="Your Name" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Bio */}
        <div className="md:col-span-2 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-4">Hello, I'm <span className="highlight">Bhuvan Shridhar</span></h3>
          <p className="text-lg mb-6">
          I explore emerging technologies and continuously expand my expertise across various domains. I experiment with new tools and apply my knowledge to real-world projects to stay ahead in the ever-evolving tech landscape.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <Card className="border-l-4 border-l-portfolio-accent">
              <CardContent className="p-4">
                <div className="flex items-start">
                  <div className="bg-portfolio-accent/10 p-2 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-sm text-portfolio-muted">B-Tech:COMPUTER SCIENCE 
                    ENGINEERING (AIDS) REVA UNIVERSITY
                  </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-portfolio-accent">
              <CardContent className="p-4">
                <div className="flex items-start">
                  <div className="bg-portfolio-accent/10 p-2 rounded-full mr-4">
                    <Briefcase className="h-6 w-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Experience</h4>
                    <p className="text-sm text-portfolio-muted">1 year in Web Development</p>
                    <p className="text-sm text-portfolio-muted">3 months in web3</p>
                    <p className="text-sm text-portfolio-muted">1 month in appdev</p>
                    <p className="text-sm text-portfolio-muted">1 month in backend</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
