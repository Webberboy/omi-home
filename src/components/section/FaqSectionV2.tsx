"use client";
import { faqItems2 } from "@/data/faq";
import Image from "next/image";
import { useState } from "react";

export default function FaqSectionV2() {
    const [activeIndex, setActiveIndex] = useState<number | null>(1);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <section className="section-faq flat-spacing-3">
                <div className="container">
                    <h2 className="s-title only-title ol-tt-2 font-3 text-linear text-center px-16">
                        Qore and <br />
                        frequently asked questions
                    </h2>
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 mx-auto">
                            <div className="faq-accordion-list px-16 px-xl-0" id="frequently-ask">
                                {faqItems2.map((item, index) => (
                                    <div key={index} className={`faq-accordion_item ${activeIndex === index ? "active" : ""}`}>
                                        <div className="img-item-1">
                                            <Image loading="lazy" width={600} height={152} src="/assets/images/item/item-bg-2.png" alt="Image" />
                                        </div>
                                        <div
                                            className={`accordion-title ${activeIndex === index ? "" : "collapsed"}`}
                                            role="button"
                                            onClick={() => toggle(index)}
                                        >
                                            <span className="text fw-medium h5 font-3">{item.title}</span>
                                            <span className="icon ic-accordion-custom"></span>
                                        </div>
                                        <div className={`collapse-ani ${activeIndex === index ? "show" : ""}`}>
                                            <div className="accordion-body">
                                                <p className="text-main-2">{item.label}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
