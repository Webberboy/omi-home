"use client";
import { stepItems } from "@data/step";
import Image from "next/image";
export default function MainHowSection() {
    return (
        <>
            <div className="sect-main">
                <div className="s-img_item wow bounceInScale">
                    <Image src="/assets/images/section/gradient-ring-bg.webp" alt="Background" width={860} height={400} />
                </div>
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h2 className="s-title font-3 m-0">
                            From idea to output — <br />
                            in just three simple steps.
                        </h2>
                    </div>
                    
                    {/* Horizontal Steps Layout */}
                    <div className="row mt-5" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                        {stepItems.map((item) => (
                            <div key={item.id} className="step-card wow fadeInUp" style={{ padding: "2rem", textAlign: "center" }}>
                                <p className="number-item text-caption font-2" style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>{item.number}</p>
                                <h5 className="name" style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>
                                    {item.title}
                                </h5>
                                <p className="desc" style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#999" }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="position-relative has-hafl_plus" style={{ marginTop: "4rem" }}>
                        <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                        <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                    </div>
                </div>
            </div>
        </>
    );
}
