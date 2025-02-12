import React, { useState } from 'react';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="carousel-container">
            {images.length > 1 && (
                <>
                    <div className="carousel-arrow left" onClick={goToPrevious}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className="carousel-arrow right" onClick={goToNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className="carousel-counter">
                        {currentIndex + 1}/{images.length}
                    </div>
                </>
            )}
            <div 
                className="carousel-slide"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />
        </div>
    );
};

export default Carousel;
