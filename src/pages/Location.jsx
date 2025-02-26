import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import '../styles/Location.css';
import Carousel from '../components/Carousel/Carousel';
import Tag from '../components/Tag/Tag';
import Dropdown from '../components/Dropdown/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Location() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/properties/${id}`);
        if (!response.ok) {
          setError(true);
          return;
        }
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        setError(true);
      }
    };

    fetchProperty();
  }, [id]);

  const renderRating = (rating) => {
    return Array(5).fill(null).map((_, index) => (
      <FontAwesomeIcon 
        key={index}
        icon={faStar}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      />
    ));
  };

  if (error) {
    return <Navigate to="/404" />;
  }

  if (!property) return null;

  return (
    <main className="location-container">
      <Carousel images={property.pictures} />
      
      <div className="location-header">
        <div className="location-info">
          <h1>{property.title}</h1>
          <p className="location-city">{property.location}</p>
          <div className="tags-container">
            {property.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>
        
        <div className="host-rating">
          <div className="host-info">
            <p className="host-name">{property.host.name}</p>
            <img 
              src={property.host.picture} 
              alt={`Host ${property.host.name}`} 
              className="host-picture"
            />
          </div>
          <div className="rating">
            {renderRating(parseInt(property.rating))}
          </div>
        </div>
      </div>

      <div className="dropdowns-container">
        <Dropdown 
          title="Description" 
          content={property.description}
        />
        <Dropdown 
          title="Équipements"
          content={property.equipments}
        />
      </div>
    </main>
  );
}

export default Location;