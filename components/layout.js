import { useState, useEffect } from "react";
import Link from "next/link";

import { layout } from "../content.js";

export function Icon() {
  return (
    <svg className="ml-0.5 w-9 h-9 stroke-white dark:stroke-zinc-900 fill-none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 18.5c2 -2.5 4 -6.5 4 -10.5c0 -2.946 -2.084 -4.157 -4.204 -4.654c-.864 -.23 -2.13 -.346 -3.796 -.346c-1.667 0 -2.932 .115 -3.796 .346c-2.12 .497 -4.204 1.708 -4.204 4.654c0 3.312 2 8 4 10.5c.297 .37 .618 .731 .963 1.081l.354 .347a3.9 3.9 0 0 0 5.364 0a14.05 14.05 0 0 0 1.319 -1.428z" />
    </svg>
  );
}

export function Navbar({ isDrawer, handleDrawer }) {
  return (
    <div className={`text-invert bg-invert sticky top-0 z-10 px-4 py-4 ${isDrawer ? 'h-screen' : ''}`}>
      <section className="flex flex-row justify-between items-center">
        <Link href="/" onClick={isDrawer ? handleDrawer : undefined} className="flex items-center text-lg font-rubik tracking-normal lg:hover:opacity-90 transition-opacity ease-in duration-300 dark:text-zinc-950">
          <Icon />
          <span className="ml-0.5 block first-letter:text-xl first-letter:font-medium first-letter:tracking-tight first-letter:dark:text-zinc-900">{layout.navbar.icon.span[0]}</span>
          <span className="ml-1 block first-letter:text-xl first-letter:font-medium first-letter:tracking-wider first-letter:dark:text-zinc-900">{layout.navbar.icon.span[1]}</span>
        </Link>
        <>
          <div className={`md:hidden inline-flex mr-2 ${isDrawer ? 'pt-0.5' : 'pb-0.5'}`}>
            <button onClick={handleDrawer} className={`text-invert ${isDrawer ? 'opacity-30 hover:opacity-50' : ''} opacity-90 hover:opacity-70 ease-linear transition duration-300 py-0.5`} aria-label="Toggle">
              <svg className="w-8 h-8" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={isDrawer ? 'M6 18L18 6M6 6l12 12' : 'M3.75 9h16.5m-16.5 7.75h16.5'} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="md:flex hidden items-center">
            {layout.navbar.div.map(({href, span}) => (
              <Link key={span} href={href} onClick={isDrawer ? handleDrawer : undefined} className="px-4 text-neutral-400 dark:text-neutral-500 bg-transparent lg:hover:bg-transparent lg:hover:opacity-80 transition-opacity duration-300">
                {span}
              </Link>
            ))}
            <Link href={layout.navbar.button.href} className="px-3 ml-2 mr-0.5 py-1.5 drop-shadow-sm hover:drop-shadow-md dark:drop-shadow-md dark:hover:drop-shadow-lg">
              <button onClick={isDrawer ? handleDrawer : undefined} className="items-center justify-center text border-0 font-medium text-opacity-90 hover:text-opacity-100 dark:text-opacity-90 dark:hover:text-opacity-100 bg-opacity-90 hover:bg-opacity-95 dark:bg-opacity-90 dark:hover:bg-opacity-100 shadow-md hover:shadow-lg shadow-white/20 hover:shadow-white/30 dark:shadow-zinc-900/20 dark:hover:shadow-zinc-900/40 transition-all ease-in duration-300">
                <span className="relative rounded-md px-5 py-2.5 bg">{layout.navbar.button.span}</span>
              </button>
            </Link>
          </div>
        </>
      </section>

      <section className="flex flex-col justify-between items-center">
        <div className={`absolute md:hidden ${isDrawer ? 'block' : 'hidden'} flex flex-col items-center justify-center mx-auto`}>
          <Link href={layout.navbar.button.href} className="flex mt-8 mb-6 drop-shadow-sm hover:drop-shadow-md dark:drop-shadow-md dark:hover:drop-shadow-lg">
            <button onClick={isDrawer ? handleDrawer : undefined} className="items-center justify-center text border-0 font-medium text-opacity-90 hover:text-opacity-100 dark:text-opacity-90 dark:hover:text-opacity-100 bg-opacity-90 hover:bg-opacity-95 dark:bg-opacity-90 dark:hover:bg-opacity-100 shadow-md hover:shadow-lg shadow-white/20 hover:shadow-white/30 dark:shadow-zinc-900/20 dark:hover:shadow-zinc-900/40 transition-all ease-in duration-300">
              <span className="relative rounded-md px-5 py-2.5 bg">{layout.navbar.button.span}</span>
            </button>
          </Link>
          {layout.navbar.div.map(({href, span}) => (
            <Link key={span} href={href} onClick={handleDrawer} className="px-4 py-1 text-neutral-400 dark:text-neutral-500 bg-transparent lg:hover:bg-transparent lg:hover:opacity-80 transition-opacity duration-300">
              {span}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export function Footer() {
  return (
    <section className="relative bottom-0 w-full flex bg-invert text-invert justify-between px-4 py-5">
      <div className="flex items-center ml-4">
        <Link href="/" className="text-neutral-400 dark:text-neutral-500 text-opacity-75">
          <div className="inline-flex text-xs">
            <span className="tracking-tighter">&copy;</span>
            <span className="ml-0.5 tracking-tighter">{new Date().getFullYear()}</span>
            <span className="first-letter:ml-1.5 tracking-wide">{layout.footer.copy}</span>
          </div>
        </Link>
      </div>

      <div className="flex">
        <Link href={layout.footer.icon[0].href} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" aria-label={layout.footer.icon[0].label}>
            <svg className="opacity-80 hover:text-opacity-90 drop-shadow-sm hover:drop-shadow-md transition ease-in duration-300 w-7 h-7 mr-2.5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </a>
        </Link>
        <Link href={layout.footer.icon[1].href} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" aria-label={layout.footer.icon[1].label}>
            <svg className="opacity-80 hover:text-opacity-90 drop-shadow-sm hover:drop-shadow-md transition ease-in duration-300 w-7 h-7 mr-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
            </svg>
          </a>
        </Link>
      </div>
    </section>
  );
}

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
    <>
      <Navbar isDrawer={isDrawer} handleDrawer={handleDrawer} />{children}<Footer />
    </>
  );
}