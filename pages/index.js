import Head from "next/head";
import { pageData } from "../meta.js";

import Home from "../components/home.js";

export default function Index() {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>{pageData['home'].title}</title>

        <meta name="title" content={pageData['home'].title} />
        <meta name="description" content={pageData['home'].description} />

        <meta property="og:image" content={pageData['home'].image} />
        <meta property="og:image:alt" content={pageData['home'].alt} />
        <meta property="og:title" content={pageData['home'].title} />
        <meta property="og:description" content={pageData['home'].description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['home'].path}`} />
      </Head>
      <Home />
    </>
  );
}