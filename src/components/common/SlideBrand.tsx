"use client";
import dynamic from "next/dynamic";
import { brandItems } from "@data/brand";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const OdometerComponent = dynamic(() => import("@components/common/Odometer"), {
    ssr: false,
});

export default function SlideBrand() {
    return (
        <>
            <div className="tf-brand">
                <div className="container">
                    <div className="tf-brand_inner">
                        <h5 className="title text-caption font-2 letter-space-0 fw-normal wg-counter wow fadeInUp">
                            TRUSTED BY <OdometerComponent value={6000} />+ HIGHLY PRODUCTIVE COMPANY
                        </h5>
                        <div className=" infiniteslide_wrap">
                            <div className="infiniteSlide_brand z-1">
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={true}
                                    autoplay={{ delay: 0, disableOnInteraction: false }}
                                    speed={3000}
                                    slidesPerView={"auto"}
                                    spaceBetween={40}
                                    breakpoints={{
                                        1200: {
                                            spaceBetween: 80,
                                        },
                                    }}
                                    className="swiper-infinite-brand"
                                >
                                    {brandItems.map((item, idx) => (
                                        <SwiperSlide key={idx} style={{ width: "auto" }}>
                                            <div className="image-brand">
                                                <Image height={24} width={item.width} src={item.image} alt="Brand" />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                        <span className="hafl-plus pst-left_bot item_bot wow bounceInScale z-1"></span>
                        <span className="hafl-plus pst-right_bot item_bot wow bounceInScale z-1"></span>
                    </div>
                </div>
            </div>
        </>
    );
}
