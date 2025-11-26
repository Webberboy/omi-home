"use client";
import { useEffect } from "react";
import { hackerTextTransform } from "@/src/utils/hackerTextTransform";

export default function HackerTextEffect() {
    useEffect(() => {
        hackerTextTransform();
    }, []);
    return null;
}
