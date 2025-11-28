"use client";

import { useState, useEffect } from "react";

export default function HeroVideo() {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // iOS Safari specific: Ensure video starts playing after user interaction
        const startVideo = () => {
            const video = document.querySelector('.hero-video video') as HTMLVideoElement;
            if (video && !isPlaying && !hasError) {
                // iOS optimizations
                video.setAttribute('webkit-playsinline', 'webkit-playsinline');
                video.setAttribute('playsinline', 'playsinline');
                
                video.play().then(() => {
                    setIsPlaying(true);
                    setIsLoading(false);
                }).catch((error) => {
                    console.log('Video autoplay failed:', error);
                    // iOS might block autoplay, show fallback
                    setHasError(true);
                    setIsLoading(false);
                });
            }
        };

        // Try to start video on component mount with delay for iOS
        const timeoutId = setTimeout(startVideo, 500);

        // Also try on first user interaction (touch/click) - crucial for iOS
        document.addEventListener('touchstart', startVideo, { once: true });
        document.addEventListener('click', startVideo, { once: true });
        
        // Try on scroll as well - sometimes helps with iOS
        const handleScroll = () => {
            startVideo();
            window.removeEventListener('scroll', handleScroll);
        };
        window.addEventListener('scroll', handleScroll, { once: true });

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('touchstart', startVideo);
            document.removeEventListener('click', startVideo);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isPlaying, hasError]);

    const handleVideoLoad = () => {
        setIsLoading(false);
        setIsPlaying(true);
    };

    const handleVideoError = () => {
        setHasError(true);
        setIsLoading(false);
        setIsPlaying(false);
    };

    return (
        <div className="hero-video">
            {isLoading && (
                <div className="video-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading video...</p>
                </div>
            )}
            
            {hasError ? (
                <div className="video-fallback">
                    <div className="fallback-content">
                        <div className="fallback-icon">🎬</div>
                        <h3>Video Unavailable</h3>
                        <p>Enjoy our stunning visual experience in the background</p>
                    </div>
                </div>
            ) : (
                <video 
                    muted 
                    autoPlay 
                    loop 
                    playsInline 
                    preload="auto"
                    onLoadedData={handleVideoLoad}
                    onError={handleVideoError}
                    className={isLoading ? 'video-hidden' : ''}
                >
                    <source src="/assets/images/video/BlackHole.mp4" type="video/mp4" />
                    {/* WebM fallback for better browser compatibility - create BlackHole.webm for optimal performance */}
                    {/* <source src="/assets/images/video/BlackHole.webm" type="video/webm" /> */}
                    Your browser does not support the video tag.
                </video>
            )}

            <div className="orther-overlay"></div>
        </div>
    );
}
