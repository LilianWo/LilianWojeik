import React, { useState, useEffect } from 'react';
import "../styles/ProjectList.css";

// Importation des images
import img01 from "../assets/images/LogoSewNoir.png";
import img02 from "../assets/images/70violet.png";
import img03 from "../assets/images/PhotoDeMoi.png";
import img04 from "../assets/images/HallOf23.png";
import img05 from "../assets/images/AfficheNike.png";
import img06 from "../assets/images/ChiefKeefCoverOrange.png";
import img07 from "../assets/images/GiannisAffiche.png";
import img08 from "../assets/images/OpeNest.png";
import img09 from "../assets/images/Maquettes.png";

// Images spécifiques SEW
import Artboard1 from "../assets/images/Artboard1.png";
import Artboard8 from "../assets/images/Artboard8.png";
import Artboard2 from "../assets/images/Artboard2.png";

const projects = [
  { 
    id: '01', title: 'SEW', color: '#B4C6D1', bgImage: img01,
    font: "'Poppins', sans-serif", weight: '900', style: 'italic', size: '6rem',
    tags: ['Scolaire', 'Collectif'], spec: 'Stratégie & Design Graphique',
    tools: ['ILLUSTRATOR', 'WORDPRESS', 'MARKETING', 'BENCHMARK'],
    slides: [
      { title: "SEW", text: "Projet de groupe visant à créer une machine à coudre futuriste. Une réponse écologique pour permettre à chacun de devenir son propre designer en recyclant des tissus destinés à l'abandon.", image: Artboard1 },
      { title: "LOGOTYPE", text: "Conception d'un logo moderne et minimaliste. Le monogramme intègre les trois lettres 'SEW' (coudre) dans une forme rappelant une épingle. Moderne et réversible.", image: Artboard8 },
      { title: "INSTAGRAM", text: "Réalisation d'un carousel Instagram pour sensibiliser au mouvement écologique. Un design simple liant machine et bienfaits environnementaux.", image: Artboard2 }
    ]
  },
  { 
    id: '02', title: 'Magazine', color: '#E1BEE7', bgImage: img02,
    font: "'Magazine', serif", weight: 'normal', style: 'normal', size: '6rem',
    tags: ['Scolaire', 'Individuel'], spec: 'Design Graphique',
    slides: [{ title: "Magazine", text: "Travail éditorial approfondi sur la mise en page, la typographie et la grille modulaire.", image: img02 }]
  },
  { 
    id: '03', title: 'The Last Drop', color: '#FFCCBC', bgImage: img03,
    font: "'Libre Baskerville', serif", weight: '400', style: 'italic', size: '5.5rem',
    tags: ['Collectif', 'Scolaire'], spec: 'Stratégie de Communication',
    slides: [{ title: "The Last Drop", text: "Campagne de sensibilisation aux enjeux de l'eau.", image: img03 }]
  },
  { 
    id: '04', title: 'Hall Of 23', color: '#F8BBD0', bgImage: img04,
    font: "'Archivo Black', sans-serif", weight: 'normal', style: 'normal', size: '5.5rem',
    tags: ['Personnel', 'Individuel'], spec: 'SEO / Développement',
    slides: [{ title: "Hall Of 23", text: "Site fan Michael Jordan optimisé pour le SEO.", image: img04 }]
  },
  { 
    id: '05', title: 'Nike', color: '#D7CCC8', bgImage: img05,
    font: "'Syne', sans-serif", weight: '800', style: 'italic', size: '6rem',
    tags: ['Personnel', 'Individuel'], spec: 'Design Graphique',
    slides: [{ title: "Nike", text: "Affiches explorant la dynamique du mouvement.", image: img05 }]
  },
  { 
    id: '06', title: 'Cover Album', color: '#CFD8DC', bgImage: img06,
    font: "'Another Danger', sans-serif", weight: 'normal', style: 'normal', size: '6.5rem',
    tags: ['Scolaire', 'Individuel'], spec: 'Design Graphique',
    slides: [{ title: "Cover Album", text: "Conception visuelle pour un projet musical.", image: img06 }]
  },
  { 
    id: '07', title: 'Posters', color: '#DCEDC8', bgImage: img07,
    font: "'Syne', sans-serif", weight: '800', style: 'normal', size: '5.5rem',
    tags: ['Personnel', 'Individuel'], spec: 'Design Graphique',
    slides: [{ title: "Posters", text: "Portraits vectoriels minimalistes.", image: img07 }]
  },
  { 
    id: '08', title: 'OpeNest', color: '#F5F5F5', bgImage: img08,
    font: "'Griffiths', serif", weight: 'normal', style: 'normal', size: '6rem',
    tags: ['Scolaire', 'Collectif'], spec: 'Stratégie de Communication',
    slides: [{ title: "OpeNest", text: "Application mobile pour la colocation.", image: img08 }]
  },
  { 
    id: '09', title: 'Maquettes', color: '#B2EBF2', bgImage: img09,
    font: "'Space Mono', monospace", weight: '700', style: 'normal', size: '4.5rem',
    tags: ['Scolaire', 'Collectif'], spec: 'SEO / Design UX/UI',
    slides: [{ title: "Maquettes", text: "Recherches UI et prototypage.", image: img09 }]
  }
];

const ProjectList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [selectedProject]);

  const handleClose = (e) => {
    if (e) e.preventDefault();
    setSelectedProject(null);
    setCurrentSlide(0);
  };

  return (
    <section className="projects-container">
      {projects.map((project, index) => (
        <div key={project.id} className="project-row" style={{ backgroundColor: project.color }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => { setSelectedProject(project); setCurrentSlide(0); }}
        >
          <div className="project-bg-overlay" style={{ backgroundImage: `url(${project.bgImage})` }}></div>
          <div className={`project-content ${hoveredIndex === index ? 'is-hovered' : ''}`}>
            <h2 className="project-title" style={{ fontFamily: project.font, fontWeight: project.weight, fontStyle: project.style, fontSize: project.size }}>
              {project.title}
            </h2>
            <div className="project-details">
              <div className="project-tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <p className="project-spec">{project.spec}</p>
            </div>
          </div>
          <span className="project-number">{project.id}</span>
        </div>
      ))}

      {selectedProject && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content project-modal-giant" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={handleClose}>×</button>
            <span className="slide-number-top">PROJET {selectedProject.id} / STEP 0{currentSlide + 1}</span>

            <div className="modal-inner-layout">
              <div className="modal-text-content">
                <h3 className="modal-big-title">{selectedProject.slides[currentSlide].title}</h3>
                <p className="modal-description-text">{selectedProject.slides[currentSlide].text}</p>
                {currentSlide === 0 && selectedProject.tools && (
                  <div className="modal-tools-grid">
                    {selectedProject.tools.map(tool => <span key={tool} className="modal-tag-black">{tool}</span>)}
                  </div>
                )}
              </div>
              <div className="modal-visual-content">
                <img src={selectedProject.slides[currentSlide].image || selectedProject.bgImage} alt="Visual" className="modal-hero-img" />
              </div>
            </div>

            <div className="modal-navigation-bottom">
              {currentSlide > 0 && (
                <button className="nav-btn-brut red" onClick={() => setCurrentSlide(currentSlide - 1)}>PREVIOUS</button>
              )}
              {currentSlide < selectedProject.slides.length - 1 && (
                <button className="nav-btn-brut red" onClick={() => setCurrentSlide(currentSlide + 1)}>NEXT STEP</button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectList;