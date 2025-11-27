import { plans } from "@/data/plan";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
export default function PricingSectionV2() {
    return (
        <>
            <section className="section-pricing-2 pricing-2 flat-spacing-3 flat-animate-tab">
                <div className="container">
                    <div className="sect-title type-2 wow fadeInUp">
                        <h2 className="s-title font-3 text-linear">
                            Flexible pricing available <br className="d-none d-sm-block" />
                            to all users
                        </h2>
                        <div className="d-flex justify-content-center">
                            <ul className="tab-btn_list" role="tablist">
                                <li className="" role="presentation">
                                    <a href="#monthly" data-bs-toggle="tab" className="tf-btn-tab active" role="tab">
                                        <span className="text-body-3">Monthly</span>
                                    </a>
                                </li>
                                <li className="" role="presentation">
                                    <a href="#annual" data-bs-toggle="tab" className="tf-btn-tab" role="tab">
                                        <span className="text-body-3">Annual</span>
                                    </a>
                                </li>
                                <li className="" role="presentation">
                                    <a href="#save" data-bs-toggle="tab" className="tf-btn-tab" role="tab">
                                        <span className="text-body-3">Save 30%</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane active show" id="monthly" role="tabpanel">
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

                                        <div className="item">
                                            <Image width={390} height={293} src={plan.image} alt="Plan background" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane" id="annual" role="tabpanel">
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

                                        <div className="item">
                                            <Image width={390} height={293} src={plan.image} alt="Plan background" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane" id="save" role="tabpanel">
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

                                        <div className="item">
                                            <Image width={390} height={293} src={plan.image} alt="Plan background" />
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
