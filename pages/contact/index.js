import Head from "next/head";
import { pageData } from "../../meta.js";

import Link from "next/link";

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
        <meta property="og:site_name" content={"Site Name"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['contact'].index.path}`} />
      </Head>

      <div className="flex items-center justify-center min-h-screen mx-4 my-6">
        <div className="flex flex-col gap-y-12 lg:flex-row lg:gap-x-40">
          <div className="relative mt-2"><button className="btn w-28 h-14" aria-label="Nodemailer"><Link href="/contact/nodemailer">Nodemailer</Link></button></div>
          <div className="relative mt-2 mb-60"><button className="btn w-28 h-14" aria-label="Sendgrid"><Link href="/contact/sendgrid">Sendgrid</Link></button></div>
        </div>
      </div>
    </>
  );
}