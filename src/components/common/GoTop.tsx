"use client";

import { useEffect, useRef, useState } from "react";

const GoTopButton = () => {
    const [showButton, setShowButton] = useState(false);
    const [progressAngle, setProgressAngle] = useState(0);
    const borderProgressRef = useRef<HTMLDivElement>(null);
    const ticking = useRef(false);

    const updateScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        const angle = (scrollPercent / 100) * 360;
        setProgressAngle(angle);

        const footer = document.querySelector(".tf-footer") as HTMLElement | null;
        let shouldShow = scrollTop > 10;

        if (footer) {
            const footerOffsetTop = footer.offsetTop;
            const windowBottom = scrollTop + window.innerHeight;
            if (windowBottom >= footerOffsetTop) {
                shouldShow = false;
            }
        }

        setShowButton(shouldShow);
        ticking.current = false;
    };

    const handleScroll = () => {
        if (!ticking.current) {
            requestAnimationFrame(updateScroll);
            ticking.current = true;
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        updateScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (borderProgressRef.current) {
            borderProgressRef.current.style.setProperty("--progress-angle", `${progressAngle}deg`);
        }
    }, [progressAngle]);

    return (
        <div id="goTop" className={`go-top ${showButton ? "show" : ""}`} onClick={scrollToTop}>
            <span className="border-progress" ref={borderProgressRef}></span>
            <span className="icon icon-arrow-top"></span>
        </div>
    );
};

export default GoTopButton;
