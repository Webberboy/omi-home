"use client";

import { useState } from "react";

export default function HeroVideo() {
    const [hasError, setHasError] = useState(false);

    return (
        <div className="hero-video">
            {hasError ? (
                <div className="video-fallback">
                    <p>Video could not be loaded.</p>
                </div>
            ) : (
                <video muted autoPlay loop playsInline onError={() => setHasError(true)}>
                    <source src="/assets/images/video/BlackHole.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            <div className="orther-overlay"></div>
        </div>
    );
}
