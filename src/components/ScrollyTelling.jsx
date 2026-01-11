import React, { useEffect, useRef, useState } from 'react';
import './ScrollyTelling.css';

const frameCount = 240;
const getFramePath = (index) => `${import.meta.env.BASE_URL}frames-1/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

const ScrollyTelling = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [frameIndex, setFrameIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];
        const onValuesLoaded = () => {
            loadedCount++;
            if (loadedCount === frameCount) {
                setImages(imgArray);
                setIsLoading(false);
            }
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = onValuesLoaded;
            imgArray.push(img);
        }
    }, []);

    // Scroll Handling
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how far we've scrolled into the container
            // Start animation when container top hits 0
            // End animation when container bottom hits window bottom (or slightly before)

            let scrollProgress = -top / (height - windowHeight);
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));

            setProgress(scrollProgress);

            const targetFrame = Math.floor(scrollProgress * (frameCount - 1));
            setFrameIndex(targetFrame);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Canvas Rendering & Resize Handling
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Force re-render of current frame
                renderFrame(frameIndex);
            }
        };

        const renderFrame = (index) => {
            if (!canvasRef.current || images.length === 0) return;
            const context = canvasRef.current.getContext('2d');
            const img = images[index];

            if (img) {
                // Ensure canvas dimensions match window
                if (canvasRef.current.width !== window.innerWidth) {
                    canvasRef.current.width = window.innerWidth;
                    canvasRef.current.height = window.innerHeight;
                }

                // Cover logic for canvas (same as before)
                const hRatio = canvasRef.current.width / img.width;
                const vRatio = canvasRef.current.height / img.height;
                const ratio = Math.max(hRatio, vRatio);

                const centerShift_x = (canvasRef.current.width - img.width * ratio) / 2;
                const centerShift_y = (canvasRef.current.height - img.height * ratio) / 2;

                context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                context.drawImage(
                    img,
                    0, 0, img.width, img.height,
                    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
                );
            }
        };

        // Initial render
        renderFrame(frameIndex);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [frameIndex, images]);



    // Text Opacity Logic - Widened ranges for better reading time
    const getOpacity = (start, end) => {
        // Fade in (10%), Hold (80%), Fade out (10%) of the range
        const range = end - start;
        const fadeInEnd = start + range * 0.15;
        const fadeOutStart = end - range * 0.15;

        if (progress < start || progress > end) return 0;
        if (progress < fadeInEnd) return (progress - start) / (fadeInEnd - start);
        if (progress > fadeOutStart) return (end - progress) / (end - fadeOutStart);
        return 1;
    };


    if (isLoading) {
        return (
            <div className="scrolly-loading">
                <div className="loader"></div>
                <span>Loading Structural Model...</span>
            </div>
        );
    }

    return (
        <section ref={containerRef} className="scrolly-container">
            <div className="sticky-wrapper">
                <canvas ref={canvasRef} className="scrolly-canvas" />

                <div className="scrolly-overlay">
                    <div className="scrolly-text center" style={{ opacity: getOpacity(0, 0.15) }}>
                        <h1>Structural Engineer</h1>
                        <p className="scrolly-sub">Precision. Integrity. Innovation.</p>
                    </div>

                    <div className="scrolly-text left" style={{ opacity: getOpacity(0.2, 0.4) }}>
                        <h2>Steel Structures &<br />Connection Design</h2>
                        <p className="scrolly-sub">Advanced Analysis & Detailing</p>
                    </div>

                    <div className="scrolly-text right" style={{ opacity: getOpacity(0.5, 0.7) }}>
                        <h2>Precision.<br />Load Path.<br />Constructibility.</h2>
                        <p className="scrolly-sub">Optimized for Complex Geometries</p>
                    </div>

                    <div className="scrolly-text center" style={{ opacity: getOpacity(0.85, 1.0) }}>
                        <h2>Engineering You Can Trust</h2>
                        <p className="scrolly-sub">Ready for the Next Challenge</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollyTelling;
