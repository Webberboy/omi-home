import { FooterBody } from "./Footer";

export default function FooterV2() {
    return (
        <>
            <footer className="tf-footer">
                <div className="container">
                    <div className="has-hafl_plus">
                        <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                        <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                    </div>
                </div>
                <span className="br-line"></span>
                <div className="sect-bottom">
                    <div className="container">
                        <div className="box-hacker has-overlay_linear mx-1">
                            <p className="hacker-text text-caption font-2 text-uppercase hackerText">
                                qW8bL2nRM4ZpYk5gJfXvCt1uHdEo93NTaVxBYmOe7rPQnKDlcUs0AjzhFiGSwLXtRpUo6NMJvqa7bT2EfyCdx9KWZhgL1nFMR3YUJ5toepXAGvqBzNcdwskLm4iT7OPuVHxayJZErm5QbgCnX1UL2D9ptYfOEK0sWhRAgJmzliNu67BXFoQYPCHtvnwMJeaZKRxdo3TfLUGqc48sbE9NYpJAgmWTVrhXxLFo517zkidC3
                            </p>
                        </div>
                    </div>
                </div>
                <span className="br-line"></span>
                {/* <div className="footer-body">
                    <div className="container">

                    </div>
                </div> */}

                <FooterBody />
            </footer>
        </>
    );
}
