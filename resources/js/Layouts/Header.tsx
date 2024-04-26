import { useEffect, useState } from "react";
import {clsx} from "clsx";
import Navigation from "@/js/Components/Navigation/Navigation";

const Header = () => {
    const [showBorder, setShowBorder] = useState(false);
    useEffect(() => {
        const checkScroll = () => setShowBorder(() => window.scrollY > 15);

        window.addEventListener("scroll", checkScroll);

        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    const containerClasses = clsx([
        "sticky top-0 border-b bg-neutral-100/80 backdrop-blur-sm dark:bg-neutral-800/80",
        {
            "border-neutral-300 dark:border-neutral-600": showBorder,
            "border-transparent": !showBorder,
        },
        "w-full transition-all duration-300 ease-in-out",
    ]);

    return <div className={containerClasses}>
        <div className={"container mx-auto my-5"}>
            <Navigation/>
        </div>
    </div>;
};

export default Header;
