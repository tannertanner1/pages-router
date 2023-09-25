import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
const Link = dynamic(() => import("react-scroll").then((mod) => mod.Link), { ssr: false });

import Navbar from "./navbar.js";
import Footer from "./footer.js";

export default function Layout({ children }) {
  const [isDrawer, setDrawer] = useState(false);
  const [isWindow, setWindow] = useState(0);

  const handleDrawer = () => {
    setDrawer(!isDrawer);
  };

  useEffect(() => {
    setWindow(window.innerWidth);
    const handleWindow = () => {
      setWindow(window.innerWidth);
    };
    window.addEventListener("resize", handleWindow);
    return () => {
      window.removeEventListener("resize", handleWindow);
    };
  }, []);

  useEffect(() => {
    if (isWindow > 1024) {
      setDrawer(false);
    }
  }, [isWindow]);

  useEffect(() => {
    if (isDrawer) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isDrawer]);

  return (
    <Link to='' smooth={true}>
      <Navbar isDrawer={isDrawer} handleDrawer={handleDrawer} />
      {children}
      <Footer />
    </Link>
  );
}