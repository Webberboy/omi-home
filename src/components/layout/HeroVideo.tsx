"use client";

import { useState, useEffect } from "react";

interface VideoSource {
    src: string;
    type: string;
}

export default function HeroVideo() {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [videoSources] = useState<VideoSource[]>([
        // Cloudinary-hosted video with optimization parameters for better compatibility
        { src: "https://res.cloudinary.com/duyeogdq7/video/upload/q_auto,f_mp4/BlackHole_owe3kx.mp4", type: "video/mp4" },
        
        // Local fallback (in case external hosting fails)
        { src: "/assets/images/video/BlackHole.mp4", type: "video/mp4" },
    ]);

    // Debug logging to help troubleshoot
    useEffect(() => {
        console.log('Video sources:', videoSources);
        console.log('Attempting to load video from:', videoSources[0].src);
    }, [videoSources]);

    useEffect(() => {
        // Set loading timeout to show fallback if video takes too long
        const loadingTimeout = setTimeout(() => {
            if (isLoading) {
                setHasError(true);
                setIsLoading(false);
            }
        }, 10000); // 10 second timeout

        return () => clearTimeout(loadingTimeout);
    }, [isLoading]);

    const handleVideoLoad = () => {
        setIsLoading(false);
    };

    const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        console.error('Video loading error:', e);
        console.error('Failed video source:', (e.target as HTMLVideoElement).currentSrc);
        setHasError(true);
        setIsLoading(false);
    };

    if (hasError) {
        return (
            <div className="hero-video">
                <div className="video-fallback">
                    <div className="fallback-content">
                        <div className="fallback-icon">🎬</div>
                        <h3>Video Loading...</h3>
                        <p>Enjoying the experience? The background video will enhance your journey.</p>
                    </div>
                </div>
                <div className="orther-overlay"></div>
            </div>
        );
    }

    return (
        <div className="hero-video">
            {isLoading && (
                <div className="video-loading">
                    <div className="loading-spinner"></div>
                </div>
            )}
            
            <video 
                muted 
                autoPlay 
                loop 
                playsInline 
                preload="auto"
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                style={{ opacity: isLoading ? 0 : 1 }}
            >
                {videoSources.map((source, index) => (
                    <source key={index} src={source.src} type={source.type} />
                ))}
                Your browser does not support the video tag.
            </video>

            <div className="orther-overlay"></div>
        </div>
    );
}
