import { useState } from "react"
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

export default function Layout({ children }) {
  const [isDrawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!isDrawer);
  };

  return (
    <>
      <Navbar isDrawer={isDrawer} handleDrawer={handleDrawer} />
      <div className={`${isDrawer ? 'hidden' : ''}`}>
        {children}
        <Footer />
      </div>
    </>
  );
}