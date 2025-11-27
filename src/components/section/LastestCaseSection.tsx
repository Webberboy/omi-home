"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { caseStudyItems2 } from "@/data/caseStudies";
import Link from "next/link";
import Image from "next/image";

export default function LastestCaseSection() {
    return (
        <>
            <section className="flat-spacing-3">
                <div className="container">
                    <div className="content-1200">
                        <h2 className="box-head_section font-3 title-section text-linear text-center">Latest case studies</h2>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={12}
                            pagination={{
                                el: ".tf-sw-pagination",
                                clickable: true,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                            }}
                            modules={[Pagination]}
                        >
                            {caseStudyItems2.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="card-case hover-img">
                                        <Link href={`/use-case-detail/${idx + 1}`} className="case_image img-style">
                                            <Image width={328} height={184} src={`/assets/images/blog/${item.image}`} alt="Image" />
                                        </Link>
                                        <div className="case_info">
                                            <h5 className="name text-line-clamp-3">
                                                <Link href={`/use-case-detail/${idx + 1}`} className="text-main-2 link font-3">
                                                    {item.name}
                                                </Link>
                                            </h5>
                                            <p className="desc text-line-clamp-3">{item.desc}</p>
                                        </div>
                                        <div className="br-line has-dot"></div>
                                        <div className="case_meta">
                                            <div className="meta-item">
                                                <i className="icon icon-Clock"></i>
                                                <span className="text-body-3">{item.date}</span>
                                            </div>
                                            <div className="meta-item">
                                                <i className="icon icon-Tag"></i>
                                                <span className="text-body-3">{item.tag}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="sw-dot-default tf-sw-pagination"></div>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}
