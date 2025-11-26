type SectTaglineProps = {
    name: string;
};

export function SectTagline({ name }: SectTaglineProps) {
    return (
        <>
            <div className="sect-tagline">
                <div className="container">
                    <div className="sect-tagline_inner">
                        <span className="hafl-plus pst-left_bot wow bounceInScale"></span>
                        <span className="hafl-plus pst-right_bot wow bounceInScale"></span>
                        <p className="s-name text-caption font-2">
                            <span className="bar-group type-left">
                                <span className="bar_center"></span>
                            </span>
                            <span className="hacker-text_transform no-delay">{name}</span>
                            <span className="bar-group type-right">
                                <span className="bar_center"></span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
