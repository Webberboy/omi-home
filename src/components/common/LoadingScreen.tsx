'use client';
import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
    const [displayText, setDisplayText] = useState('');
    const [showLoading, setShowLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const fullText = 'HEYOMI';

    // Use useEffect to handle client-side only operations
    useEffect(() => {
        // Check if we should skip the loading screen
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            setShowLoading(false);
            setIsVisible(false);
            document.body.classList.add('loading-complete');
            return;
        }

        let currentIndex = 0;
        const typeInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typeInterval);
                // Wait 2 seconds after typing completes, then fade out (total 6 seconds)
                setTimeout(() => {
                    setIsVisible(false);
                }, 2000);
            }
        }, 150); // Typing speed - 150ms per character

        return () => {
            clearInterval(typeInterval);
        };
    }, []);

    const handleAnimationEnd = () => {
        if (!isVisible) {
            setShowLoading(false);
            document.body.classList.add('loading-complete');
            // Completely remove the loading screen element from DOM
            const loadingElement = document.getElementById('loading-screen');
            if (loadingElement) {
                loadingElement.remove();
            }
        }
    };

    if (!showLoading) {
        return null;
    }

    return (
        <div 
            id="loading-screen"
            className={`${styles.loadingScreen} ${!isVisible ? styles.fadeOut : ''}`}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={styles.loadingContent}>
                <div className={styles.typewriterContainer}>
                    <h1 className={styles.typewriterText}>{displayText}<span className={styles.cursor}>|</span></h1>
                </div>
            </div>
        </div>
    );
}