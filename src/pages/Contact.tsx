
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would typically send the form data to a backend API or service
    // For now, we'll simulate a successful submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-portfolio-accent" />,
      title: "Email",
      content: "bhuvanptr@gmail.com",
      link: "mailto:bhuvanptr@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-portfolio-accent" />,
      title: "Phone",
      content: "+91-9482849219",
      link: "+91-9482849219"
    },
    {
      icon: <MapPin className="h-5 w-5 text-portfolio-accent" />,
      title: "Location",
      content: "Bangalore, India",
      link: null
    },
    {
      icon: <Linkedin className="h-5 w-5 text-portfolio-accent" />,
      title: "LinkedIn",
      content: "https://www.linkedin.com/in/bhuvan-shridhar-38b5aa251/",
      link: "https://www.linkedin.com/in/bhuvan-shridhar-38b5aa251/"
    },
    {
      icon: <Github className="h-5 w-5 text-portfolio-accent" />,
      title: "GitHub",
      content: "https://github.com/BhuvanShridhar",
      link: "https://github.com/BhuvanShridhar"
    }
  ];

  return (
    <Layout>
      <section className="bg-portfolio-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-4 animate-fadeIn">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl animate-slideUp">
            Have a question or want to work together? Feel free to contact me using the form below
            or through any of my social profiles.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Bhuvan Shridhar"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="123@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto bg-portfolio-accent hover:bg-portfolio-accent/90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="animate-slideUp">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-l-portfolio-accent">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-portfolio-dark">{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target={item.title !== "Email" && item.title !== "Phone" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-sm text-portfolio-accent hover:underline"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm text-portfolio-muted">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium mb-3">Have anything?</h3>
              <p className="text-sm text-portfolio-muted mb-2">Give me a call when you get a chance or</p>
              <p className="text-sm text-portfolio-muted">Whatsapp message, if you cannot connect the call</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
