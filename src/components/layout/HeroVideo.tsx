"use client";

import { useState } from "react";

export default function HeroVideo() {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    // iPhone-specific: Try to load video with multiple approaches
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Force load the video
        video.load();

        // iPhone-specific: Try to play after user interaction
        const tryPlay = async () => {
            try {
                await video.play();
                setIsLoading(false);
                console.log('Video played successfully');
            } catch (error) {
                console.log('Video play failed:', error);
                setIsLoading(false);
            }
        };

        // Try to play immediately, fallback to user interaction
        tryPlay();

        // Add touch event listener for iPhone
        const handleTouch = () => {
            tryPlay();
            document.removeEventListener('touchstart', handleTouch);
        };
        document.addEventListener('touchstart', handleTouch);

        return () => {
            document.removeEventListener('touchstart', handleTouch);
        };
    }, []);

    return (
        <div className="hero-video">
            {hasError ? (
                <div className="video-fallback">
                    <div className="fallback-gradient"></div>
                    <p>Video could not be loaded.</p>
                </div>
            ) : (
                <div className="video-container">
                    {isLoading && (
                        <div className="video-loading">
                            <div className="loading-spinner"></div>
                            <p>Loading video...</p>
                        </div>
                    )}
                    <video 
                        ref={videoRef}
                        muted 
                        autoPlay 
                        loop 
                        playsInline 
                        controls
                        preload="auto" // Changed from metadata to auto for iPhone
                        onError={() => {
                            console.log('Video error occurred');
                            setHasError(true);
                            setIsLoading(false);
                        }}
                        onLoadStart={() => {
                            console.log('Video loading started');
                            setIsLoading(true);
                        }}
                        onLoadedData={() => {
                            console.log('Video data loaded');
                            setIsLoading(false);
                        }}
                        onLoadedMetadata={() => console.log('Video metadata loaded')}
                        onCanPlay={() => console.log('Video can play')}
                        onPlaying={() => console.log('Video is playing')}
                    >
                        <source src="/assets/images/video/BlackHole.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            <div className="orther-overlay"></div>
        </div>
    );
}
