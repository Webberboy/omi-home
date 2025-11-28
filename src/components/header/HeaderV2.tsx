"use client";
// import Image from "next/image";
import Link from "next/link";
import NavMenu from "../navigation/NavMenu";
import NavMobileV2 from "../navigation/NavMobileV2";
import { useEffect, useState } from "react";
import useHeaderSticky from "@/utils/useHeaderSticky";

export default function HeaderV2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onOpenMenu = () => setIsMenuOpen(true);
    const isSticky = useHeaderSticky();
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>
            <header id="header" className={`tf-header ${isSticky ? "header-sticky" : ""}`} style={{ top: isSticky ? "0" : "-100px" }}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-5 col-lg-3">
                            <div className="header-left">
                                <Link href="/" className="logo-site">
                                    <span className="text-logo" style={{ fontSize: "18px", fontWeight: "bold", color: "#fff", fontFamily: "Mono", textTransform: "uppercase" }}>HeyOmi</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-6 d-none d-lg-block">
                            <NavMenu />
                        </div>
                        <div className="col-7 col-lg-3">
                            <div className="header-right">
                                <div className="btn_group">
                                    <Link href="/login" className="tf-btn text-body-3 animate-btn d-none d-sm-flex">
                                        Log in
                                    </Link>
                                    {/* <Link href="/get-started" className="tf-btn text-body-3 style-2 animate-btn animate-dark">
                                        Get started
                                    </Link> */}
                                    <button type="button" className="btn-menu_mobile d-lg-none" onClick={onOpenMenu}>
                                        <i className="icon icon-menu"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <span className="br-line"></span>
            <NavMobileV2 isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
