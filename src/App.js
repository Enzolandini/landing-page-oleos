import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Chama "handleResize" quando o componente for montado
    handleResize();

    // Adiciona event listener para verificar quando o parágrafo deve aparecer
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove o event listener ao desmontar o componente
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Verifica se o parágrafo inicial está visível na tela
    const paragraph = document.querySelector('.paragraph');
    if (paragraph) {
      const rect = paragraph.getBoundingClientRect();
      if (rect.bottom >= window.innerHeight * 0.5) {
        setShowParagraph(true);
      }
    }
  };

  return (
    <div className={`container ${isMobile ? 'mobile' : 'desktop'}`}>
      <h1 className="title">Óleos Essenciais da Bru</h1>
      <div className="content">
        {/* Conteúdo do restante do site */}
      </div>
      <div className="black-overlay"></div>
      <p className={`paragraph ${showParagraph ? 'show' : ''}`}>
        Os óleos essenciais são compostos naturais altamente concentrados extraídos de plantas,
        que capturam suas fragrâncias distintas e propriedades terapêuticas. Eles desempenham um papel 
        significativo na aromaterapia, um método holístico de tratamento que utiliza aromas para promover o bem-estar
      </p>

      <div className={`new-paragraphs ${showParagraph ? 'show' : ''}`}>
        <p>Parágrafo 2 - Nome 2</p>
        <p>Parágrafo 3 - Nome 3</p>
        <p>Parágrafo 4 - Nome 4</p>
        {/* Adicione mais parágrafos conforme necessário */}
      </div>

      <a
        href="https://wa.me/seu-numero-de-telefone"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <div className="whatsapp-button-container">
          <span className="whatsapp-icon">
            <FontAwesomeIcon icon={faWhatsapp} />
          </span>
        </div>
      </a>
    </div>
  );
}

export default App;
