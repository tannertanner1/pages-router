import Link from "next/link";

export default function Navbar({ isDrawer, setDrawer }) {
  return (
    <navbar className="sticky top-0 z-10 backdrop-filter backdrop-blur-sm">
      <div className="menu px-3 py-3 flex items-center justify-between">
        <div className="flex-1 ml-2">
          <Link href="/">
            <span className="link text text-3xl normal-case">Title</span>
          </Link>
        </div>

        <div className="flex-none mr-2">
          <button className={`menu-btn ${isDrawer ? 'clicked' : ''}`} onClick={() => setDrawer(!isDrawer)}>
            <svg className="w-10 h-10" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={isDrawer ? 'M6 18L18 6M6 6l12 12' : 'M3.75 9h16.5m-16.5 6.75h16.5'} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </navbar>
  );
}