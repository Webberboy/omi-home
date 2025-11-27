import { SectHeader } from "@components/section/SectHeader";
import { SectTagline } from "@components/section/SectTagline";
import { SectBottom } from "@components/section/SectBottom";
import { testimonialItems } from "@data/testimonial";
import CobeGlobe from "@components/common/CobeGlobe";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialSection() {
    return (
        <>
            <section className="section-testimonial">
                <SectHeader value={6} label={"TESTIMONIALS"} />
                <span className="br-line"></span>
                <SectTagline name={"REAL FEEDBACK FROM CREATORS AND POWER USERS."} />
                <span className="br-line"></span>
                <MainTestimonialSection />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}

export function MainTestimonialSection() {
    return (
        <>
            <div className="sect-main">
                <div className="s-img_item wow bounceInScale">
                    <div className="globe-cont">
                        <CobeGlobe />
                    </div>
                    <Image width={1078} height={620} className="img-2" src="/assets/images/section/color-bg.webp" alt="Image" />
                </div>
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h2 className="s-title font-3 m-0">
                            What people say <br />
                            about HeyOmi.
                        </h2>
                    </div>
                    <div className="testimonial-slide-wrap">
                        <div className="overflow-hidden has-overlay_linear type-2">
                            <div className="marquee-wrapper marque-testimonial">
                                <div className="initial-child-container">
                                    {[...testimonialItems, ...testimonialItems].map((item, index) => (
                                        <div className="marquee-child-item" key={index}>
                                            <div className="wg-testimonial">
                                                <div className="tes-author">
                                                    <div className="author_image">
                                                        <Image src={`/assets/images/avatar/${item.avatar}`} alt="Avatar" width={44} height={44} />
                                                    </div>
                                                    <div className="author_info">
                                                        <Link href="/" className="link name">
                                                            {item.name}
                                                        </Link>
                                                        <p className="text-body-3">{item.username}</p>
                                                    </div>
                                                </div>
                                                <p className="tes-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="marquee-wrapper type-right marque-testimonial">
                                <div className="initial-child-container">
                                    {[...testimonialItems, ...testimonialItems].map((item, index) => (
                                        <div className="marquee-child-item" key={index}>
                                            <div className="wg-testimonial">
                                                <div className="tes-author">
                                                    <div className="author_image">
                                                        <Image width={44} height={44} src={`/assets/images/avatar/${item.avatar}`} alt="Avatar" />
                                                    </div>
                                                    <div className="author_info">
                                                        <Link href="/" className="link name">
                                                            {item.name}
                                                        </Link>
                                                        <p className="text-body-3">{item.username}</p>
                                                    </div>
                                                </div>
                                                <p className="tes-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
