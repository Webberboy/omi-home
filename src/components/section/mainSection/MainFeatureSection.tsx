"use client";
import { FeatureTabItems } from "@/data/feature";
import Image from "next/image";
import { useState } from "react";

export default function MainFeatureSection() {
    const [activeTab, setActiveTab] = useState("imageCreator");
    const [demoIndex, setDemoIndex] = useState(0);

    const activeFeature = FeatureTabItems.find((f) => f.id === activeTab);
    const demos = activeFeature?.demos || [];

    const goToPrevDemo = () => {
        setDemoIndex((prev) => (prev === 0 ? demos.length - 1 : prev - 1));
    };

    const goToNextDemo = () => {
        setDemoIndex((prev) => (prev === demos.length - 1 ? 0 : prev + 1));
    };

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        setDemoIndex(0);
    };

    const currentDemo = demos[demoIndex];

    return (
        <>
            <div className="sect-main flat-animate-tab">
                <div className="s-img_item wow bounceInScale">
                    <Image src="/assets/images/section/smoke-blue.webp" alt="Item" width={1296} height={606} />
                </div>
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h2 className="s-title font-3">What You Can Do with HeyOmi</h2>
                        <p className="s-sub_title">
                            From visuals to code, HeyOmi gives you a full creative suite powered by <br className="d-none d-lg-block" />
                            the latest multi-model AI — all in one place.
                        </p>
                    </div>

                    {/* Demo Display */}
                    {currentDemo && (
                        <div className="demo-display" style={{ marginTop: "2rem", textAlign: "center" }}>
                            {activeFeature?.demoType === "image" && (
                                <img
                                    src={currentDemo.url}
                                    alt="Demo"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        borderRadius: "12px",
                                        marginBottom: "1rem",
                                    }}
                                />
                            )}

                            {activeFeature?.demoType === "video" && (
                                <video
                                    controls
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        borderRadius: "12px",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <source src={currentDemo.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}

                            {activeFeature?.demoType === "audio" && (
                                <audio
                                    controls
                                    style={{
                                        width: "100%",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <source src={currentDemo.url} type="audio/mpeg" />
                                    Your browser does not support the audio tag.
                                </audio>
                            )}

                            {/* Carousel Controls */}
                            {demos.length > 0 && (
                                <div style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
                                    <button
                                        onClick={goToPrevDemo}
                                        className="tf-btn style-transparent"
                                        style={{ padding: "0.5rem 1rem" }}
                                    >
                                        ← Prev
                                    </button>
                                    <span style={{ color: "#999" }}>
                                        {demoIndex + 1} / {demos.length}
                                    </span>
                                    <button
                                        onClick={goToNextDemo}
                                        className="tf-btn style-transparent"
                                        style={{ padding: "0.5rem 1rem" }}
                                    >
                                        Next →
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <span className="br-line"></span>
                <div className="container">
                    <div className="position-relative">
                        <ul className="tab-can_do position-relative mx-1" role="tablist">
                            {FeatureTabItems.map((item) => (
                                <li key={item.id} className={`nav-tab-item ${activeTab === item.id ? "active" : ""}`} role="presentation">
                                    <button
                                        onClick={() => handleTabChange(item.id)}
                                        className={`btn_tab tf-btn style-transparent text-body-3 animate-btn ${
                                            activeTab === item.id ? "active" : ""
                                        }`}
                                        role="tab"
                                    >
                                        {item.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                        <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                    </div>
                </div>
            </div>
        </>
    );
}
