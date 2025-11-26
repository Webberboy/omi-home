"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText"; // ⚠️ cần plugin Club GSAP

gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {
    children: string;
    className?: string;
    startColor?: string;
    endColor?: string;
};

export default function TextColorChange({ children, className = "", startColor = "#F4F7F5", endColor = "#5997FF" }: Props) {
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const wordSplit = new SplitText(textRef.current, {
            type: "words",
            wordsClass: "word-wrapper",
        });

        const charSplit = new SplitText(wordSplit.words, {
            type: "chars",
            charsClass: "char-wrapper",
        });

        gsap.set(charSplit.chars, { color: startColor, opacity: 1 });

        gsap.to(charSplit.chars, {
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 90%",
                end: "bottom 35%",
                scrub: true,
            },
            color: endColor,
            stagger: { each: 0.05, from: "start" },
            duration: 0.5,
            ease: "power2.out",
        });

        return () => {
            wordSplit.revert();
            charSplit.revert();
        };
    }, [startColor, endColor]);

    return (
        <div ref={textRef} className={`text-color-change ${className}`}>
            {children}
        </div>
    );
}
