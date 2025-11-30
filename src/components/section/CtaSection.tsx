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
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(formData: FormData) {
        console.log('🚀 Email submission started');
        console.log('📋 FormData received:', formData);
        
        setIsLoading(true);
        setError(null);
        
        const email = formData.get('email') as string;
        console.log('📧 Email extracted from form:', email);
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            console.log('❌ Email validation failed:', email);
            setError('Please provide a valid email address');
            setIsLoading(false);
            return;
        }
        
        console.log('✅ Email validation passed:', email);
        
        try {
            console.log('🚀 Calling API endpoint to save email...');
            
            // Get client info
            const userAgent = navigator.userAgent;
            console.log('📱 Client info collected:', { userAgent });
            
            console.log('📡 Sending POST request to /api/subscribe...');
            
            // Get the base URL - use relative path for same origin, or construct full URL
            const baseUrl = typeof window !== 'undefined' ? `${window.location.origin}` : '';
            const apiUrl = `${baseUrl}/api/subscribe`;
            
            console.log('🔗 API URL:', apiUrl);
            
            // Call API endpoint
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    userAgent: userAgent,
                    source: 'newsletter'
                }),
            });

            console.log('📊 API response received:', { 
                status: response.status, 
                statusText: response.statusText 
            });

            const data = await response.json();
            console.log('📋 Response data:', data);

            if (!response.ok) {
                console.log('❌ API error occurred:', data.error);
                
                // Handle duplicate email
                if (response.status === 409) {
                    console.log('🔄 Duplicate email detected');
                    setError('This email is already subscribed');
                } else {
                    setError(data.error || 'Failed to subscribe. Please try again.');
                }
            } else {
                console.log('✅ Email successfully saved to CSV file via API!');
                setIsSubmitted(true);
            }
            
        } catch (error: unknown) {
            console.error('💥 API call error:', error);
            setError('Failed to subscribe. Please try again.');
        } finally {
            console.log('🏁 Email submission process completed');
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
        <form className="form-get" action={handleSubmit} onSubmit={(e) => {
            console.log('📝 Form submit event triggered');
            console.log('🎯 Form element:', e.target);
        }}>
            <div className="form-content">
                <fieldset>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        required 
                        style={{fontSize: '16px'}} 
                        disabled={isLoading}
                        onChange={(e) => console.log('⌨️ Email input changed:', e.target.value)}
                    />
                </fieldset>
                <button 
                    className="tf-btn style-2 style-high animate-btn" 
                    type="submit" 
                    disabled={isLoading}
                    onClick={() => console.log('🖱️ Submit button clicked!')}
                >
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
