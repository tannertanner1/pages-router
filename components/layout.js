import { useState, useEffect } from "react"
import Navbar from "../components/navbar.js";
import Nav from "../components/nav.js";
// import Footer from "../components/footer.js";

export default function Layout({ children }) {
  const [isDrawer, setDrawer] = useState(false);
  const [isAccordion, setAccordion] = useState('');
  const [isDropdown, setDropdown] = useState(false);
  const [isWindow, setWindow] = useState(0);

  const handleDrawer = () => {
    setDrawer(!isDrawer);
    setAccordion('');
  };

  const handleDropdown = () => {
    setDropdown(!isDropdown);
  };

  useEffect(() => {
    setWindow(window.innerWidth);
    const handleResize = () => {
      setWindow(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      { isWindow >= 1024 ? (
        // "hidden lg:block"
        <Nav isDropdown={isDropdown} setDropdown={setDropdown} handleDropdown={handleDropdown} />
      ) : (
        // "lg:hidden"
        <Navbar isDrawer={isDrawer} handleDrawer={handleDrawer} isAccordion={isAccordion} setAccordion={setAccordion} />
      )}

      { isDrawer ? (
        <>
        </>
      ) : (
        <>
        {children}
        {/* <Footer /> */}
        </>
      )}
    </>
  );
}