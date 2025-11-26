import Image from "next/image";
import BlogSidebar from "../blog/BlogSidebar";
import BlogCanvas from "../blog/BlogCanvas";
import { featureTabItems2 } from "@/src/data/feature";
import Link from "next/link";
import BlogComment from "../blog/BlogComment";
import BlogAddReview from "../blog/BlogAddReview";

export default function UseCaseDetail() {
    return (
        <>
            <section className="section-page-use-detail flat-spacing-3">
                <div className="container">
                    <div className="content-1200">
                        <div className="box-image-v01">
                            <div className="box_image">
                                <Image loading="lazy" width={1200} height={537} src="/assets/images/blog/use-case-1.jpg" alt="Image" />
                            </div>
                            <div className="box_content">
                                <div className="box_content_wrap">
                                    <p className="tag text-caption text-main-5 font-2">CASE STUDIES</p>
                                    <h3 className="title text-linear font-3">24/7 compliance monitoring: The AI advantage in data protection</h3>
                                    <div className="br-line has-dot"></div>
                                    <p className="desc text-line-clamp-3">
                                        Traditional compliance monitoring is characterised by annual assessments and reactive responses to incidents.
                                        While this approach is sufficient for simpler regulatory
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="page-blog_content detail">
                            <div className="col-left">
                                <div className="main-blog_detail">
                                    <p className="detail_text text-main-2">
                                        Data protection compliance has evolved from a periodic checklist exercise to a continuous responsibility. With
                                        cyber threats emerging and regulatory requirements becoming increasingly stringent, organisations can’t afford
                                        to rely on manual compliance monitoring approaches. The advent of artificial intelligence has transformed the
                                        challenge, offering capabilities for continuous oversight and real-time protection of sensitive data.
                                    </p>
                                    <div className="detail_image">
                                        <Image width={732} height={412} src="/assets/images/blog/use-case-2.jpg" alt="Blog" />
                                    </div>
                                    <div>
                                        <h4 className="detail_title s1 text-linear">The evolution of compliance monitoring</h4>
                                        <p className="detail_text s2 text-main-6">
                                            Traditional compliance monitoring is characterised by annual assessments and reactive responses to
                                            incidents. While this approach is sufficient for simpler regulatory environments, it falls short in
                                            addressing the complexities of modern data protection. The General Data Protection Regulation (GDPR), the
                                            Data Protection Act 2018, and emerging frameworks like the Digital Services Act demand compliance and
                                            demonstrable, ongoing adherence to data handling protocols.
                                        </p>
                                        <p className="detail_text s3 text-main-6 mb-0">
                                            The shift to continuous monitoring represents a change in how organisations approach compliance. Rather
                                            than periodic snapshots of compliance status, businesses are better off with real-time visibility in their
                                            security posture. The transformation has been driven by several factors: the increasing volume and
                                            velocity of data processing, the sophistication of cyber threats, and the evolution of regulatory
                                            expectations towards proactive rather than reactive compliance.
                                        </p>
                                    </div>
                                    <div className="detail_feature_list">
                                        {featureTabItems2.map((item, idx) => (
                                            <div className="detail_feature item" key={idx}>
                                                <h4 className="title text-linear"> {item.name} </h4>
                                                <div className="box-text">
                                                    <p>{item.text_1}</p>
                                                    <p>{item.text_2}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="br-line has-dot"></div>
                                        <div className="detail_tag">
                                            <ul className="tag-list">
                                                <li className="text-body-3 text-white">Tags:</li>
                                                <li>
                                                    <Link href="#" className="text-body-3 link">
                                                        ChatBot AI
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="text-body-3 link">
                                                        Themesflat
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="text-body-3 link">
                                                        Qore
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <BlogComment />
                                <BlogAddReview />
                            </div>
                            <div className="col-right d-none d-lg-block">
                                <BlogSidebar hasDownload={true} hasCaseStudies={true} hasCategory={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BlogCanvas />
        </>
    );
}
