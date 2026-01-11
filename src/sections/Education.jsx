import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="section education">
            <div className="container">
                <h2>Education & Certifications</h2>

                <div className="education-grid">
                    {/* Degree 1 */}
                    <div className="education-card animate-on-scroll">
                        <h3>M.E. Structural Engineering</h3>
                        <span className="institution">Easwari Engineering College, Chennai</span>
                        <span className="year">2021 – 2023</span>
                        <span className="grade">CGPA: 8.56 / 10</span>
                    </div>

                    {/* Degree 2 */}
                    <div className="education-card">
                        <h3>B.E. Civil Engineering</h3>
                        <span className="institution">Sairam Engineering College, Chennai</span>
                        <span className="year">2017 – 2021</span>
                        <span className="grade">CGPA: 7.68 / 10</span>
                    </div>
                </div>

                <div className="certifications-container">
                    <h3>Key Achievements</h3>
                    <ul className="cert-list">
                        <li>
                            <strong>Finalist, 22nd INSDAG National Civil Competition:</strong> Recognized for "Best innovative structural steel design for PG Structural".
                        </li>
                        <li>
                            English Type Writing: Junior Grade 2nd Class Certified.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
