import React, { useState, useEffect } from "react";
import data from "../../testimonials"; // Assurez-vous que le chemin est correct

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length),
      3000
    );

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="testimonial-container">
      <div className="testimonials">
        {data.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-item ${
              currentIndex === index ? "visible" : "hidden"
            }`}
          >
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
