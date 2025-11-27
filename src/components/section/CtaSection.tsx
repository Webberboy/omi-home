"use client";
import { SectHeader } from "@components/section/SectHeader";
import { SectTagline } from "@components/section/SectTagline";
import { SectBottom } from "@components/section/SectBottom";
import Image from "next/image";
import { submitForm } from "@/actions/submitForm";

export default function CtaSection() {
    return (
        <>
            <section className="section-cta">
                <SectHeader value={8} label="CTA" />
                <span className="br-line"></span>
                <SectTagline name="GET STARTED TODAY." />
                <span className="br-line"></span>
                <MainCtaSection />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}

export function MainCtaSection() {
    return (
        <>
            <div className="sect-main position-relative">
                <div className="s-img_item">
                    <Image width={1296} height={836} src="/assets/images/section/color-bg-2.webp" alt="BG" />
                </div>
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h2 className="s-title font-3">
                            Ready to Power Up <br />
                            Your Creativity?
                        </h2>
                        <p className="s-sub_title">
                            Join thousands of creators using HeyOmi to streamline <br className="d-none d-lg-block" />
                            their ideas and accelerate content creation.
                        </p>
                    </div>
                    <FormGet />
                    <div className="position-relative has-hafl_plus">
                        <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                        <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export function FormGet() {
    async function handleSubmit(formData: FormData) {
        const res = await submitForm(formData);
        alert(res.message);
    }
    return (
        <form className="form-get" action={handleSubmit}>
            <div className="form-content">
                <fieldset>
                    <input type="email" name="email" placeholder="Enter your email" required />
                </fieldset>
                <button className="tf-btn style-2 style-high animate-btn" type="submit">
                    <span>Submit</span>
                </button>
            </div>
        </form>
    );
}
