import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { index } from "../content.js";

export function Star() {
  return (
    <svg className="w-5 h-5 stroke-0 stroke-yellow-300 hover:stroke-yellow-300/90 fill-yellow-300 hover:fill-yellow-300/90 hover:opacity-80 transition-opacity ease-in duration-300" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
}

export function Rating() {
  return (
    <div className="flex flex-row mr-1 p-0.5 space-x-1">
      <Star /><Star /><Star /><Star /><Star />
    </div>
  );
}

export const Testimonial = ({ id, date, p }) => (
  <div className="flex flex-col items-center justify-evenly">
    <div className="min-h-full max-w-sm bg-white text-black text-sm rounded-xl shadow-md p-3.5 space-x-2 mb-0.5">
      <div className="flex flex-row justify-between text-sm text-black font-semibold leading-relaxed tracking-wide ml-2">{id}<Rating /></div>
      <div className="grid grid-flow-col text-xs text-slate-500 font-light leading-relaxed mb-1">{date}</div>
      <div className="text-gray-500 leading-relaxed mt-0.5">{p}</div>
    </div>
  </div>
);

export default function Index() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>{index.meta.title}</title>
        <meta name="title" content={index.meta.title} />
        <meta name="description" content={index.meta.description} />
        <meta property="og:image" content={index.meta.image} />
        <meta property="og:image:alt" content={index.meta.alt} />
        <meta property="og:title" content={index.meta.title} />
        <meta property="og:description" content={index.meta.description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={index.meta.url} />
      </Head>

      <section>
        <div className="h-screen w-full relative">
          <Image className="bg-transparent h-full w-full object-cover object-center absolute inset-0" src={index.section[0].image} alt={index.section[0].alt} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 opacity-70" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-900/50 opacity-70" /> */}
          <div className="absolute inset-10 flex flex-col items-left md:items-center md:justify-center text-left md:text-center h-1/2">
            <h1 className="mt-20 md:mt-60 flex flex-col md:flex-row md:gap-y-3 leading-tight md:leading-normal text-6xl md:text-7xl transition-all ease-in font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-300% animate-gradient">
              <span>{index.section[0].h1.span[0]} </span>
              <span>{index.section[0].h1.span[1]} </span>
              <span>{index.section[0].h1.span[2]} </span>
            </h1>
            
            <h2 className="pl-2 md:pl-0 text-white pb-6 pt-1/3 w-3/4 leading-tight items-left md:items-center md:justify-center text-left md:text-center">
              <span className="text-xl font-semibold leading-[1.5] tracking-normal">{index.section[0].h2}</span>
            </h2>
            
            <div className="ml-2 md:pl-0 mt-10 md:mt-8 items-left md:items-center md:justify-center text-left md:text-center align-baseline space-x-6 md:space-x-12">
              <Link href={index.section[0].button[0].href} className="drop-shadow-lg" aria-label={index.section[0].button[0].label}>
                <button className="inline-flex text-invert text-base font-medium border-0 transition duration-300">
                  <span className="relative rounded-md px-5 py-2.5 transition-all ease-in bg-invert lg:hover:-translate-y-1 lg:hover:scale-110">
                    {index.section[0].button[0].span}
                  </span>
                </button>
              </Link>
              <Link href={index.section[0].button[0].href} className="drop-shadow-lg ml-2 md:ml-6">
                <button className="inline-flex p-0.5 text-base font-medium rounded-lg text-zinc-900 dark:text-white shadow-lg dark:shadow-lg shadow-blue-500/40 bg-gradient-to-br from-orange-700 via-blue-500 to-green-400 group bg-300% animate-gradient">
                  <span className="relative rounded-md px-5 py-2.5 transition-all ease-in bg duration-7 lg:group-hover:bg-opacity-0">
                    {index.section[0].button[1].span}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text bg text-center pt-12 pb-4">
          <h1 className="text-2xl font-semibold leading-tight tracking-wide mx-auto">{index.section[1].h1}</h1>
          <h2 className="text-sm font-light leading-loose">{index.section[1].h2}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 p-5 justify-evenly">
          {index.section[1].div.map((props, index) => (
            <Testimonial key={index} {...props} />
          ))}
        </div>
      </section>
    </>
  );
}