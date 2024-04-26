import LogoSVG from "@/assets/logo.svg?url";

import Button from "@/js/Components/Button.tsx";
import {clsx} from "clsx";
import {Link, usePage} from "@inertiajs/react";
import {useEffect} from "react";

const DesktopNavigation = ({routes, className, ...rest}) => {

    const navLinkClasses = ({isActive}: { isActive: boolean }) =>
        clsx([
            "transform underline underline-offset-0 transition-all duration-300 hover:underline hover:underline-offset-4",
            {
                "decoration-sky-300 underline-offset-4": isActive,
                "decoration-transparent hover:decoration-sky-300": !isActive,
            },
        ]);

    const containerClasses = clsx([
        "flex items-center justify-between gap-5",
        className,
    ]);

    return <div className={containerClasses} {...rest}>
        <div className={"flex items-center gap-5"}>
            <Link href="/" className={"text-xl flex items-center font-bold"}>
                <img
                    src={LogoSVG as string}
                    alt={"FranciscoSolis Logo"}
                    className={"h-full w-12"}
                />
                FranciscoSolis
            </Link>
            {routes.map((it) => (
                <Link
                    key={it.name}
                    href={it.url || route(it.name)}
                    className={navLinkClasses({
                        isActive: route().current() === it.name,
                    })}>
                    {it.display}
                </Link>
            ))}
        </div>

        <div className={"flex items-center gap-5"}>
            <Button color={"white"}>
                Login
            </Button>

            <Link href={"/auth/register"}>
                <Button color={"primary"}>
                    Register
                </Button>
            </Link>
        </div>
    </div>;
}

export default DesktopNavigation;
