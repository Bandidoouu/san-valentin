import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showText, setShowText] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Inicia la expansión a los 2 segundos
    const expandTimer = setTimeout(() => {
      setIsExpanded(true);
    }, 2000);

    // Muestra el texto un poco después de que inicie la expansión
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3200);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(textTimer);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="main-container">
      {/* Elemento de audio con tu música preferida (Sade o Daft Punk) */}
      <audio ref={audioRef} src="/musica.mp3" loop />
      
      <button className="music-btn" onClick={togglePlay}>
        🎵 Activar Música
      </button>

      <div className={`heart ${isExpanded ? 'expand' : ''}`}>
        {showText && (
          <div className="text-container fade-in">
            <h1>¿Serías mi San Valentín?</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;