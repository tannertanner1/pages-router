import Head from "next/head";
import { pageData } from "../../meta.js";

import Pair from "../../components/pair.js"

export default function Contact() {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>{pageData['contact'].index.title}</title>

        <meta name="title" content={pageData['contact'].index.title} />
        <meta name="description" content={pageData['contact'].index.description} key="desc" />

        <meta property="og:image" content={pageData['contact'].index.image} />
        <meta property="og:image:alt" content={pageData['contact'].index.alt} />
        <meta property="og:title" content={pageData['contact'].index.title} />
        <meta property="og:description" content={pageData['contact'].index.description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['contact'].index.path}`} />
      </Head>

      <Pair
        hrefL="/contact/nodemailer" ariaL="Nodemailer" spanL="Nodemailer" 
        hrefR="/contact/sendgrid" ariaR="Sendgrid" spanR="Sendgrid"
      />    
    </>
  );
}