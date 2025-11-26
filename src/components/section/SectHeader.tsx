import SectHeaderClient from "./SectHeaderClient";

type SectHeaderProps = {
    value: number;
    label: string;
};

export function SectHeader({ value, label }: SectHeaderProps) {
    return (
        <div className="sect-header">
            <div className="container">
                <SectHeaderClient value={value} label={label} />
            </div>
        </div>
    );
}
