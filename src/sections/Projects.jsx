import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2>Major Projects</h2>
                <div className="project-card slide-left">
                    <div className="project-header">
                        <h3>NEOM TROJENA – Ski Village</h3>
                        <span className="project-location">Saudi Arabia</span>
                    </div>
                    <div className="project-role">
                        <strong>Role:</strong> Structural Engineer
                    </div>
                    <div className="project-details">
                        <p>
                            A landmark infrastructure project within the NEOM mega-development.
                            The Ski Village contributes to the futuristic vision of Trojena,
                            featuring complex steel structural elements in a challenging mountainous environment.
                        </p>
                        <div className="project-highlights">
                            <h4>Key Contributions & Scope:</h4>
                            <ul>
                                <li>Structural design and analysis of complex steel structures.</li>
                                <li>Utilization of advanced engineering software for structural integrity verification.</li>
                                <li>Coordination with multidisciplinary teams to ensure design constructability and code compliance.</li>
                            </ul>
                        </div>
                        <div className="project-meta">
                            <span className="meta-label">Focus:</span> Steel Structures, Complex Assemblies
                        </div>
                    </div>
                </div>

                {/* Archery Academy - NEW */}
                <div className="project-card slide-right">
                    <div className="project-header">
                        <h3>Steel Intensive Archery Academy</h3>
                        <span className="project-location">Academic / Competition</span>
                    </div>
                    <div className="project-role">
                        <strong>Role:</strong> Lead Designer
                    </div>
                    <div className="project-details">
                        <p>
                            Design and analysis of a steel building complex including a hostel, serving as the
                            finalist entry for the <strong>22nd INSDAG National Civil Competition</strong>.
                            The project showcased innovative structural steel applications.
                        </p>
                        <div className="project-highlights">
                            <h4>Key Contributions:</h4>
                            <ul>
                                <li>Integrated analysis using <strong>STAAD.Pro</strong> and drafting with <strong>AutoCAD</strong>.</li>
                                <li>Performed manual calculations for structural elements to validate software results.</li>
                                <li>Designed steel connections and optimized structural members for efficiency.</li>
                            </ul>
                        </div>
                        <div className="project-meta">
                            <span className="meta-label">Awards:</span> INSDAG Finalist Only
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
