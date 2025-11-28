"use client";

export default function HeroVideo() {
    return (
        <div className="hero-video">
            <video muted autoPlay loop playsInline>
                <source src="/assets/images/video/BlackHole.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="orther-overlay"></div>
        </div>
    );
}
