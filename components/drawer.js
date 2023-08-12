import { useState } from "react";
import Link from "next/link";

export default function Drawer({ isDrawer }) {
  const [isAccordion, setAccordion] = useState("");

  const toggleAccordion = (accordion) => {
    setAccordion((prevAccordion) =>
      prevAccordion === accordion ? "" : accordion
    );
  };

  return (
    <drawer className="sticky top-0 z-10">
      {isDrawer && (
        <div className="drawer fixed h-[calc(100vh-48px)] top-16 right-0 p-4 transition-transform w-64 z-40 backdrop-filter backdrop-blur-sm">
          <div className="py-4 px-4 overflow-y-auto">
            <div className="space-y-2 flex flex-col ml-3">

              <div className="flex justify-center mt-2 mb-6">
                <Link href="/sign-up">
                  <button className="drawer-btn m-auto py-2 px-4">
                    Sign Up
                  </button>
                </Link>
              </div>

              <button className={`menu-btn text-lg flex flex-row ${isAccordion ? 'clicked' : ''}`} onClick={() => toggleAccordion("about")}>
                About
                <svg className="mt-1 ml-1 w-4 h-4" stroke="currentColor" stroke-width="3" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={isAccordion ? 'M4.5 15.75l7.5-7.5 7.5 7.5' : 'M19.5 8.25l-7.5 7.5-7.5-7.5' } stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>

              {isAccordion === "about" && (
                <div className="flex flex-col space-y-2 mt-2 pl-4 text-md opacity-75">
                  <Link href="/about#lessons">
                    <span className="link text">Lessons</span>
                  </Link>
                  <Link href="/about#reviews">
                    <span className="link text">Reviews</span>
                  </Link>
                  <Link href="/about#policy">
                    <span className="link text">Policy</span>
                  </Link>
                </div>
              )}

              <Link href="/contact">
                <span className="link text text-lg mt-4 opacity-25">Contact</span>
              </Link>

            </div>
          </div>
        </div>
      )}
    </drawer>
  );
}