import DesktopNavigation from "@/js/Components/Navigation/DesktopNavigation.tsx";

const Navigation = () => {

  const routes = [
    { display: "Home", name: "home" },
    { display: "About", name: "about" },
  ];

  return <nav>
    <DesktopNavigation
      className={"hidden lg:flex"}
      routes={routes}
    />
  </nav>;
}

export default Navigation;
