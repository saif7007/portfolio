import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

export default function ProjectGallery({ images, altPrefix }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no images, return a placeholder
  if (!images || images.length === 0) {
    return <div className="project-visual-placeholder"></div>;
  }

  const openLightbox = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  }, []);

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  // Swipe handling for framer motion
  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      nextImage();
    } else if (swipe > swipeConfidenceThreshold) {
      prevImage();
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <>
      {/* Thumbnail */}
      <div className="project-gallery-thumbnail" onClick={openLightbox}>
        {images.length > 1 ? (
          <div className="thumbnail-stack">
            {images.slice(0, 3).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${altPrefix} preview layer ${idx}`}
                className={`project-image stack-layer layer-${idx}`}
              />
            ))}
          </div>
        ) : (
          <img 
            src={images[0]} 
            alt={`${altPrefix} preview`} 
            className="project-image" 
          />
        )}
        <div className="gallery-overlay">
          <Maximize2 size={32} className="expand-icon" />
          {images.length > 1 && (
            <span className="image-count">1 of {images.length}</span>
          )}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal (Portaled to body to escape transform clipping) */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close gallery">
              <X size={28} />
            </button>

            {images.length > 1 && (
              <>
                <button className="lightbox-nav nav-left" onClick={prevImage} aria-label="Previous image">
                  <ChevronLeft size={36} />
                </button>
                <button className="lightbox-nav nav-right" onClick={nextImage} aria-label="Next image">
                  <ChevronRight size={36} />
                </button>
                
                <div className="lightbox-counter">
                  {currentIndex + 1} / {images.length}
                </div>
              </>
            )}

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${altPrefix} full screenshot ${currentIndex + 1}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  drag={images.length > 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={handleDragEnd}
                  className="lightbox-image"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
