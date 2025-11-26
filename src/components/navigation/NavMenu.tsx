"use client";
import { navItems2 } from "@/src/data/navItem";
import Link from "next/link";
import { useEffect } from "react";

export default function NavMenu() {
    useEffect(() => {
        const navMenu = document.querySelector(".main-nav_menu") as HTMLElement;
        const indicator = navMenu?.querySelector(".menu-indicator") as HTMLElement;
        const items = navMenu?.querySelectorAll(".menu-item");
        if (!indicator || !items) return;

        items.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                const rect = (item as HTMLElement).getBoundingClientRect();
                const parentRect = navMenu.getBoundingClientRect();

                indicator.style.width = `${rect.width}px`;
                indicator.style.height = `${rect.height}px`;
                indicator.style.left = `${rect.left - parentRect.left}px`;
                indicator.style.top = `${rect.top - parentRect.top}px`;
                indicator.style.opacity = "1";
            });

            item.addEventListener("mouseleave", () => {
                indicator.style.opacity = "0";
            });
        });

        return () => {
            items.forEach((item) => {
                item.removeEventListener("mouseenter", () => {});
                item.removeEventListener("mouseleave", () => {});
            });
        };
    }, []);
    return (
        <>
            <div className="box-navigation">
                <ul className="box-nav-menu main-nav_menu position-relative">
                    {navItems2.map((item, idx) => (
                        <li className="menu-item" key={idx}>
                            <Link
                                href={item.link === "/" ? "/" : `/${item.link}`}
                                className="item-link tf-btn style-transparent text-body-3 animate-btn"
                            >
                                {item.name}
                                {item.subMenu && <i className="icon icon-arrow-caret-down fs-7"></i>}
                            </Link>

                            {item.subMenu && (
                                <div className="sub-menu">
                                    <ul className="sub-menu_list">
                                        {item.subMenu.map((sub, subIdx) => (
                                            <li key={subIdx}>
                                                <Link href={`/${sub.subLink}`} className="sub-menu_link">
                                                    {sub.subName}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                    <li className="menu-indicator"></li>
                </ul>
            </div>
        </>
    );
}
