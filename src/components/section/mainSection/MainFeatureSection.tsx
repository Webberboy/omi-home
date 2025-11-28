"use client";
import { FeatureTabItems } from "@/data/feature";
import Image from "next/image";

export default function MainFeatureSection() {
    // Create multiple rows of features for the animation
    const featuresRow1 = FeatureTabItems;
    const featuresRow2 = [...FeatureTabItems].reverse();
    const featuresRow3 = FeatureTabItems;

    const FeatureBox = ({ title }: { title: string }) => (
        <div
            style={{
                padding: "1rem 1.5rem",
                background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                minWidth: "180px",
                textAlign: "center",
                fontSize: "0.95rem",
                fontWeight: "500",
                whiteSpace: "nowrap",
                flex: "0 0 auto",
            }}
        >
            {title}
        </div>
    );

    const FeatureRow = ({ features, direction = "left" }: { features: typeof FeatureTabItems; direction?: "left" | "right" }) => (
        <div
            style={{
                display: "flex",
                gap: "1rem",
                overflow: "hidden",
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
        >
            <style>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .feature-scroll-left {
                    animation: scroll-left 30s linear infinite;
                }
                .feature-scroll-right {
                    animation: scroll-right 30s linear infinite;
                }
            `}</style>
            <div
                className={direction === "left" ? "feature-scroll-left" : "feature-scroll-right"}
                style={{
                    display: "flex",
                    gap: "1rem",
                }}
            >
                {/* Duplicate features for seamless loop */}
                {[...features, ...features].map((feature, idx) => (
                    <FeatureBox key={`${feature.id}-${idx}`} title={feature.title} />
                ))}
            </div>
        </div>
    );

    return (
        <>
            <div className="sect-main">
                <div className="s-img_item wow bounceInScale">
                    <Image src="/assets/images/section/smoke-blue.webp" alt="Item" width={1296} height={606} />
                </div>
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h2 className="s-title font-3">What You Can Do with HeyOmi</h2>
                        <p className="s-sub_title">
                            Create stunning videos, images, and music from simple text prompts. <br className="d-none d-lg-block" />
                            Your all-in-one creative studio powered by AI.
                        </p>
                    </div>

                    {/* Animated Feature Boxes */}
                    <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <FeatureRow features={featuresRow1} direction="left" />
                        <FeatureRow features={featuresRow2} direction="right" />
                        <FeatureRow features={featuresRow3} direction="left" />
                    </div>
                </div>
            </div>
        </>
    );
}
