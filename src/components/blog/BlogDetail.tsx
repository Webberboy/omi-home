import { BlogDetailTag } from "@/src/data/blog";
import Image from "next/image";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import BlogComment from "./BlogComment";
import BlogAddReview from "./BlogAddReview";

interface BlogDetailProps {
    name: string;
    meta_author: string;
    meta_date: string;
    meta_tag: string;
    image: string;
    tag: BlogDetailTag[];
}
export default function BlogDetail(props: BlogDetailProps) {
    const { name, meta_author, meta_date, meta_tag, image, tag } = props;

    return (
        <>
            <section className="section-page-blog flat-spacing-2">
                <div className="container">
                    <div className="content-1200">
                        <div className="blog-detail_heading">
                            <h3 className="title_detail text-linear font-3">{name}</h3>
                            <div className="br-line has-dot"></div>
                            <div className="meta_detail">
                                <div className="meta meta__user">
                                    <i className="icon icon-User"></i>
                                    <span className="meta-text text-body-3">By: {meta_author}</span>
                                </div>
                                <div className="meta meta__date">
                                    <i className="icon icon-Clock"></i>
                                    <span className="meta-text text-body-3">{meta_date}</span>
                                </div>
                                <div className="meta meta__tag">
                                    <i className="icon icon-Tag"></i>
                                    <span className="meta-text text-body-3">{meta_tag}</span>
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
                                        <Image width={732} height={412} src={`/assets/images/blog/${image}`} alt="Blog" />
                                    </div>
                                    <div>
                                        <h4 className="detail_title s1 text-linear font-3">The evolution of compliance monitoring</h4>
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
                                    <div className="detail_image">
                                        <Image width={732} height={412} src="/assets/images/blog/blog-detail-2.jpg" alt="Blog" />
                                    </div>
                                    <div>
                                        <h4 className="detail_title s1 text-linear font-3">AI-powered continuous monitoring capabilities</h4>
                                        <p className="detail_text s2 text-main-6">
                                            Artificial intelligence brings several advantages to compliance monitoring that human-led processes cannot
                                            match. Machine learning algorithms can process vast quantities of data in real-time, identifying patterns
                                            and anomalies that would be difficult for human analysts to detect manually. Systems can simultaneously
                                            monitor multiple data streams, user activities, and system behaviours in all of an organisation’s digital
                                            infrastructure.
                                        </p>
                                        <p className="detail_text s3 text-main-6">
                                            AI-powered monitoring systems excel at pattern recognition, learning from historical data to establish
                                            baselines of normal behaviour. When deviations occur – whether through unauthorised access attempts,
                                            unusual data transfers, or policy violations – they can immediately flag potential compliance breaches.
                                            The capability extends beyond simple rule-based detection; AI systems can identify subtle indicators that
                                            may suggest emerging compliance risks before they transform into actual violations.
                                        </p>
                                        <p className="detail_text s4 text-main-6">
                                            AI systems can contextualise compliance events in broader organisational and regulatory frameworks.
                                        </p>
                                        <div className="block-quote">
                                            <h6 className="quote-text text-linear font-3">
                                                Rather than generating isolated alerts, intelligent monitoring platforms can assess the significance
                                                of events based on factors like data sensitivity, user roles, regulatory requirements, and potential
                                                business impact.
                                            </h6>
                                            <h6 className="quote-author font-3">Esther Howard</h6>
                                        </div>
                                        <p className="detail_text s4 text-main-6">
                                            Contextual awareness enables more targeted and effective compliance responses.
                                        </p>
                                        <div className="br-line has-dot"></div>
                                        <div className="detail_tag">
                                            <ul className="tag-list">
                                                <li className="text-body-3 text-white">Tags:</li>
                                                {tag?.map((item, idx) => (
                                                    <li key={idx}>
                                                        <Link href={`/${item.link_tag}`} className="text-body-3 link">
                                                            {item.name_tag}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <BlogComment />
                                <BlogAddReview />
                            </div>
                            <div className="col-right d-none d-lg-block">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
