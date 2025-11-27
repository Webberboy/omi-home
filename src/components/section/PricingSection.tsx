import { SectHeader } from "@components/section/SectHeader";
import { SectTagline } from "@components/section/SectTagline";
import { SectBottom } from "@components/section/SectBottom";
import { plans } from "@data/plan";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
export default function PricingSection() {
    return (
        <>
            <section className="section-pricing" id="pricing">
                <SectHeader value={5} label="PRICING" />
                <span className="br-line"></span>
                <SectTagline name={"PLANS FOR EVERY CREATOR."} />
                <span className="br-line"></span>
                <MainPricingSection />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}

export function MainPricingSection() {
    return (
        <>
            <div className="sect-main">
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h2 className="s-title font-3 m-0">
                            Flexible pricing that <br />
                            scales with you
                        </h2>
                    </div>
                    <div className="grid-pricing">
                        {plans.map((plan) => (
                            <div key={plan.id} className={classNames("wg-plan wow fadeInUp", plan.typeClass)}>
                                <div className="content">
                                    <div className="plan-header">
                                        <p className="plan_type text-body-1">{plan.name}</p>
                                        <div className="plan_price">
                                            <h3 className="price-amount">{plan.price}</h3>
                                            <p className="price-duration text-body-3">{plan.duration}</p>
                                        </div>
                                        <p className="plan-description">{plan.description}</p>
                                        <Link href="/" className={classNames("tf-btn style-high animate-btn w-100", plan.buttonClass)}>
                                            <span className="text-body-3">Start free trial</span>
                                        </Link>
                                    </div>

                                    <span className="br-line has-dot" />

                                    <div className="plan-feature">
                                        <p className="feature_title">What’s Included</p>
                                        <ul className="features_list">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <span className="icon">
                                                        <Image width={20} height={20} src="/assets/icon/check.svg" alt="Check" />
                                                    </span>
                                                    {feature.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {plan.image && (
                                        <div className="item">
                                            <Image width={390} height={293} src={plan.image} alt="Plan background" className="lazyload" loading="lazy" />
                                        </div>
                                    )}
                            </div>
                        ))}
                        <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                        <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                    </div>
                </div>
            </div>
        </>
    );
}
