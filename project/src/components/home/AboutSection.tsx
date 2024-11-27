import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            About <span className="text-[#06FF00]">Detectify</span>
          </h2>
          
          <p className="text-gray-300 mb-12 leading-relaxed">
            At Detectify, we're committed to maintaining truth and authenticity in the digital age. 
            Our AI-powered platform helps individuals and organizations identify and combat deepfake 
            content, ensuring a more transparent and trustworthy online environment.
          </p>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To empower users with cutting-edge AI technology that helps distinguish 
              between authentic and manipulated content, promoting digital integrity 
              and trust across the internet.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
            
            <div className="flex justify-center space-x-6">
              <SocialLink icon={Twitter} href="https://twitter.com/detectify" />
              <SocialLink icon={Github} href="https://github.com/detectify" />
              <SocialLink icon={Linkedin} href="https://linkedin.com/company/detectify" />
              <SocialLink icon={Mail} href="mailto:contact@detectify.ai" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border border-[#06FF00] flex items-center justify-center
               hover:bg-[#06FF00] transition-colors group"
  >
    <Icon className="w-5 h-5 text-[#06FF00] group-hover:text-black" />
  </a>
);

export default AboutSection;