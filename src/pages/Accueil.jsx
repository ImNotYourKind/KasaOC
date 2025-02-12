import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import falaises from '../assets/falaises.png';
import LocationCard from '../components/LocationCard/LocationCard';
import Banner from '../components/Banner/Banner';
import './Accueil.css';

function Accueil() {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error('Erreur lors de la récupération des propriétés:', error));
  }, []);

  return (
    <div className="accueil">
      <main className="main-content">
        <Banner 
          image={falaises}
          text="Chez vous, partout et ailleurs"
          alt="Falaises"
        />                       

        <div className="grid-container">
          {locations.map((location) => (
            <LocationCard 
              key={location.id}
              id={location.id}
              title={location.title}
              image={location.cover}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Accueil;