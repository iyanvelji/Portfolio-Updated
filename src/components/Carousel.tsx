import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Added Link component
import "../scss/Carousel.scss";

export interface CarouselItem {
  title: string;
  image: string;
  path: string;
}

export interface CarouselProps {
  items: CarouselItem[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  // AUTOPLAY ENGINE 👇
  useEffect(() => {
    // Change slide every 5000ms (5 seconds)
    const autoplayTimer = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clean up the timer when the component unmounts or when the index changes
    return () => clearInterval(autoplayTimer);
  }, [currentIndex, items.length]);

  if (!items || items.length === 0) {
    return <div className="carousel-empty">No items to display</div>;
  }

  return (
    <div className="carousel-fullscreen-wrapper">
      <div className="carousel">
        {/* Left Control Handle */}
        <button
          onClick={prevSlide}
          className="carousel-control prev"
          aria-label="Previous slide"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Dynamic Display Track */}
        <div className="carousel-track">
          {items.map((item, index) => (
            /* Changed from <div> to <Link> */
            <Link
              key={index}
              to={item.path}
              className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(14, 8, 20, 0.95) 10%, rgba(14, 8, 20, 0.2) 60%, rgba(14, 8, 20, 0.4) 100%), url(${item.image})`,
              }}
            >
              <div className="slide-content-frame">
                <h2>{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Control Handle */}
        <button
          onClick={nextSlide}
          className="carousel-control next"
          aria-label="Next slide"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Pagination Status Indicators */}
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
