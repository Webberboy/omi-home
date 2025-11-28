"use client";
import { assitantsAiItems } from "@/data/assitantsAi";
import { useEffect, useState } from "react";

export function MainHeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % assitantsAiItems.length);
        }, 2500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="sect-main">
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h1 className="s-title font-3">
                            Create Anything. Effortlessly. <br />
                            <div className="text-change_wrap">
                                {assitantsAiItems.map((item, idx) => (
                                    <div key={idx} className={`text-change_rotating  ${idx === index ? "active" : ""}`}>
                                        Built on
                                        {item.logo ? (
                                            <img 
                                                src={item.logo} 
                                                alt={item.name}
                                                style={{ height: "0.9em", width: "auto", margin: "0 0.15em 0 0.1em", verticalAlign: "-0.1em", display: "inline-block" }}
                                            />
                                        ) : (
                                            <span className={`icon ${item.icon}`} style={{ margin: "0 0.15em" }}></span>
                                        )}
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </h1>
                        <p className="s-sub_title">
                            Generate videos, images, and music from text prompts. <br className="d-none d-sm-block" />
                            All your creative tools in one unified AI platform.
                        </p>
                    </div>
                </div>
                <span className="br-line"></span>
                <div className="container">
                    <div className="sect-content position-relative">
                        <BoxAskWrap />
                    </div>
                </div>
            </div>
        </>
    );
}

export function BoxAskWrap() {
    return (
        <>
            <div className="box-ask-wrap">
                <div className="box-ask">
                    <AskForm />
                </div>
                <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                <span className="hafl-plus pst-left_top item_top wow bounceInScale"></span>
                <span className="hafl-plus pst-right_top item_top wow bounceInScale"></span>
            </div>
        </>
    );
}

export const AskForm: React.FC = () => {
    return (
        <form className="form-ask wow fadeInUp">
            <div className="form-content">
                <input className="style-2" type="text" placeholder="Ask a follow up..." />

                <fieldset className="field-bottom">
                    <div className="field_left">
                        <button type="button" className="btn-ip type-circle ip-add">
                            <i className="icon icon-plus" />
                        </button>

                        <button type="button" className="btn-ip ip-modern text-body-3">
                            <i className="icon icon-arrow-circle" />
                            GPT-4.1
                            <i className="icon icon-arrow-caret-down fs-8" />
                        </button>
                    </div>

                    <div className="field_right">
                        <button type="button" className="btn-ip type-transparent ip-voice">
                            <i className="icon icon-micro" />
                        </button>

                        <button type="submit" className="btn-submit btn-ip type-circle">
                            <i className="icon icon-arrow-top" />
                        </button>
                    </div>
                </fieldset>
            </div>
        </form>
    );
};
