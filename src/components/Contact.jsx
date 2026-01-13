import React, { useState } from 'react';
import "../styles/Contact.css"; 
import PhotoDeMoi from '../assets/images/PhotoDeMoi.png'; 

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour le Pop-up

  const scrollToTop = (e) => {
    if (e) e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwvpgloq", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("MERCI ! MESSAGE ENVOYÉ ✦");
        form.reset();
      } else {
        setStatus("OUPS... RÉESSAYE PLUS TARD.");
      }
    } catch (error) {
      setStatus("ERREUR DE CONNEXION.");
    }
  };

  return (
    <>
      {/* SECTION FORMULAIRE CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <h2 className="contact-title">
            GET IN TOUCH <span className="red-text">WITH ME !</span>
          </h2>

          <div className="contact-container">
            <div className="contact-image-wrapper">
              <img src={PhotoDeMoi} alt="Lilian Wojeik" className="contact-photo" />
              <div className="sticker-contact">Contact</div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-fields">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first-name">FIRST NAME</label>
                    <input type="text" id="first-name" name="firstname" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">LAST NAME</label>
                    <input type="text" id="last-name" name="lastname" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">EMAIL</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea id="message" name="message" rows="1" required></textarea>
                </div>
              </div>
              <div className="form-footer">
                <div className="submit-container">
                  <button type="submit" className="btn-send">Send</button>
                  {status && <p className="status-message">{status}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
            {/* BOUTON QUI OUVRE LE POP-UP */}
            <button 
              className="btn-mentions" 
              onClick={() => setIsModalOpen(true)}
            >
              Voir les détails
            </button>
          </div>

          <div className="footer-column">
            <h4>ME CONTACTER</h4>
            <a href="mailto:wojeiklilian@gmail.com" className="footer-link">Mail</a> 
            <a href="https://www.linkedin.com/in/lilianwojeik" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a> 
            <a href="/cv.pdf" download="CV_Lilian_Wojeik.pdf" className="footer-link">CV</a>
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

      {/* --- LE POP-UP (MODAL) --- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>×</button>
            
            <h2>MENTIONS LÉGALES</h2>
            
            <div className="modal-scroll-area">
              <h3>ÉDITEUR DU SITE</h3>
              <p>Lilian Wojeik<br/>Étudiant en BUT MMI - Université Sorbonne Paris Nord<br/>Contact : wojeiklilian@gmail.com</p>

              <h3>HÉBERGEMENT</h3>
              <p>Ce site est hébergé par Netlify.</p>

              <h3>PROPRIÉTÉ INTELLECTUELLE</h3>
              <p>L’ensemble des contenus (textes, images, vidéos, créations graphiques) présents sur ce site est la propriété exclusive de Lilian Wojeik. Toute reproduction est interdite sans accord préalable.</p>

              <h3>DONNÉES PERSONNELLES</h3>
              <p>Les informations recueillies via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes professionnelles.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;