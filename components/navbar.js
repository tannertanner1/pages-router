import Link from "next/link";
import Drawer from "./drawer.js";

import Image from 'next/image';

export default function Navbar({ isDrawer, handleDrawer, isAccordion, setAccordion }) {
  return (
    <div className="sticky top-0 z-10">
      
      <navbar className="menu px-3 py-3 flex items-center justify-between">
        <div className="link text flex-1 text-3xl ml-2" onClick={isDrawer ? handleDrawer : undefined}>
          <Link href="/"><Image src="/profile.jpg" alt="alt" height={44} width={44} className="rounded-full" /></Link>
        </div>

        <div className="flex-none mr-2">
          <button className={`menu-btn ${isDrawer ? 'clicked' : ''}`} onClick={handleDrawer} aria-label="Toggle menu">
            <svg className="w-10 h-10" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={isDrawer ? 'M6 18L18 6M6 6l12 12' : 'M3.75 9h16.5m-16.5 6.75h16.5'} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </navbar>
      
      <div className={`menu text absolute ${isDrawer ? 'block' : 'hidden'} top-16 bottom-0 z-40 h-screen overflow-y-auto transition-transform translate-x-0 w-full`}>
        <Drawer handleDrawer={handleDrawer} isAccordion={isAccordion} setAccordion={setAccordion} />
      </div>

    </div>
  );
}