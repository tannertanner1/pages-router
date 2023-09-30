import Head from "next/head";
import { pageData } from "../../meta.js";

export default function Sendgrid() {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>{pageData['contact'].sendgrid.title}</title>

        <meta name="title" content={pageData['contact'].sendgrid.title} />
        <meta name="description" content={pageData['contact'].sendgrid.description} key="desc" />

        <meta property="og:image" content={pageData['contact'].sendgrid.image} />
        <meta property="og:image:alt" content={pageData['contact'].sendgrid.alt} />
        <meta property="og:title" content={pageData['contact'].sendgrid.title} />
        <meta property="og:description" content={pageData['contact'].sendgrid.description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['contact'].sendgrid.path}`} />
      </Head>

      {/* <div className="h-screen w-full" /> */}
    </>
  );
}