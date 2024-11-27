import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      >
        <source src="https://cdn.discordapp.com/attachments/808633141513158666/1311433672867582043/190938-888878238.mp4?ex=6748d748&is=674785c8&hm=34acbaecf20c4712c1e39d14e33fd52465aa4eed100c7fa54a380bf7a82ae322&" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="absolute top-6 left-6">
          {
            //<Shield size={40} className="text-[#06FF00]" />
          }
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 text-center">
          See Through the
          <span className="font-bold block text-[#06FF00]">Illusion</span>
        </h1>

        <button
          onClick={() => navigate('/detect')}
          className="px-8 py-4 bg-[#06FF00] text-black rounded-lg text-xl font-bold
                     hover:bg-[#06FF00]/90 transform hover:scale-105 transition-all
                     shadow-[0_0_20px_rgba(6,255,0,0.3)]"
        >
          Detect Now
        </button>
      </div>
    </div>
  );
};

export default Hero;