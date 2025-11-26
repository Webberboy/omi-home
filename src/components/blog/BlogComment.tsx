import Image from "next/image";

export default function BlogComment() {
    return (
        <>
            <div className="blog-detail_comment">
                <h4 className="title text-linear font-3">Comment</h4>
                <ul className="comment-list">
                    <li className="comment-item">
                        <div className="cmt_head">
                            <div className="cmt__img">
                                <Image width={60} height={60} src="/assets/images/avatar/avt-7.jpg" alt="Avatar" />
                            </div>

                            <div className="cmt__infor">
                                <div className="cmt--author">
                                    <h6 className="author-name text-white font-3">Eleanor Pena</h6>
                                    <div className="rate-wrap">
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                    </div>
                                </div>
                                <p className="cmt--date text-body-3">August 13, 2024</p>
                            </div>
                        </div>
                        <div className="cmt_content">
                            <p className="cmt__text">
                                It&apos;s really easy to use and it is exactly what I am looking for. A lot of good looking templates &amp; it&apos;s
                                highly customizable. Live support is helpful, solved my issue in no time.
                            </p>
                            <div className="feel-action-group">
                                <a href="#" className="btn-feel text-body-3 lh-18 link">
                                    <i className="icon icon-like"></i>
                                    Useful
                                </a>
                                <a href="#" className="btn-feel text-body-3 lh-18 link">
                                    <i className="icon icon-unlike"></i>
                                    Not helpful
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="comment-item">
                        <div className="cmt_head">
                            <div className="cmt__img">
                                <Image width={60} height={60} src="/assets/images/avatar/avt-8.jpg" alt="Avatar" />
                            </div>

                            <div className="cmt__infor">
                                <div className="cmt--author">
                                    <h6 className="author-name text-white font-3">Eleanor Pena</h6>
                                    <div className="rate-wrap">
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                    </div>
                                </div>
                                <p className="cmt--date text-body-3">August 13, 2024</p>
                            </div>
                        </div>
                        <div className="cmt_content">
                            <p className="cmt__text">
                                It&apos;s really easy to use and it is exactly what I am looking for. A lot of good looking templates &amp; it&apos;s
                                highly customizable. Live support is helpful, solved my issue in no time.
                            </p>
                            <div className="feel-action-group">
                                <a href="#" className="btn-feel text-body-3 lh-18 link">
                                    <i className="icon icon-like"></i>
                                    Useful
                                </a>
                                <a href="#" className="btn-feel text-body-3 lh-18 link">
                                    <i className="icon icon-unlike"></i>
                                    Not helpful
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="comment-item">
                        <div className="cmt_head">
                            <div className="cmt__img">
                                <Image width={60} height={60} src="/assets/images/avatar/avt-9.jpg" alt="Avatar" />
                            </div>

                            <div className="cmt__infor">
                                <div className="cmt--author">
                                    <h6 className="author-name text-white font-3">Eleanor Pena</h6>
                                    <div className="rate-wrap">
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                        <i className="icon icon-star"></i>
                                    </div>
                                </div>
                                <p className="cmt--date text-body-3">August 13, 2024</p>
                            </div>
                        </div>
                        <div className="cmt_content">
                            <p className="cmt__text">
                                It&apos;s really easy to use and it is exactly what I am looking for. A lot of good looking templates &amp; it&apos;s
                                highly customizable. Live support is helpful, solved my issue in no time.
                            </p>
                            <div className="feel-action-group">
                                <a href="#" className="btn-feel text-body-3 lh-18 link">
                                    <i className="icon icon-like"></i>
                                    Useful
                                </a>
                                <a href="#" className="btn-feel text-body-3 lh-18 link">
                                    <i className="icon icon-unlike"></i>
                                    Not helpful
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="load-more-cmt link text-body-3">
                            Load more 20 comment
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
