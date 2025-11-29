'use client';
import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
    const [displayText, setDisplayText] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const fullText = 'HEYOMI';

    useEffect(() => {
        let currentIndex = 0;
        
        const typeInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typeInterval);
                // Wait 4 seconds after typing completes, then fade out (total 8 seconds)
                setTimeout(() => {
                    setIsVisible(false);
                }, 4000);
            }
        }, 150); // Typing speed - 150ms per character

        return () => {
            clearInterval(typeInterval);
        };
    }, []);

    // Remove from DOM after fade out animation
    const handleAnimationEnd = () => {
        if (!isVisible) {
            const loadingElement = document.getElementById('loading-screen');
            if (loadingElement) {
                loadingElement.style.display = 'none';
                // Remove the loading screen completely after fade out
                loadingElement.remove();
                // Add a class to body to indicate loading is complete
                document.body.classList.add('loading-complete');
            }
        }
    };

    return (
        <div 
            id="loading-screen"
            className={`${styles.loadingScreen} ${!isVisible ? styles.fadeOut : ''}`}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={styles.loadingContent}>
                <div className={styles.typewriterContainer}>
                    <span className={styles.typewriterText}>{displayText}</span>
                    <span className={styles.cursor}>|</span>
                </div>
            </div>
        </div>
    );
}