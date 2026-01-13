import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/MiniNav.css"; // Assure-toi que le CSS s'appelle bien comme ça

const MiniNav = () => {
  return (
    <nav className="mini-flowing-nav">
      {/* BOUTON DE RETOUR FIXE */}
      <Link to="/" className="nav-back-btn">
        <span className="arrow">←</span> BACK
      </Link>
      
      {/* BANDEAU DÉFILANT */}
      <div className="mini-ticker">
        <div className="ticker-track">
          {/* On répète le texte deux fois pour une boucle infinie parfaite */}
          <span>ABOUT ME ✦ LILIAN WOJEIK ✦ STRATÉGIE & DESIGN ✦ ABOUT ME ✦ LILIAN WOJEIK ✦ STRATÉGIE & DESIGN ✦</span>
          <span>ABOUT ME ✦ LILIAN WOJEIK ✦ STRATÉGIE & DESIGN ✦ ABOUT ME ✦ LILIAN WOJEIK ✦ STRATÉGIE & DESIGN ✦</span>
        </div>
      </div>
    </nav>
  );
};

export default MiniNav;