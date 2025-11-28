"use client";
import dynamic from "next/dynamic";

const OdometerComponent = dynamic(() => import("@components/common/Odometer"), {
    ssr: false,
});

type Props = {
    value: number;
    label: string;
};

export default function SectHeaderClient({ value, label }: Props) {
    return (
        <div className="s-meta text-caption font-2">
            <div className="s-number_order">
                [{" "}
                <span className="text-white">
                    0<OdometerComponent value={value} />
                </span>{" "}
                / 04 ]
            </div>
            <p className="s-label">
                [ <span className="text-white hacker-text_transform">{label}</span> ]
            </p>
        </div>
    );
}
