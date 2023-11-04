import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { scroller } from "react-scroll";

import { policy } from "../content.js";
const Element = dynamic(() => import("react-scroll").then((mod) => mod.Element), { ssr: false });

export default function Policy() {
  const handleScroll = (section) => {
    scroller.scrollTo(section, { duration: 800, offset: -100, smooth: "easeInOutQuart" });
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>{policy.meta.title}</title>
        <meta name="title" content={policy.meta.title} />
        <meta name="description" content={policy.meta.description} />
        <meta property="og:image" content={policy.meta.image} />
        <meta property="og:image:alt" content={policy.meta.alt} />
        <meta property="og:title" content={policy.meta.title} />
        <meta property="og:description" content={policy.meta.description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={policy.meta.url} />
      </Head>

      <section className="text bg min-h-screen flex flex-col whitespace-pre-line items-center justify-center">
        <h1 className="text-center text-3xl font-semibold pt-8">{policy.section.h1}</h1>
        <p className="text-center text-sm font-light leading-relaxed mt-2">{policy.section.p[0]}</p>
        <div className="pt-6 pb-4 px-12">
          <p className="text-sm text-slate-500 dark:text-gray-400 mb-6">{policy.section.p[1]}</p>
          {policy.section.div.map((props, index) => (
            <Element id={props.a} key={index}>
              <h2 className="text-lg text-slate-600 dark:text-gray-200 font-semibold mb-3"><Link href={`/policy#${props.a}`} onClick={() => handleScroll(props.p)}>{props.h2}</Link></h2>
              <p className="text-sm text-slate-500 dark:text-gray-400 mb-6">{props.p}</p>
            </Element>
          ))}
        </div>
      </section>
    </>
  );
}