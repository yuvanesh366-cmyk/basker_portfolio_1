import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2>Professional Experience</h2>
                <div className="timeline">
                    {/* Eversendai */}
                    <div className="timeline-item animate-on-scroll">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3>Design Engineer</h3>
                                <span className="company">Eversendai Construction Pvt Ltd, Chennai</span>
                                <span className="period">January 2024 – Present</span>
                            </div>
                            <ul className="timeline-details">
                                <li>Contributed to the <strong>Structural Connection Design of the SKI Village</strong> (NEOM TROJENA, Saudi Arabia), a complex steel structure 2500m above sea level.</li>
                                <li>Designed and verified steel connections using <strong>IDEA Statica (AISC)</strong>, including Fin plate, Cover plate, Flush end plate moment connections, Splice, and Base plate connections.</li>
                                <li>Designed Embed plate Connections (steel to concrete wall) using in-house Excel tools.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Audiseshaiah & Sons */}
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3>Structural Design Trainee</h3>
                                <span className="company">Audiseshaiah & Sons, Chennai</span>
                                <span className="period">August 2021 – February 2022</span>
                            </div>
                            <ul className="timeline-details">
                                <li>Trained in <strong>ETABS</strong> for analysis and design of Reinforced Concrete structures.</li>
                                <li>Developed structural models for residential and commercial projects.</li>
                                <li>Prepared structural drawings using AutoCAD and performed manual calculations for beams, slabs, and columns (IS 456 & IS 875).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
