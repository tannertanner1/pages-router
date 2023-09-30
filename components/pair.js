import Link from "next/link";

export default function Pair({ hrefL, ariaL, spanL, hrefR, ariaR, spanR }) {
  const variant="font-medium rounded-md px-3 py-1.5 text-invert bg-invert hover:bg-black/90 active:bg-black/95 dark:hover:bg-white/95 dark:active:bg-white/90 focus:outline-none transition-opacity ease-in duration-300"
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen p-4 overflow-y-auto">
      <div className="inline-flex space-x-8 h-3/4">
        <Link href={hrefL} className="drop-shadow-md">
          <button type="submit" aria-label={ariaL} className={variant}>
            {spanL}
          </button>
        </Link>
        <Link href={hrefR} className="drop-shadow-md">
          <button type="submit" aria-label={ariaR} className={variant}>
            {spanR}
          </button>
        </Link>
      </div>
    </div>
  );
}