import Head from "next/head";
import { calendar } from "../content.js";

export default function Calendar() {  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>{calendar.meta.title}</title>
        <meta name="title" content={calendar.meta.title} />
        <meta name="description" content={calendar.meta.description} key="desc" />
        <meta property="og:image" content={calendar.meta.image} />
        <meta property="og:image:alt" content={calendar.meta.alt} />
        <meta property="og:title" content={calendar.meta.title} />
        <meta property="og:description" content={calendar.meta.description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={calendar.meta.url} />
      </Head>

      <section className="flex flex-col bg-white">
        <div className="text min-h-screen p-10 bg">
          <h1 className="md:text-center md:justify-center text-3xl text-gray-800 dark:text-gray-100 font-bold leading-relaxed tracking-wide mb-5">{calendar.section.h1}</h1>
          <div className="flex md:items-center md:justify-center">
            <div className="sm:grid grid-cols-2 gap-x-12 gap-y-4">
              {calendar.section.div.map((props, index) => (
                <div key={index} className="mb-2 justify-center whitespace-nowrap text-sm">
                  <div className="text-slate-600 dark:text-gray-200 font-bold leading-loose tracking-wide w-1/2 sm:w-full">{props.date}</div>
                  <div className="text-slate-500 dark:text-gray-400 w-1/2 sm:w-full">{props.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}