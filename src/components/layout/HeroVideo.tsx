"use client";
import { useState, useRef } from "react";

export default function HeroVideo() {
    const [hasError, setHasError] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (!videoRef.current) {
            return;
        }
        
        try {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        } catch (error) {
            console.error('Video playback error:', error);
        }
    };

    return (
        <div className="hero-video-wrapper">
            <div className="hero-video">
                {hasError ? (
                    <div className="video-fallback">
                        <div className="fallback-gradient"></div>
                        <p>Video could not be loaded.</p>
                    </div>
                ) : (
                    <video 
                        ref={videoRef}
                        muted 
                        autoPlay 
                        loop 
                        playsInline 
                        preload="metadata"
                        onError={() => {
                            setHasError(true);
                            console.log('Video failed to load');
                        }}
                        onLoadStart={() => {
                            console.log('Video loading started');
                        }}
                        onLoadedData={() => {
                            console.log('Video data loaded');
                        }}
                        onPlay={() => {
                            setIsPlaying(true);
                            console.log('Video started playing');
                        }}
                        onPause={() => {
                            setIsPlaying(false);
                            console.log('Video paused');
                        }}
                        onLoadedMetadata={() => {
                            const video = videoRef.current;
                            if (video) {
                                console.log('Video metadata loaded - duration:', Math.round(video.duration), 's');
                            }
                        }}
                    >
                        <source src="/assets/images/video/viddnew.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}

                <div className="orther-overlay"></div>
            </div>
            
            {/* Custom play button that's always accessible - moved outside hero-video */}
            {!hasError && (
                <button 
                    className="video-play-button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                    <span className={`play-icon ${isPlaying ? 'playing' : 'paused'}`}>
                        {isPlaying ? '❚❚' : '▶'}
                    </span>
                </button>
            )}
        </div>
    );
}
