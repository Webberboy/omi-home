"use client";

import { useState } from "react";

export default function HeroVideo() {
    const [hasError, setHasError] = useState(false);

    return (
        <div className="hero-video">
            {hasError ? (
                <div className="video-fallback">
                    <div className="fallback-gradient"></div>
                    <p>Video could not be loaded.</p>
                </div>
            ) : (
                <video 
                    muted 
                    autoPlay 
                    loop 
                    playsInline 
                    controls
                    preload="metadata"
                    onError={() => setHasError(true)}
                    onLoadStart={() => console.log('Video loading started')}
                    onLoadedData={() => console.log('Video data loaded')}
                >
                    <source src="/assets/images/video/BlackHole.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            <div className="orther-overlay"></div>
        </div>
    );
}
