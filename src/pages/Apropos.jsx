import React from 'react';
import Banner from '../components/Banner/Banner';
import Dropdown from '../components/Dropdown/Dropdown';
import montagnes from '../assets/montagnes.png';
import './apropos.css';

function Apropos() {
  const dropdownData = [
    {
      title: 'Fiabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
      title: 'Respect',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      title: 'Service',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
      title: 'Sécurité',
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (
    <div className="apropos">
      <main className="apropos-content">
        <div className="apropos-banner">
          <Banner image={montagnes} alt="Montagnes" />
        </div>
        <div className="apropos-container">
          {dropdownData.map((item, index) => (
            <Dropdown key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Apropos;