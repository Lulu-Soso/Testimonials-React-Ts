import React, { useState, useEffect } from "react";
import data from "../../testimonials1";

const Testimonial = () => {
  // currentIndex pour suivre le témoignage actuellement affiché
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect pour changer le témoignage après un délai
  useEffect(() => {
    // Définition d'un timer pour faire défiler automatiquement les témoignages
    const timer = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length),
      3000
    );

    // Nettoyage du timer pour éviter des effets secondaires
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="testimonial-container">
      <div className="testimonials">
        {/* Mapping des données de témoignage pour afficher chaque témoignage */}
        {data.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-item ${
              currentIndex === index ? "visible" : "hidden"
            }`}
          >
            {/* Image et texte du témoignage */}
            <img
              src={testimonial.thumbnail}
              alt={`Thumbnail for ${testimonial.author}`}
              className="testimonial-thumbnail"
            />
            <div className="testimonial-text">
              <span className="testimonial-quote">"</span>
              <p className="testimonial-para">{testimonial.testimonial}</p>
              <span className="testimonial-quote">"</span>
            </div>
            <p className="testimonial-author">{testimonial.author}</p>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        {/* Boutons pour naviguer manuellement entre les témoignages */}
        {/* Ici, "_" représente chaque élément de "data", */}
        {/* mais nous ne l'utilisons pas. Seul "index" est utilisé. */}
        {data.map((_, dotIndex) => (
          <button
            key={dotIndex}
            className={`testimonial-dot ${
              currentIndex === dotIndex ? "testimonial-dot-active" : ""
            }`}
            onClick={() => setCurrentIndex(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
