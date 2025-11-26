import { useEffect, useState } from "react";

const useHeaderSticky = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const shouldBeSticky = window.scrollY >= 250;
                    setIsSticky((prev) => (prev !== shouldBeSticky ? shouldBeSticky : prev));
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); 

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return isSticky;
};

export default useHeaderSticky;
