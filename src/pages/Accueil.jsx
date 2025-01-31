import React from 'react';
import { useNavigate } from 'react-router-dom';
import falaises from '../assets/falaises.png';
import './accueil.css';

function Accueil() {
  const navigate = useNavigate();

  const locations = Array(6).fill({
    title: 'Titre de la location',
    image: '#FF6060'
  });

  const handleLocationClick = () => {
    navigate('/location');
  };

  return (
    <div className="accueil">
      <main className="main-content">
        <div className="banner">
          <img src={falaises} alt="Falaises" className="banner-image" />
          <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
        </div>

        <div className="grid-container">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="grid-item" 
              style={{backgroundColor: location.image}}
              onClick={handleLocationClick}
            >
              <h3 className="location-title">{location.title}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Accueil;