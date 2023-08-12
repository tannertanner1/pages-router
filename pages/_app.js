import "../styles/globals.css";

import Navbar from "../components/navbar.js";
import Drawer from "../components/drawer.js";
import Footer from "../components/footer.js";

import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isDrawer, setDrawer] = useState(false);

  return (
    <>
      <Drawer isDrawer={isDrawer} />
      <Navbar isDrawer={isDrawer} setDrawer={setDrawer} />
        <Component {...pageProps} />
      <Footer />
    </>
  );
}