import { useEffect } from 'react';

/**
 * Custom hook to trigger scroll animations using Intersection Observer
 * Adds 'animate-visible', 'zoom-visible', or 'slide-visible' classes when elements enter viewport
 */
const useScrollAnimation = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px' // Trigger slightly before element is fully visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add appropriate visible class based on element's animation class
                    if (entry.target.classList.contains('animate-on-scroll')) {
                        entry.target.classList.add('animate-visible');
                    }
                    if (entry.target.classList.contains('section-zoom')) {
                        entry.target.classList.add('zoom-visible');
                    }
                    if (entry.target.classList.contains('slide-left')) {
                        entry.target.classList.add('slide-visible');
                    }
                    if (entry.target.classList.contains('slide-right')) {
                        entry.target.classList.add('slide-visible');
                    }

                    // Optionally unobserve after animation triggers (one-time animation)
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll(
            '.animate-on-scroll, .section-zoom, .slide-left, .slide-right'
        );

        animatedElements.forEach(el => observer.observe(el));

        // Cleanup
        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);
};

export default useScrollAnimation;
