import React from 'react';
import '../styles/Hero.css';
import Lilian from '../assets/images/Lilian.png';

const Hero = () => {
  return (
    <section className="hero">
      <div 
        className="hero-background" 
        style={{ backgroundImage: `url(${Lilian})` }}
      ></div>
    </section>
  );
};

export default Hero;