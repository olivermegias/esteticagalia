import { useState } from 'react';
import './gallery.css';

interface Props {
  imagenes: string[];
  title: string;
}

export default function Gallery({ imagenes, title }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!imagenes || imagenes.length === 0) {
    return (
      <>
      <div className="gallery-placeholder">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
        <p>Sin imágenes disponibles</p>
      </div>
      </>
    );
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className="gallery-container">
        {/* Imagen principal */}
        <div className="gallery-main">
          <button 
            className="gallery-main-wrapper"
            onClick={openLightbox}
            aria-label="Ampliar imagen"
          >
            <img
              src={imagenes[currentIndex]}
              alt={`${title} - Vista ${currentIndex + 1}`}
              className="gallery-main-image"
            />
            <div className="image-overlay">
              <span className="image-counter">
                {currentIndex + 1} / {imagenes.length}
              </span>
              <span className="zoom-hint">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                Ampliar
              </span>
            </div>
          </button>

          {/* Controles de navegación */}
          {imagenes.length > 1 && (
            <>
              <button
                className="gallery-nav gallery-nav-prev"
                onClick={handlePrevious}
                aria-label="Imagen anterior"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                className="gallery-nav gallery-nav-next"
                onClick={handleNext}
                aria-label="Siguiente imagen"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Miniaturas */}
        {imagenes.length > 1 && (
          <div className="gallery-thumbnails">
            {imagenes.map((img, index) => (
              <button
                key={index}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
                aria-label={`Ver imagen ${index + 1}`}
              >
                <img src={img} alt={`${title} - Miniatura ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={imagenes[currentIndex]}
              alt={`${title} - Vista ampliada ${currentIndex + 1}`}
              className="lightbox-image"
            />

            {imagenes.length > 1 && (
              <>
                <button
                  className="lightbox-nav lightbox-nav-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  aria-label="Imagen anterior"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  className="lightbox-nav lightbox-nav-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Siguiente imagen"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </>
            )}

            <div className="lightbox-counter">
              {currentIndex + 1} / {imagenes.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
