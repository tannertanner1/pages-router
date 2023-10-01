import Link from "next/link";

export default function Navbar({ isDrawer, handleDrawer }) {
  return (
    <div className={`text-invert bg-invert sticky top-0 z-10 px-4 py-4 ${isDrawer ? 'h-screen' : ''}`}>

      <div className="flex flex-row justify-between items-center">
        <Link href="/" onClick={isDrawer ? handleDrawer : undefined} className="flex items-center text-lg font-light lg:hover:opacity-90">
          <div className="rounded-full w-[24px] h-[24px] ml-3.5 mr-2 bg-white dark:bg-black" />
          <div className="first-letter:text-xl first-letter:font-semibold">Temp</div>
          <div className="ml-1.5 first-letter:text-xl first-letter:font-semibold">Suscip</div>
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
            {[['About', '/about'],['Blog', '/blog'],['Contact', '/contact']].map(([page, path]) => (
              <Link key={page} href={path} onClick={isDrawer ? handleDrawer : undefined} className="px-4 text-neutral-400 dark:text-neutral-500 bg-transparent lg:hover:bg-transparent lg:hover:opacity-80 transition-opacity duration-300">{page}</Link>
            ))}
            <Link href="/sign-up" className="px-3 ml-2 mr-0.5 py-1.5 drop-shadow-lg dark:drop-shadow-lg">
              <button onClick={isDrawer ? handleDrawer : undefined} className="items-center justify-center text border-0 font-medium text-opacity-90 hover:text-opacity-100 dark:text-opacity-90 dark:hover:text-opacity-100 bg-opacity-90 hover:bg-opacity-100 dark:bg-opacity-90 dark:hover:bg-opacity-100 shadow-md hover:shadow-lg shadow-white/40 hover:shadow-white/60 dark:shadow-black/20 dark:hover:shadow-black/40 transition-all duration-300">
                <span className="relative rounded-md px-5 py-2.5 bg">Sign-Up</span>
              </button>
            </Link>
          </div>
        </>
      </div>

      <div className="flex flex-col justify-between items-center">
        <div className={`md:hidden bg-invert text-invert absolute ${isDrawer ? 'block' : 'hidden'} flex flex-col items-center justify-center mx-auto`}>
          <Link href="/sign-up" className="flex mt-8 mb-6 drop-shadow-lg">
            <button onClick={isDrawer ? handleDrawer : undefined} className="items-center justify-center text border-0 font-medium hover:font-semibold text-opacity-90 hover:text-opacity-100 dark:text-opacity-90 dark:hover:text-opacity-100 bg-opacity-90 hover:bg-opacity-100 dark:bg-opacity-90 dark:hover:bg-opacity-100 transition-all duration-300">
              <span className="relative rounded-md px-5 py-2.5 ease-in bg">Sign-Up</span>
            </button>
          </Link>

          {[['About', '/about'], ['Blog', '/blog'], ['Contact', '/contact']].map(([page, path]) => (
            <Link key={page} href={path} onClick={handleDrawer} className="px-4 py-1 text-neutral-400 dark:text-neutral-500 bg-transparent lg:hover:bg-transparent lg:hover:opacity-80 transition-opacity duration-300">{page}</Link>
          ))}
        </div>
      </div>

    </div>
  );
}