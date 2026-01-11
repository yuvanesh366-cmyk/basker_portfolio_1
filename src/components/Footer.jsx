import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="copyright">&copy; {new Date().getFullYear()} Basker. Structural Engineer.</p>
                <p className="disclaimer">Portfolio based on professional experience.</p>
            </div>
        </footer>
    );
};

export default Footer;
