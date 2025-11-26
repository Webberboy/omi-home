"use client";
import { useEffect, useState } from "react";
import { navItems } from "@data/navItem";
import useHeaderSticky from "@utils/useHeaderSticky";
import { scrollLink } from "@utils/scrollLink";
import Link from "next/link";
import WowEffect from "../common/WowEffect";
import Image from "next/image";

export default function Header() {
    const isSticky = useHeaderSticky();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        scrollLink();
    }, []);

    return (
        <>
            <WowEffect />
            <header id="header" className={`tf-header ${isSticky ? "header-sticky" : ""}`} style={{ top: isSticky ? "0" : "-100px" }}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-5 col-lg-3">
                            <HeaderLeft />
                        </div>
                        <div className="col-6 d-none d-lg-block">
                            <BoxNavigation />
                        </div>
                        <div className="col-7 col-lg-3">
                            <HeaderRight onOpenMenu={() => setIsMenuOpen(true)} />
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}

export function HeaderLeft() {
    return (
        <>
            <div className="header-left">
                <Link href="/" className="logo-site">
                    <Image width={75} height={20} src="/assets/images/logo/logo.svg" alt="LOGO" />
                </Link>
            </div>
        </>
    );
}

export function BoxNavigation() {
    return (
        <>
            <nav className="box-navigation">
                <ul className="main-nav_menu">
                    {navItems.map((item, idx) => (
                        <li key={idx} className="menu-item">
                            <Link href={`#${item.link}`} className="tf-btn style-transparent text-body-3 animate-btn scroll-link">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export function HeaderRight({ onOpenMenu }: { onOpenMenu: () => void }) {
    return (
        <>
            <div className="header-right">
                <div className="btn_group">
                    <Link href="/" className="tf-btn text-body-3 animate-btn d-none d-sm-flex">
                        Log in
                    </Link>
                    <Link href="/" className="tf-btn text-body-3 style-2 animate-btn animate-dark">
                        Get started
                    </Link>
                    <button type="button" className="btn-menu_mobile d-lg-none" onClick={onOpenMenu}>
                        <i className="icon icon-menu"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <>
            <div className={`offcanvas offcanvas-start canvas-mb ${isOpen ? "show" : ""}`} id="mobileMenu">
                <div className="canvas-header">
                    <div className="logo-site">
                        <Image width={75} height={20} src="/assets/images/logo/logo.svg" alt="LOGO" />
                    </div>
                    <div className="btn_group">
                        <Link href="/" className="tf-btn style-2">
                            Get started
                        </Link>
                        <span className="icon-close-popup" onClick={onClose}>
                            <i className="icon-close"></i>
                        </span>
                    </div>
                </div>

                <span className="br-line"></span>

                <div className="canvas-body">
                    <ul className="nav-ul-mb">
                        {navItems.map((item, idx) => (
                            <li className="nav-mb-item" onClick={onClose} key={idx}>
                                <Link href={`#${item.link}`} className="mb-item-link scroll-link">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="canvas-footer">
                    <Link href="/" className="tf-btn w-100 animate-btn style-high">
                        Login
                    </Link>
                </div>
            </div>

            {isOpen && <div className="offcanvas-backdrop fade show" onClick={onClose}></div>}
            {/* <div className={`offcanvas-backdrop fade ${isOpen ? "show" : ""}`} onClick={onClose}></div> */}
        </>
    );
}
