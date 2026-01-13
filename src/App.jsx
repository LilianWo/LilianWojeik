import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* --- STYLES --- */
import "./styles/Hero.css";
import "./styles/FlowingMenu.css";

/* --- ASSETS & COMPOSANTS --- */
import LilianPP from "./assets/images/LilianPP.png";
import FlowingMenu from './components/FlowingMenu';
import ProjectList from './components/ProjectList'; 
import Contact from './components/Contact';
import About from './components/About'; // Pense à créer ce fichier dans /components

// On définit la page d'accueil
const Home = () => {
  return (
    <>
      {/* SECTION 1 : HERO */}
      <section className="hero">
        <div 
          className="hero-background" 
          style={{ backgroundImage: `url(${LilianPP})` }}
        ></div>

        <div className="hero-header">
          <h2 className="hero-name">LILIAN WOJEIK</h2>
          <p className="hero-sub">
            ÉTUDIANT MMI <br />
            <span className="red-text">CRÉATION,</span> <br />
            COMMUNICATION, <br />
            <span className="red-text">DÉVELOPPEMENT.</span>
          </p>
        </div>

        <div className="hero-content">
          <h1 className="portfolio-title">PORTFOLIO</h1>
          <div className="hero-date">
            <span>AUG.</span>
            <span>23</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 : NAVIGATION */}
      <section className="nav-section">
        <FlowingMenu />
      </section>

      {/* SECTION 3 : PROJETS */}
      <section id="work"> 
        <h2 className="section-title">SELECTED WORKS</h2>
        <ProjectList />
      </section>

      {/* SECTION 4 : CONTACT */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route pour la page principale */}
          <Route path="/" element={<Home />} />

          {/* Route pour la page About Me */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;