import Head from "next/head";
import { pageData } from "../meta.js";

import Terms from "../components/terms.js";

export default function Policy() {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>{pageData['policy'].title}</title>

        <meta name="title" content={pageData['policy'].title} />
        <meta name="description" content={pageData['policy'].description} />

        <meta property="og:image" content={pageData['policy'].image} />
        <meta property="og:image:alt" content={pageData['policy'].alt} />
        <meta property="og:title" content={pageData['policy'].title} />
        <meta property="og:description" content={pageData['policy'].description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['policy'].path}`} />
      </Head>
      <Terms />
    </>
  );
}