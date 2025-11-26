import Image from "next/image";
import ScrollColorText from "../common/ScrollColorText";

export default function HeroAbout() {
    return (
        <>
            <section className="section-hero-about flat-spacing-2">
                <div className="img-item-1">
                    <Image loading="lazy" width={1296} height={606} src="/assets/images/item/color-bg-1.png" alt="Image" />
                </div>
                <div className="img-item-2">
                    <Image loading="lazy" width={1296} height={606} src="/assets/images/item/pixel-texture.png" alt="Image" />
                </div>
                <div className="container position-relative z-5">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="sect-title wow fadeInUp">
                                <h2 className="s-title font-3 text-linear">
                                    AI-powered image and content <br className="d-none d-md-block" />
                                    creation platform
                                </h2>
                                <p className="s-sub_title">
                                    From visuals to code, Qore gives you a full creative suite powered by <br className="d-none d-md-block" />
                                    the latest multi-model AI — all in one place.
                                </p>
                            </div>
                            <div className="image px-16 px-lg-0">
                                <Image loading="lazy" width={1078} height={606} src="/assets/images/section/hero-about.png" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <div className="px-16 px-lg-0">
                                <p className="text-caption caption font-2 text-main-2">ABOUT QORE</p>
                                <div className="rate-per">
                                    <Image loading="lazy" width={90} height={16} src="/assets/images/item/star-rate.png" alt="Image" />
                                    <p className="text-main-3">
                                        <span className="fw-bold text-main-5">(4.9/</span>.5.0)
                                    </p>
                                </div>
                                <h5 className="title-2 text-linear-2 font-3">Based on 10,000+ reviews on</h5>
                                <div className="brand-wrap mb-lg-0">
                                    <Image loading="lazy" width={41} height={16} src="/assets/images/brand/brand-5.png" alt="Brand" />
                                    <Image loading="lazy" width={81} height={16} src="/assets/images/brand/brand-2.png" alt="Brand" />
                                    <Image loading="lazy" width={70} height={16} src="/assets/images/brand/brand-3.png" alt="Brand" />
                                    <Image loading="lazy" width={74} height={16} src="/assets/images/brand/brand-6.png" alt="Brand" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <ScrollColorText className="h4 font-3 px-16 px-lg-0">
                                AI-powered image generation technology is rapidly evolving, allowing people to easily create unique works of art. The
                                use of AI-powered image and content generation offers many benefits, helping to increase productivity, foster
                                creativity, and democratize content creation for everyone
                            </ScrollColorText>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
