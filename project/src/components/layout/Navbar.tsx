import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="backdrop-blur-md bg-black/30 px-6 py-4 rounded-full border border-gray-800/50">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks isHome={isHome} />
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 flex flex-col space-y-4">
            <NavLinks isHome={isHome} />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ isHome }: { isHome: boolean }) => {
  if (!isHome) {
    return (
      <>
        <Link to="/" className="text-white hover:text-[#06FF00] transition-colors">
          Home
        </Link>
        <button 
          className="px-4 py-2 rounded-lg border border-[#06FF00] text-[#06FF00] hover:bg-[#06FF00] hover:text-black transition-all"
          onClick={() => window.authModal.showModal()}
        >
          Login
        </button>
      </>
    );
  }

  return (
    <>
      <ScrollLink
        to="pricing"
        smooth={true}
        duration={500}
        className="text-white hover:text-[#06FF00] transition-colors cursor-pointer"
      >
        Pricing
      </ScrollLink>
      <ScrollLink
        to="workflow"
        smooth={true}
        duration={500}
        className="text-white hover:text-[#06FF00] transition-colors cursor-pointer"
      >
        Workflow
      </ScrollLink>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className="text-white hover:text-[#06FF00] transition-colors cursor-pointer"
      >
        About
      </ScrollLink>
      <button 
        className="px-4 py-2 rounded-lg border border-[#06FF00] text-[#06FF00] hover:bg-[#06FF00] hover:text-black transition-all"
        onClick={() => window.authModal.showModal()}
      >
        Login
      </button>
    </>
  );
};

export default Navbar;