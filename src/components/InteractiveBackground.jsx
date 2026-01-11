import React, { useEffect, useRef, useState } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const bgRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (bgRef.current) {
                // Parallax
                const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
                const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
                bgRef.current.style.setProperty('--move-x', `${moveX}px`);
                bgRef.current.style.setProperty('--move-y', `${moveY}px`);

                // Spotlight position via CSS variables
                bgRef.current.parentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
                bgRef.current.parentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="interactive-bg-container">
            <div
                ref={bgRef}
                className="interactive-grid"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}structural-reveal.png)`
                }}
            ></div>
            <div className="interactive-spotlight"></div>
        </div>
    );
};

export default InteractiveBackground;
