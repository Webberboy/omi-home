import { sidebarCategory, sidebarRecent, sidebarTags } from "@/src/data/blog";
import { caseStudyItems } from "@/src/data/caseStudies";
import Image from "next/image";
import Link from "next/link";

interface BlogSidebarProps {
    hasDownload?: boolean;
    hasCaseStudies?: boolean;
    hasCategory?: boolean;
}

export default function BlogSidebar(props: BlogSidebarProps) {
    const { hasDownload = false, hasCaseStudies = false, hasCategory = true } = props;
    return (
        <div className="blog-sidebar sidebar-content-wrap">
            <div className="sidebar-item">
                <h5 className="sb-title font-3 text-linear">Search</h5>
                <div className="br-line has-dot"></div>
                <form className="form-search">
                    <input className="style-large type-radius-2" type="text" placeholder="Search blog..." required />
                    <button type="submit" className="btn_submit tf-btn text-body-3 style-2 animate-btn animate-dark">
                        <i className="icon icon-MagnifyingGlass"></i>
                    </button>
                </form>
            </div>

            {/* Case studies */}
            {hasCaseStudies && (
                <div className="sidebar-item">
                    <h5 className="sb-title font-3 text-linear">Case studies</h5>
                    <div className="br-line has-dot"></div>
                    <ul className="sb-case">
                        {caseStudyItems.map((item, idx) => (
                            <li className="sb-case_item" key={idx}>
                                <Link href="#">
                                    <div className="d-flex align-items-center">
                                        <i className="icon icon-FileText"></i>
                                    </div>
                                    <div>
                                        <div className="br-line has-dot type-hor"></div>
                                    </div>
                                    <p className="text-main-2 text">{item.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {hasCategory && (
                <div className="sidebar-item">
                    <h5 className="sb-title font-3 text-linear">Category</h5>
                    <div className="br-line has-dot"></div>
                    <ul className="sb-category">
                        {sidebarCategory.map((item, idx) => (
                            <li key={idx}>
                                <Link href={`/${item.link}`} className="text-body-1">
                                    {item.name}
                                    <i className="icon icon-ArrowUpRight"></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="sidebar-item">
                <h5 className="sb-title font-3 text-linear">Recent posts</h5>
                <div className="br-line has-dot"></div>
                <ul className="sb-recent">
                    {sidebarRecent.map((item, idx) => (
                        <li className="sb-recent_item hover-img" key={idx}>
                            <Link href={`/${item.link}`} className="recent__image img-style">
                                <Image width={94} height={94} src={`/assets/images/blog/${item.image}`} alt="Recent" />
                            </Link>
                            <div className="recent__content">
                                <div className="entry_date">
                                    <i className="icon icon-Clock"></i>
                                    <span className="date text-body-3">{item.date}</span>
                                </div>
                                <Link href={`/${item.link}`} className="entry_name link">
                                    {item.name}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {hasDownload && (
                <div className="sidebar-item">
                    <h5 className="sb-title font-3 text-linear">Download</h5>
                    <div className="br-line has-dot"></div>
                    <ul className="sb-download">
                        <li>
                            <a href="#" className="tf-btn style-4 link text-body-3">
                                <i className="icon icon-FileText"></i>
                                Report for 2025 <span className="text-main-7">1.7 KB</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="tf-btn style-4 link text-body-3">
                                <i className="icon icon-FileText"></i>
                                Our brochure<span className="text-main-7">1.7 KB</span>
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            <div className="sidebar-item">
                <h5 className="sb-title font-3 text-linear">Tags</h5>
                <div className="br-line has-dot"></div>
                <ul className="sb-tag">
                    {sidebarTags.map((item, idx) => (
                        <li key={idx}>
                            <Link href={`/${item.link}`} className="text-body-3 link">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
