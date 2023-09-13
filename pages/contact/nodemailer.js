import Head from "next/head";
import { pageData } from "../../meta.js";

import Email from '../../components/email.js';

export default function Nodemailer() {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <title>{pageData['contact'].nodemailer.title}</title>

        <meta name="title" content={pageData['contact'].nodemailer.title} />
        <meta name="description" content={pageData['contact'].nodemailer.description} key="desc" />

        <meta property="og:image" content={pageData['contact'].nodemailer.image} />
        <meta property="og:image:alt" content={pageData['contact'].nodemailer.alt} />
        <meta property="og:title" content={pageData['contact'].nodemailer.title} />
        <meta property="og:description" content={pageData['contact'].nodemailer.description} />
        <meta property="og:site_name" content={"Site Name"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['contact'].nodemailer.path}`} />
      </Head>
      <Email />
    </>
  );
}