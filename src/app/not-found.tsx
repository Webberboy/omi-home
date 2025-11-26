import Layout from "@/src/components/layout/Layout";
import PageTitle from "@/src/components/section/PageTitle";
import Image from "next/image";
import Link from "next/link";

export default function Page404() {
    return (
        <>
            <Layout>
                <PageTitle name="404" />
                <section className="section-404 flat-spacing-3">
                    <div className="container">
                        <div className="content px-16 px-lg-0">
                            <div className="image">
                                <Image loading="lazy" width={544} height={180} src="/assets/images/section/404.png" alt="404" />
                            </div>
                            <h2 className="title text-linear font-3">Page not found</h2>
                            <p className="desc">
                                Sorry, we couldn&apos;t find the page you where looking for. We suggest that <br className="d-none d-sm-block" />
                                you return to homepage.
                            </p>
                            <div className="d-flex justify-content-center">
                                <Link href="/" className="tf-btn text-body-3 style-2 style-high-2 animate-btn animate-dark">
                                    Back to homepage
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
