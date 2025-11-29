"use client";
import { useState } from "react";
import { SectHeader } from "@components/section/SectHeader";
import { SectTagline } from "@components/section/SectTagline";
import { SectBottom } from "@components/section/SectBottom";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

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
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        setError(null);
        
        const email = formData.get('email') as string;
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setError('Please provide a valid email address');
            setIsLoading(false);
            return;
        }
        
        try {
            // Generate Supabase ID
            const supabaseId = crypto.randomUUID();
            
            // Get client info
            const userAgent = navigator.userAgent;
            const timestamp = new Date().toISOString();
            
            // Insert directly into Supabase
            const { error } = await supabase
                .from('emails')
                .insert([
                    {
                        email: email.toLowerCase(),
                        supabase_id: supabaseId,
                        source: 'newsletter',
                        user_agent: userAgent,
                        metadata: {
                            timestamp: timestamp,
                            userAgent: userAgent
                        },
                        created_at: timestamp,
                        updated_at: timestamp
                    }
                ]);

            if (error) {
                // Handle duplicate email
                if (error.code === '23505') {
                    setError('This email is already subscribed');
                } else {
                    console.error('Supabase error:', error);
                    setError('Failed to subscribe. Please try again.');
                }
            } else {
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error('Email submission error:', error);
            setError('Failed to subscribe. Please try again.');
        } finally {
            setIsLoading(false);
        }
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
            {error && (
                <div className="error-message" style={{color: '#ff4444', marginTop: '10px', fontSize: '14px'}}>
                    {error}
                </div>
            )}
        </form>
    );
}
