import React from 'react';
import { Upload, Cpu, FileCheck, Shield } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Content',
    description: 'Upload your media through our intuitive interface',
  },
  {
    icon: Cpu,
    title: 'AI Analysis',
    description: 'Our advanced AI processes and analyzes the content',
  },
  {
    icon: FileCheck,
    title: 'Get Results',
    description: 'Receive detailed analysis and authenticity report',
  },
  {
    icon: Shield,
    title: 'Take Action',
    description: 'Make informed decisions based on our findings',
  },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          How It <span className="text-[#06FF00]">Works</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-black border-2 border-[#06FF00] flex items-center justify-center mb-6">
                <step.icon className="w-10 h-10 text-[#06FF00]" />
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#06FF00] to-transparent" />
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;