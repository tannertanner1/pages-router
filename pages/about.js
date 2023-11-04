import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { about } from "../content.js";

import dynamic from "next/dynamic";
import { scroller } from "react-scroll";
const Element = dynamic(() => import("react-scroll").then((mod) => mod.Element), { ssr: false });

export function Img({ src, alt }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image src={src} alt={alt} style={{ width: '100%', height: 'auto' }} sizes="100vw" priority />
    </div>
  );
}

export function Href({ span, href }) {
  return (
    <>{span[0]}<Link href={href} className={`href`}>{span[1]}</Link>{span[2]}</>
  );
}

export default function About() {
  const handleScroll = (section) => {
    scroller.scrollTo(section, { duration: 800, offset: -100, smooth: "easeInOutQuart" });
  };
  const background = ["bg-orange-50", "bg-blue-50", "bg-green-50"];

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>{about.meta.title}</title>
        <meta name="title" content={about.meta.title} />
        <meta name="description" content={about.meta.description} key="desc" />
        <meta property="og:image" content={about.meta.image} />
        <meta property="og:image:alt" content={about.meta.alt} />
        <meta property="og:title" content={about.meta.title} />
        <meta property="og:description" content={about.meta.description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={about.meta.url} />
      </Head>

      <section className="flex flex-col bg-white">
        {about.section.map((props, index) => (
          <Element key={props.a} id={props.a} className={`flex flex-col items-center w-full ${background[index]} ${index % 2 != 1 ? `md:flex-row-reverse` : `md:flex-row`}`}>
            <div className={`object-cover w-full ${index % 2 === 1 ? "md:w-1/2 md:order-2" : "md:w-1/2 md:order-1"}`}>
              <Img src={props.image} alt={props.alt} />
            </div>
            <div className={`flex flex-col whitespace-pre-line md:w-1/2 p-8 lg:pt-12`}>
              <div className="mx-1.5">
                <h1><Link href={`/about#${props.a}`} onClick={() => handleScroll(props.a)} className="text-gray-500 uppercase tracking-wide text-xs font-semibold bg-transparent lg:hover:bg-transparent lg:hover:opacity-80 transition-opacity duration-300">{props.h1}</Link></h1>
                <h2 className="block text-zinc-900 text-sm leading-tight font-medium mt-1.5">{props.h2}</h2>
                <p className="text-slate-500 text-sm">{props.div.p}<Href span={props.div.span} href={props.div.href} /></p>
              </div>
            </div>
          </Element>
        ))}
      </section>
    </>
  );
}