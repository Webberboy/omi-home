"use client";
import { navItems2 } from "@/data/navItem";
import Image from "next/image";
import Link from "next/link";

export default function NavMobileV2({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <>
            <div className={`offcanvas offcanvas-start canvas-mb ${isOpen ? "show" : ""}`} id="mobileMenu">
                <div className="canvas-header">
                    <div className="logo-site">
                        <Image width={75} height={20} src="/assets/images/logo/logo.svg" alt="LOGO" />
                    </div>
                    <div className="btn_group">
                        {/* <Link href="/get-started" className="tf-btn style-2">
                            Get started
                        </Link> */}
                        <span className="icon-close-popup" onClick={onClose}>
                            <i className="icon-close"></i>
                        </span>
                    </div>
                </div>

                <span className="br-line"></span>

                <div className="canvas-body">
                    <ul className="nav-ul-mb gap-0">
                        {navItems2.map((item, idx) => (
                            <li className="nav-mb-item" key={idx}>
                                {!item.subMenu ? (
                                    <Link href={item.link} className="mb-menu-link">
                                        <span>{item.name}</span>
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={`#dropdown-menu-${idx}`}
                                            className="mb-menu-link collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls={`dropdown-menu-${idx}`}
                                        >
                                            <span>{item.name}</span>
                                            <span className="icon icon-arrow-caret-down"></span>
                                        </Link>
                                        <div id={`dropdown-menu-${idx}`} className="collapse">
                                            <ul className="sub-nav-menu">
                                                {item.subMenu.map((sub, subIdx) => (
                                                    <li key={subIdx}>
                                                        <Link href={`/${sub.subLink}`} className="sub-nav-link">
                                                            {sub.subName}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="canvas-footer">
                    <Link href="/login" className="tf-btn w-100 animate-btn style-high">
                        Login
                    </Link>
                </div>
            </div>

            {isOpen && <div className="offcanvas-backdrop fade show" onClick={onClose}></div>}
        </>
    );
}
