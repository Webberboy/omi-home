import { boxIconTextProps } from "@/src/data/boxIconText";
import Image from "next/image";

export default function BenefitSectionV2() {
    return (
        <>
            <section className="section-benefit benefit-2 flat-spacing-3">
                <div className="sect-main">
                    <div className="container">
                        <div className="place-video pt-0">
                            <div className="visual-object">
                                <div className="object_img wow bounceInScale">
                                    <div className="image">
                                        <Image width={424} height={424} src="/assets/images/section/visual-object.webp" alt="Image" />
                                    </div>
                                    <span className="hafl-plus start-0 top-0 rotate-top_left wow bounceInScale"></span>
                                    <span className="hafl-plus end-0 top-0 rotate-top_right wow bounceInScale"></span>
                                </div>
                            </div>
                            <div className="sect-title wow fadeInUp">
                                <h2 className="s-title font-3">
                                    Built for modern teams. <br />
                                    Backed by cutting-edge AI.
                                </h2>
                                <p className="s-sub_title">
                                    Qore combines powerful AI models with a unified creative workspace <br className="d-none d-lg-block" />— built for
                                    speed, clarity, and control.
                                </p>
                            </div>
                        </div>
                        <div className="position-relative">
                            <div className="grid-box_icon tf-grid-layout sm-col-2 md-col-3 pb-0">
                                {boxIconTextProps.map((item, idx) => (
                                    <div className="box-icon-text wow fadeInUp" key={idx}>
                                        <div className="icon">
                                            <Image width={78} height={78} src={`/assets/images/section/${item.image_icon}`} alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <p className="title text-main-2">{item.title}</p>
                                            <p className="sub-title text-body-3">{item.sub_title}</p>
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
