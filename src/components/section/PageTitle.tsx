import Link from "next/link";
import HackerTextEffect from "../common/HackerTextEffect";

export interface PageTitleProps {
    name: string;
}

export default function PageTitle({ name }: PageTitleProps) {
    const is404 = name.toLowerCase() === "404";

    return (
        <>
            <HackerTextEffect />
            <div className="section-page-title">
                <div className="sect-tagline">
                    <div className="container">
                        <div className="sect-tagline_inner">
                            <span className="hafl-plus pst-left_bot wow bounceInScale"></span>
                            <span className="hafl-plus pst-right_bot wow bounceInScale"></span>
                            <div className="s-name text-caption font-2">
                                <span className="bar-group type-left">
                                    <span className="bar_center"></span>
                                </span>

                                {is404 ? (
                                    <span className="hacker-text_transform no-delay">PAGE NOT FOUND</span>
                                ) : (
                                    <div className="breadcrumbs-list">
                                        <Link href="/" className="text-white link font-2">
                                            HOME
                                        </Link>
                                        <span>/</span>
                                        <span className="hacker-text_transform no-delay current-page">{name}</span>
                                    </div>
                                )}

                                <span className="bar-group type-right">
                                    <span className="bar_center"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="br-line"></span>
            </div>
        </>
    );
}
