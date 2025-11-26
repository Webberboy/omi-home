"use client";
import { useState, Fragment } from "react";
import { stepItems } from "@data/step";
import classNames from "classnames";
import Image from "next/image";
export default function MainHowSection() {
    const [activeTab, setActiveTab] = useState("step1");

    return (
        <>
            <div className="sect-main flat-animate-tab">
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
                    <div className="row">
                        <div className="col-md-6 offset-xl-1 col-xl-4">
                            <div className="tab-content mb-md-0 sticky-top wow fadeInUp">
                                {stepItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className={classNames("tab-pane", {
                                            active: activeTab === item.id,
                                            show: activeTab === item.id,
                                        })}
                                        id={item.id}
                                        role="tabpanel"
                                    >
                                        <div className="image-how_to wow bounceInScale">
                                            <Image
                                                src={`/assets/images/section/${item.image}`}
                                                alt={item.title}
                                                loading="lazy"
                                                width={404}
                                                height={404}
                                            />
                                            <span className="hafl-plus start-0 top-0 rotate-top_left" />
                                            <span className="hafl-plus end-0 top-0 rotate-top_right" />
                                            <span className="hafl-plus start-0 bottom-0 item_bot rotate-bot_left" />
                                            <span className="hafl-plus end-0 bottom-0 item_bot rotate-bot_right" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6 offset-xl-2 col-xl-4">
                            <ul className="tab-how_to position-relative mx-1 wow fadeInUp" role="tablist">
                                {stepItems.map((item, index) => (
                                    <Fragment key={item.id}>
                                        <li className="nav-tab-item" role="presentation">
                                            <div
                                                className={classNames("btn_tab", { active: activeTab === item.id })}
                                                role="tab"
                                                onClick={() => setActiveTab(item.id)}
                                            >
                                                <p className="number-item text-caption font-2">{item.number}</p>
                                                <h5 className="name" data-text={item.title}>
                                                    {item.title}
                                                </h5>
                                                <p className="desc">{item.desc}</p>
                                            </div>
                                        </li>

                                        {index < stepItems.length - 1 && <div className="br-line has-dot" aria-hidden="true" />}
                                    </Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="position-relative has-hafl_plus">
                        <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                        <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                    </div>
                </div>
            </div>
        </>
    );
}
