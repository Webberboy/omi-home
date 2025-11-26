"use client";
import { useEffect, useRef, useState } from "react";

interface OdometerComponentProps {
    value: number;
}

export default function OdometerComponent({ value }: OdometerComponentProps) {
    const odometerRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (hasAnimated) return;

        const observer = new IntersectionObserver(
            async (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && odometerRef.current) {
                    setHasAnimated(true);
                    const { default: Odometer } = await import("odometer");
                    const od = new Odometer({
                        el: odometerRef.current,
                        value: 0,
                        format: "(,ddd)",
                        theme: "default",
                    });
                    od.update(value);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (odometerRef.current) {
            observer.observe(odometerRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated, value]);

    return <div ref={odometerRef} className="odometer" />;
}
