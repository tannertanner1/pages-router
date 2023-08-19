import Link from "next/link";

export default function Drawer({ handleDrawer, isAccordion, setAccordion }) {
  const handleAccordion = (accordion) => {
    setAccordion((prevAccordion) =>
      prevAccordion === accordion ? '' : accordion
    );
  };

  const links = ["Lessons", "Reviews", "Policy"];

  return (
    <div className="relative">

      <drawer className="drawer flex flex-col justify-center top-0 mb-2 p-4">        
        <button className="drawer-btn flex justify-center mt-2 mb-6 m-auto py-2 px-4" onClick={handleDrawer}>
          <Link href="/sign-up">Sign Up</Link>
        </button>

        <div className="flex flex-col items-center">
          <button className={`menu-btn text-lg flex flex-row mt-4 mr-0.5 ${isAccordion ? 'clicked' : ''}`} onClick={() => handleAccordion("about")}>
            <svg className="mt-1 mr-1 w-4 h-4" stroke="currentColor" stroke-width="2.5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            About
          </button>

          {isAccordion === "about" && (
            <div className="flex flex-col items-center ml-0.5 text-md opacity-75">
              {links.map((link) => (
                <ul className="link text mt-2" onClick={handleDrawer}>
                  <li key={link}><Link href={`/about#${link.toLowerCase()}`}>{link}</Link></li>
                </ul>
              ))}
            </div>
          )}

          <div className="link text ml-0.5 mt-6 text-lg opacity-25" onClick={handleDrawer}>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </drawer>
      
    </div>
  );
}