import { useEffect } from "react";
import Link from "next/link";

export default function Nav({ isDropdown, setDropdown, handleDropdown }) {
  const handleClick = (e) => {
    if (!e.target.closest('.dropdown')) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const links = ["Lessons", "Reviews", "Policy"];

  return (
    <div className="dropdown sticky top-0 z-50" onClick={isDropdown ? handleDropdown : undefined}>

      <nav className="grid grid-row-1 h-20 row-span-full bg-black dark:bg-white">
        <div className="absolute left-1 m-5">
          <button className="link text ml-4 text-4xl"><Link href="/">Title</Link></button>
        </div>

        <div className="absolute ml-10 left-16 pt-2 m-5">
          <button className={`menu-btn ${isDropdown ? 'clicked' : ''}`} onClick={handleDropdown}>
            <div className="flex items-baseline">
              <svg className="w-4 h-4 ml-12 mr-1.5" stroke="currentColor" strokeWidth="2.5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="text-xl">About</div>
            </div>

            {isDropdown && (
              <div className="flex flex-col text-start ml-6">
                <ul className="menu absolute bg-opacity-25 rounded-2xl mt-10 ml-4">
                  {links.map((link) => (
                    <li key={link} className="m-5 lg:hover:opacity-50 ease-linear transition duration-300">
                      <button className="link text-main"><Link href={`/about#${link.toLowerCase()}`}>{link}</Link></button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </button>
        </div>
      
        <div className="absolute right-0 m-5">
          <div className="flex flex-row">
            <button className="link text-neutral-400 dark:text-neutral-500 text-lg mr-6 mt-0.5">
              <Link href="/contact">Contact</Link>
            </button>

            <button className="drawer-btn px-4 py-2 mr-4 mx-4">
              <Link href="/sign-up">Sign Up</Link>
            </button>
          </div>
        </div>
      </nav>
      
    </div>
  );
}