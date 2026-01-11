import React from 'react';
import './Expertise.css';

const Expertise = () => {
    return (
        <section id="expertise" className="section expertise">
            <div className="container">
                <h2>Expertise & Tools</h2>
                <div className="expertise-grid">
                    <div className="expertise-card animate-on-scroll">
                        <h3>Engineering Tools</h3>
                        <ul className="expertise-list">
                            <li>IDEA Statica</li>
                            <li>ETABS</li>
                            <li>STAAD.Pro</li>
                            <li>AutoCAD</li>
                            <li>Excel (Advanced)</li>
                        </ul>
                    </div>
                    <div className="expertise-card">
                        <h3>Design Codes</h3>
                        <ul className="expertise-list">
                            <li>AISC (American Institute of Steel Construction)</li>
                            <li>Eurocode</li>
                            <li>IS (Indian Standards)</li>
                            <li>BS (British Standards)</li>
                        </ul>
                    </div>
                    <div className="expertise-card">
                        <h3>Core Competencies</h3>
                        <ul className="expertise-list">
                            <li>Steel Structure Design</li>
                            <li>Structural Analysis</li>
                            <li>Connection Design</li>
                            <li>Load Extraction & Validation</li>
                            <li>Design Report Preparation</li>
                        </ul>
                    </div>
                    <div className="expertise-card">
                        <h3>Soft Skills</h3>
                        <ul className="expertise-list">
                            <li>Team Collaboration</li>
                            <li>Technical Leadership</li>
                            <li>Time Management</li>
                            <li>Coordination</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
