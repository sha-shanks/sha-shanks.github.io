import React from 'react';
import { Link } from 'react-router-dom';
import logo from './monochromed_26f3de80348645ea94ac1d8514a2940e_cropped_square_nobg.svg';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
      <img src={logo} alt="Detectify Logo" className="w-12 h-12" />
    </Link>
  );
};

export default Logo;