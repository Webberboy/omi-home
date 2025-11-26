"use client";
import { useEffect } from "react";
import type WOW from "@libs/wow";

export default function WowEffect() {
    useEffect(() => {
        let wowInstance: InstanceType<typeof WOW> | null = null;

        (async () => {
            const { default: WOWClass } = await import("@libs/wow");
            wowInstance = new WOWClass({
                animateClass: "animated",
                offset: 100,
                mobile: true,
                live: false,
            });
            wowInstance.init();
        })();

        return () => {
            wowInstance = null;
        };
    }, []);

    return null;
}
