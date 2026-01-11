import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="section hero">
            <div className="container hero-container">
                <h1 className="hero-title">
                    Structural <span className="highlight">Engineer</span>
                </h1>
                <p className="hero-subtitle">
                    Specialized in Steel Structures and High-Complexity Engineering.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
