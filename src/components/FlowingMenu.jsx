import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../styles/FlowingMenu.css";

const MenuItem = ({ text, link, className, isRed }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    // Si le lien commence par #, on gère le scroll fluide
    if (link.startsWith('#')) {
      e.preventDefault();
      const targetId = link.substring(1); 
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a 
      href={link} 
      onClick={handleClick}
      className={`menu-item ${className} ${isHovered ? 'is-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* On garde le menu-text TOUJOURS présent mais on joue sur l'opacité 
          pour éviter les sauts de rendu */}
      <span 
        className={`menu-text ${isRed ? 'red-link' : ''}`}
        style={{ opacity: isHovered ? 0 : 1 }}
      >
        {text}
      </span>

      {isHovered && (
        <div className="marquee-container">
          <motion.div 
            className="marquee-content"
            animate={{ x: [0, -1000] }} 
            transition={{ 
              ease: "linear", 
              duration: 8, 
              repeat: Infinity 
            }}
          >
            {/* On répète pour l'effet infini */}
            {[...Array(6)].map((_, i) => (
              <span key={i} className="marquee-item">
                {text}
                <span className="marquee-star">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      )}
    </a>
  );
};

const FlowingMenu = ({ variant = "full" }) => {
  return (
    <nav className={`flowing-menu menu-${variant}`}>
      <MenuItem text="ABOUT ME" link="/about" className="bg-about" />
      <MenuItem text="CONTACT" link="#contact" className="bg-contact" isRed={true} />
      <MenuItem text="WORK" link="#work" className="bg-work" />
    </nav>
  );
};

export default FlowingMenu;