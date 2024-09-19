import React, { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const slides = [
    {
      title: "Hello, I'm Mohamed Ben",
      description:
        "A Full-Stack Developer specializing in Front-End Development.",
      buttonText: "View My Work",
      image: "/images/hero-image1.jpg", // Path from the public folder
    },
    {
      title: "Creative Solutions for Web Development",
      description:
        "I build modern and responsive websites using the latest technologies.",
      buttonText: "Explore Projects",
      image: "/images/hero-image2.jpg", // Path from the public folder
    },
    {
      title: "Transforming Ideas into Reality",
      description:
        "Bringing your vision to life with cutting-edge development solutions.",
      buttonText: "Get in Touch",
      image: "/images/hero-image3.jpg", // Path from the public folder
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Auto-slide every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="hero">
      <div
        className="hero-slide"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="hero-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
          <button className="cta-btn">{slides[currentSlide].buttonText}</button>
        </div>
      </div>
      <div className="hero-navigation">
        <button className="prev-btn" onClick={handlePrevSlide}>
          &#10094;
        </button>
        <button className="next-btn" onClick={handleNextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Hero;
