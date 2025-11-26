import BlogCanvas from "@/src/components/blog/BlogCanvas";
import BlogSidebar from "@/src/components/blog/BlogSidebar";
import Layout from "@/src/components/layout/Layout";
import PageTitle from "@/src/components/section/PageTitle";
import { blogItems } from "@/src/data/blog";
import Image from "next/image";
import Link from "next/link";

export default function PageBlog() {
    return (
        <>
            <Layout>
                <PageTitle name="BLOG" />

                {/* Blog List */}
                <section className="section-page-blog flat-spacing-2">
                    <div className="container">
                        <div className="content-1200">
                            <div className="page-blog_content">
                                <div className="col-left">
                                    <div className="blog-list">
                                        {blogItems.map((item, idx) => (
                                            <div className="blog-article hover-img" key={idx}>
                                                <Link href={`/blog-detail/${idx + 1}`} className="entry_image img-style">
                                                    <Image width={732} height={412} src={`/assets/images/blog/${item.image}`} alt="Image" />
                                                </Link>
                                                <div className="article_content">
                                                    <Link href="/" className="entry_title font-3 h5 link text-main-2">
                                                        {item.name}
                                                    </Link>
                                                    <p className="entry_desc">{item.desc}</p>
                                                    <div className="br-line has-dot"></div>
                                                    <div className="entry_meta">
                                                        <div className="meta meta__user">
                                                            <i className="icon icon-User"></i>
                                                            <span className="meta-text text-body-3">By: {item.meta_author}</span>
                                                        </div>
                                                        <div className="meta meta__date">
                                                            <i className="icon icon-Clock"></i>
                                                            <span className="meta-text text-body-3">{item.meta_date}</span>
                                                        </div>
                                                        <div className="meta meta__tag">
                                                            <i className="icon icon-Tag"></i>
                                                            <span className="meta-text text-body-3">{item.meta_tag}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="pagination-list">
                                            <a href="#" className="pagination-item">
                                                <span>1</span>
                                            </a>
                                            <a href="#" className="pagination-item">
                                                <span>2</span>
                                            </a>
                                            <a href="#" className="pagination-item">
                                                <span>3</span>
                                            </a>
                                            <a href="#" className="pagination-item">
                                                <span className="icon icon-CaretDoubleRight fs-20"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-right d-none d-lg-block">
                                    <BlogSidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <BlogCanvas />
            </Layout>
        </>
    );
}
