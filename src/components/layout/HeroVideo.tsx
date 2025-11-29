"use client";
import { useState, useRef } from "react";

export default function HeroVideo() {
    const [hasError, setHasError] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [debugInfo, setDebugInfo] = useState("Debug ready - tap button to play");
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        // Debug logging
        const timestamp = new Date().toLocaleTimeString();
        let debugMsg = `Tapped at ${timestamp}\n`;
        
        if (!videoRef.current) {
            debugMsg += "ERROR: videoRef.current is null!";
            setDebugInfo(debugMsg);
            return;
        }
        
        debugMsg += `Video element found\n`;
        debugMsg += `Current state: ${isPlaying ? 'playing' : 'paused'}\n`;
        
        try {
            if (isPlaying) {
                videoRef.current.pause();
                debugMsg += "Called pause()\n";
            } else {
                videoRef.current.play();
                debugMsg += "Called play()\n";
            }
            setIsPlaying(!isPlaying);
            debugMsg += `New state: ${!isPlaying ? 'playing' : 'paused'}`;
        } catch (error) {
            debugMsg += `ERROR: ${error instanceof Error ? error.message : String(error)}`;
        }
        
        setDebugInfo(debugMsg);
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
                        loop 
                        playsInline 
                        preload="metadata"
                        style={{
                            pointerEvents: 'none',
                            userSelect: 'none',
                            WebkitUserSelect: 'none',
                            WebkitTouchCallout: 'none'
                        }}
                        onError={() => {
                            setHasError(true);
                            setDebugInfo(prev => prev + `\nERROR: Video failed to load!`);
                        }}
                        onLoadStart={() => {
                            console.log('Video loading started');
                            setDebugInfo(prev => prev + `\nVideo loading started`);
                        }}
                        onLoadedData={() => {
                            console.log('Video data loaded');
                            setDebugInfo(prev => prev + `\nVideo data loaded successfully`);
                        }}
                        onPlay={() => {
                            setIsPlaying(true);
                            setDebugInfo(prev => prev + `\nVideo started playing`);
                        }}
                        onPause={() => {
                            setIsPlaying(false);
                            setDebugInfo(prev => prev + `\nVideo paused`);
                        }}
                        onLoadedMetadata={() => {
                            const video = videoRef.current;
                            if (video) {
                                setDebugInfo(prev => prev + `\nVideo metadata loaded - duration: ${Math.round(video.duration)}s`);
                            }
                        }}
                    >
                        <source src="/assets/images/video/BlackHole.mp4" type="video/mp4" />
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

            {/* Debug box for mobile testing */}
            <div className="video-debug-box">
                <div className="debug-header">
                    <span>DEBUG INFO</span>
                    <button 
                        className="debug-clear"
                        onClick={() => setDebugInfo("Debug cleared - tap button again")}
                    >
                        Clear
                    </button>
                </div>
                <pre>{debugInfo}</pre>
            </div>
        </div>
    );
}
