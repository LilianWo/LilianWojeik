import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link'; 
import PhotoDeMoi from '../assets/images/PhotoDeMoi.png'; 
import "../styles/About.css";

const About = () => {
  const [tickerText, setTickerText] = useState("");
  const [showNav, setShowNav] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY.current && scrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = scrollY;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  const handleMouseEnter = (text) => setTickerText(text);
  const handleMouseLeave = () => setTickerText("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const renderTickerContent = () => {
    if (!tickerText) return null;
    const item = (
      <React.Fragment>
        {tickerText} <span className="red-star" style={{color: '#b41919', marginLeft: '15px', marginRight: '15px'}}>✦</span>{" "}
      </React.Fragment>
    );
    return (
      <div className="ticker-track">
        <span>{item}{item}{item}{item}{item}{item}</span>
        <span>{item}{item}{item}{item}{item}{item}</span>
      </div>
    );
  };

  return (
    <div className="about-page" id="top">
      
      <nav className={`mini-flowing-nav ${!showNav ? 'nav-hidden' : ''}`}>
        <div className="nav-controls">
          <HashLink smooth to="/#top" className="nav-btn-red" onMouseEnter={() => handleMouseEnter("BACK TO HOME")} onMouseLeave={handleMouseLeave}>
            <span className="arrow">←</span> HOME
          </HashLink>
          <HashLink smooth to="/#work" className="nav-btn-red" onMouseEnter={() => handleMouseEnter("SELECTED WORKS")} onMouseLeave={handleMouseLeave}>
            WORK
          </HashLink>
          <HashLink smooth to="/#contact" className="nav-btn-red" onMouseEnter={() => handleMouseEnter("SAY HELLO")} onMouseLeave={handleMouseLeave}>
            CONTACT
          </HashLink>
        </div>
        <div className={`mini-ticker ${tickerText ? "is-visible" : ""}`}>
          {renderTickerContent()}
        </div>
      </nav>

      <section className="about-hero">
        <h1 className="huge-title">LILIAN <span className="red-text">WOJEIK</span></h1>
        <div className="alternance-badge"><span className="dot"></span>STAGE DE 10 SEMAINES — 7 AVRIL 2026</div>
        <div className="hero-content-wrapper">
          <p className="about-intro">
            Actuellement étudiant en 2ème année de <strong>BUT MMI</strong> à l'Université Sorbonne Paris Nord, je me spécialise en stratégie de communication numérique. Maîtrisant <strong>React.js</strong> et le <strong>SEO</strong>, je lie technique et théorie pour concevoir des expériences de marque complètes.
          </p>
          <div className="about-photo-container">
            <img src={PhotoDeMoi} alt="Lilian Wojeik" className="about-photo" />
            <div className="photo-frame"></div>
          </div>
        </div>
      </section>

{/* --- TIMELINE SECTION --- */}
      <section className="timeline-section">
        <div className="timeline-header">
           <h2 className="section-title-brut side-title">PARCOURS</h2>
           <h2 className="section-title-brut side-title">EXPÉRIENCE</h2>
        </div>
        
        <div className="dual-timeline-container">
          <div className="central-line"></div>

          {/* LIGNE 1 : FORMATION */}
          <div className="timeline-row">
            <div className="timeline-col left">
              <div className="timeline-content academic hover-effect">
                <span className="mobile-label">Formation</span>
                <span className="timeline-date">2025 — 2027</span>
                <h4>BUT MMI</h4>
                <h5>Université Sorbonne Paris Nord</h5>
                <p>Spécialisation en stratégie de communication numérique.</p>
              </div>
              <div className="timeline-dot-center">✦</div>
            </div>
            <div className="timeline-col right empty"></div>
          </div>

          {/* LIGNE 2 : EXPÉRIENCE */}
          <div className="timeline-row">
            <div className="timeline-col left empty"></div>
            <div className="timeline-col right">
              <div className="timeline-dot-center">✦</div>
              <div className="timeline-content professional hover-effect">
                <span className="mobile-label">Expérience</span>
                <span className="timeline-date">Stage (1 mois)</span>
                <h4>TERRE DE SIENNE</h4>
                <h5>Planning Stratégique — Paris</h5>
                <ul className="cv-list">
                  <li>Veille et analyse stratégique des enjeux RSE</li>
                  <li>Réalisation de synthèses et benchmarks concurrentiels</li>
                  <li>Participation active à la vie de l'agence</li>
                </ul>
              </div>
            </div>
          </div>

          {/* LIGNE 3 : FORMATION */}
          <div className="timeline-row">
            <div className="timeline-col left">
              <div className="timeline-content academic hover-effect">
                <span className="mobile-label">Formation</span>
                <span className="timeline-date">2024 — 2025</span>
                <h4>BUT MMI (Année 1)</h4>
                <h5>Université Gustave Eiffel</h5>
                <p>Acquisition des bases plurimédia : design, dev et marketing.</p>
              </div>
              <div className="timeline-dot-center">✦</div>
            </div>
            <div className="timeline-col right empty"></div>
          </div>

          {/* LIGNE 4 : EXPÉRIENCE */}
          <div className="timeline-row">
            <div className="timeline-col left empty"></div>
            <div className="timeline-col right">
              <div className="timeline-dot-center">✦</div>
              <div className="timeline-content professional hover-effect">
                <span className="mobile-label">Expérience</span>
                <span className="timeline-date">CDI (8 mois)</span>
                <h4>STRADIVARIUS</h4>
                <h5>Vendeur — Serris</h5>
                <ul className="cv-list">
                  <li>Gestion de la relation client et fidélisation</li>
                  <li>Suivi rigoureux des stocks et de la réserve</li>
                  <li>Optimisation de la surface de vente</li>
                </ul>
              </div>
            </div>
          </div>

          {/* LIGNE 5 : FORMATION */}
          <div className="timeline-row">
            <div className="timeline-col left">
              <div className="timeline-content academic hover-effect">
                <span className="mobile-label">Formation</span>
                <span className="timeline-date">2023</span>
                <h4>BACCALAURÉAT GÉNÉRAL</h4>
                <h5>Lycée Albert Schweitzer</h5>
                <p>Section européenne anglais. Spécialités SVT / HGGSP.</p>
              </div>
              <div className="timeline-dot-center">✦</div>
            </div>
            <div className="timeline-col right empty"></div>
          </div>

          {/* LIGNE 6 : EXPÉRIENCE */}
          <div className="timeline-row">
            <div className="timeline-col left empty"></div>
            <div className="timeline-col right">
              <div className="timeline-dot-center">✦</div>
              <div className="timeline-content professional hover-effect">
                <span className="mobile-label">Expérience</span>
                <span className="timeline-date">Stage d'observation</span>
                <h4>ORANGE</h4>
                <h5>Marketing — Arcueil</h5>
                <ul className="cv-list">
                  <li>Méthodes de brainstorming en équipe</li>
                  <li>Analyse du cycle produit marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
         <h2 className="section-title-brut">SKILLS & TOOLS</h2>
         <div className="skills-grid-new">
            <div className="skill-box"><span>STRATÉGIE ÉDITORIALE</span></div>
            <div className="skill-box"><span>CHARTE GRAPHIQUE</span></div>
            <div className="skill-box"><span>DESIGN UX/UI</span></div>
            <div className="skill-box"><span>SEO ON-PAGE</span></div>
            <div className="skill-box"><span>REACT.JS</span></div>
            <div className="skill-box"><span>FIGMA</span></div>
            <div className="skill-box"><span>ADOBE (Ps, Ai, Id)</span></div>
            <div className="skill-box"><span>HTML5 / CSS3</span></div>
            <div className="skill-box"><span>DAVINCI RESOLVE</span></div>
            <div className="skill-box"><span>WORDPRESS</span></div>
            <div className="skill-box"><span>GITHUB</span></div>
         </div>
      </section>

      <footer className="footer-full-width">
        <div className="footer-left">
          <h2 className="huge-name">LILIAN</h2>
          <h2 className="huge-name">WOJEIK</h2>
        </div>
        <div className="footer-middle">
          <div className="footer-column">
            <h4>MENTIONS LÉGALES</h4>
            <p>Lilian Wojeik Portfolio</p>
            <p>© 2026</p>
            <button className="btn-mentions" onClick={() => setIsModalOpen(true)}>Détails</button>
          </div>
          <div className="footer-column">
            <h4>ME CONTACTER</h4>
            <a href="mailto:wojeiklilian@gmail.com" className="footer-link">Mail</a> 
            <a href="https://www.linkedin.com/in/lilianwojeik" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a> 
            <a href="/cv.pdf" download className="footer-link">CV</a>
          </div>
          <div className="footer-column">
            <h4>LOCATIONS</h4>
            <p>France, Paris</p>
          </div>
        </div>
        <div className="footer-right" onClick={scrollToTop}>
            <button type="button" className="btn-haut">HAUT</button>
        </div>
      </footer>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>×</button>
            <h2>MENTIONS LÉGALES</h2>
            <div className="modal-scroll-area">
              <p>Éditeur : Lilian Wojeik. Hébergement : Netlify. Propriété exclusive.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;