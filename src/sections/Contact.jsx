import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact section-zoom">
            <div className="container contact-container">
                <h2>Contact</h2>
                <p className="contact-intro">
                    I am available for opportunities in Structural Engineering.
                    Please feel free to reach out to discuss potential collaborations or projects.
                </p>
                <div className="contact-actions">
                    <a href="mailto:baskernagu@gmail.com" className="btn btn-primary">
                        Email: baskernagu@gmail.com
                    </a>
                    <a href="tel:+917904389264" className="btn btn-outline">
                        Phone: +91 7904389264
                    </a>
                    <a href="https://linkedin.com/in/n-basker" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        LinkedIn Profile
                    </a>
                    <div className="contact-pdf">
                        <a href="/basker_resume.pdf" target="_blank" rel="noopener noreferrer" className="link-resume">
                            Download Resume (PDF)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
