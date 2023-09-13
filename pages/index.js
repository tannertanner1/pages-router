import Head from "next/head";
import { pageData } from "../meta.js";

import Link from "next/link";
import Image from "next/image";
// import Footer from "../components/footer.js";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <title>{pageData['home'].title}</title>

        <meta name="title" content={pageData['home'].title} />
        <meta name="description" content={pageData['home'].description} />

        <meta property="og:image" content={pageData['home'].image} />
        <meta property="og:image:alt" content={pageData['home'].alt} />
        <meta property="og:title" content={pageData['home'].title} />
        <meta property="og:description" content={pageData['home'].description} />
        <meta property="og:site_name" content={"Site Name"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['home'].path}`} />
      </Head>

      <div className="max-w-screen-sm px-4 mt-12 mb-24 mx-auto">      
        <div className="flex flex-col items-center">
          <Link href="/posts"><Image src="/profile.jpg" alt="alt" height={144} width={144} className="rounded-full mb-8" /></Link>
          <h1 className="text-main text-4xl leading-10 font-bold tracking-wide mb-1 py-4">Blog</h1>
          <p className="text-xl text-gray-600 text-opacity-50 dark:text-gray-400">Description</p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}