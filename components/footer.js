import Link from "next/link";

export default function Footer() {
  return (
    // <div>
    <footer className="menu w-full px-6 pt-4 z-10 relative">

      <div className="flex items-center text-center md:items-start md:justify-start justify-center mb-4 pt-0.5">
        <Link href="/" className="link text text-3xl">Title</Link>
      </div>

      <div className="flex flex-wrap flex-col items-center text-center justify-center">
        <div className="pb-4">
          <Link href="/about" className="link text-neutral-400 dark:text-neutral-500 text-md">About</Link>
        </div>
        <div className="lg:mb-6">
          <Link href="/contact" className="link text-neutral-400 dark:text-neutral-500 text-md">Contact</Link>
        </div>
      </div>

      <div className="flex flex-wrap flex-row sm:items-center sm:text-center justify-center md:justify-end gap-y-4 gap-x-4 mt-6 lg:mt-8 mb-2 md:mr-1 sm:ml-1">
        <Link href="https://www.youtube.com" aria-label="YouTube"><svg className="svg-social w-10 h-10" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
        </svg></Link>
        <Link href="https://www.tiktok.com" aria-label="TikTok"><svg className="svg-social w-10 h-10" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
        </svg></Link>
      </div>

      <div className="flex flex-wrap flex-row sm:items-center sm:text-center justify-center md:justify-end">
        <p className="text-neutral-400 dark:text-neutral-500 text-opacity-75 text-sm mx-4 mb-6 mt-4">&copy; 2023 Title</p>
      </div>
      
    </footer>
    // </div>
  );
}