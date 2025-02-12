import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LocationCard.css';

function LocationCard({ id, title, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/location/${id}`);
  };

  return (
    <div 
      className="location-card" 
      onClick={handleClick}
    >
      <img src={image} alt={title} className="location-card-image" />
      <h3 className="location-card-title">{title}</h3>
    </div>
  );
}

export default LocationCard;