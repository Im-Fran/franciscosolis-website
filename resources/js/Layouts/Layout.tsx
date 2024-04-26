import { PropsWithChildren } from 'react';
import Footer from "@/js/Layouts/Footer";
import Header from "@/js/Layouts/Header";
import {clsx} from "clsx";

const Layout = ({ children, className, ...rest }: PropsWithChildren) => {
    const containerClasses = clsx([
        "bg-neutral-100 text-neutral-800 transition-colors duration-200 dark:bg-neutral-800 dark:text-neutral-50",
        className || "",
    ]);

    return <div className={containerClasses} {...rest}>
        <div className={"flex"}>
            <div className={"flex h-full w-full flex-col gap-20"}>
                <Header />
                <div className={"container mx-auto min-h-screen"}>{ children }</div>
                <Footer />
            </div>
        </div>
    </div>;
};


export default Layout;
