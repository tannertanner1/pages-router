import Head from "next/head";
import { pageData } from "../meta.js";

import Content from "../components/content.js";

export default function About() {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>{pageData['about'].title}</title>

        <meta name="title" content={pageData['about'].title} />
        <meta name="description" content={pageData['about'].description} key="desc" />

        <meta property="og:image" content={pageData['about'].image} />
        <meta property="og:image:alt" content={pageData['about'].alt} />
        <meta property="og:title" content={pageData['about'].title} />
        <meta property="og:description" content={pageData['about'].description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['about'].path}`} />
      </Head>
      <Content />
    </>
  );
}