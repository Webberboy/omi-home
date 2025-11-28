"use client";
import { useState } from "react";
import { SectHeader } from "@components/section/SectHeader";
import { SectTagline } from "@components/section/SectTagline";
import { SectBottom } from "@components/section/SectBottom";
import Image from "next/image";

export default function CtaSection() {
    return (
        <>
            <section className="section-cta" id="section-cta">
                <SectHeader value={4} label="CTA" />
                <span className="br-line"></span>
                <SectTagline name="JOIN THE WAITLIST." />
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
                            Unlock Your Creative <br />
                            Potential Today
                        </h2>
                        <p className="s-sub_title">
                            Get early access to HeyOmi and start creating professional-quality content <br className="d-none d-lg-block" />
                            with the power of AI.
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
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        
        // Simulate form submission delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate successful submission
        setIsSubmitted(true);
        setIsLoading(false);
    }

    if (isSubmitted) {
        return (
            <div className="form-success">
                <div className="success-message">
                    <h3>Thanks for joining the waitlist!</h3>
                    <p>We&apos;ll inform you when we launch.</p>
                    <div className="success-icon">✓</div>
                </div>
            </div>
        );
    }

    return (
        <form className="form-get" action={handleSubmit}>
            <div className="form-content">
                <fieldset>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        required 
                        style={{fontSize: '16px'}} 
                        disabled={isLoading}
                    />
                </fieldset>
                <button className="tf-btn style-2 style-high animate-btn" type="submit" disabled={isLoading}>
                    <span>{isLoading ? 'Submitting...' : 'Submit'}</span>
                </button>
            </div>
        </form>
    );
}
