"use client";
import { useEffect } from "react";

export default function BlogCanvas() {
    useEffect(() => {
        const desktopSidebar = document.querySelector(".col-right .blog-sidebar");
        const mobileSidebar = document.querySelector(".sidebar-mobile-append");

        if (desktopSidebar && mobileSidebar) {
            mobileSidebar.innerHTML = "";
            mobileSidebar.appendChild(desktopSidebar.cloneNode(true));
        }
    }, []);

    return (
        <>
            <div className="btn-sidebar-mb d-lg-none right">
                <button data-bs-toggle="offcanvas" data-bs-target="#mbSidebar">
                    <i className="icon icon-sidebar"></i>
                </button>
            </div>
            <div className="offcanvas offcanvas-end canvas-sidebar" id="mbSidebar">
                <div className="canvas-wrapper">
                    <div className="canvas-header">
                        <span className="title h4 fw-bold text-white">Sidebar</span>
                        <span className="icon-close link icon-close-popup" data-bs-dismiss="offcanvas"></span>
                    </div>
                    <div className="canvas-body sidebar-mobile-append blog-sidebar"></div>
                </div>
            </div>
        </>
    );
}
