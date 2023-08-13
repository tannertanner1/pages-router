import { useState } from "react";
import Link from "next/link";

export default function Drawer({ handleDrawer }) {
  const [isAccordion, setAccordion] = useState('');

  const handleAccordion = (accordion) => {
    setAccordion((prevAccordion) =>
      prevAccordion === accordion ? '' : accordion
    );
  };

  return (
    <drawer className="drawer flex justify-center top-0 p-4">
      <div className="py-4 px-4 overflow-y-auto">
        <div className="space-y-2 flex flex-col ml-3">

          <div className="flex justify-center mt-2 mb-6">
            <Link href="/sign-up">
              <button className="drawer-btn m-auto py-2 px-4" onClick={handleDrawer}>Sign Up</button>
            </Link>
          </div>

          <button className={`menu-btn text-lg flex flex-row ${isAccordion ? 'clicked' : ''}`} onClick={() => handleAccordion("about")}>
            About
            <svg className="mt-1 ml-1 w-4 h-4" stroke="currentColor" stroke-width="2.5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d={isAccordion ? 'M4.5 15.75l7.5-7.5 7.5 7.5' : 'M19.5 8.25l-7.5 7.5-7.5-7.5'} stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          {isAccordion === "about" && (
            <div className="flex flex-col space-y-2 mt-2 pl-4 text-md opacity-75">
              <Link href="/about#lessons">
                <span className="link text" onClick={handleDrawer}>Lessons</span>
              </Link>
              <Link href="/about#reviews">
                <span className="link text" onClick={handleDrawer}>Reviews</span>
              </Link>
              <Link href="/about#policy">
                <span className="link text" onClick={handleDrawer}>Policy</span>
              </Link>
            </div>
          )}

          <Link href="/contact">
            <span className="link text text-lg mt-4 opacity-25" onClick={handleDrawer}>Contact</span>
          </Link>

        </div>
      </div>
    </drawer>
  );
}