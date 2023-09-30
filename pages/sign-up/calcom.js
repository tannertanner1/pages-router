import Head from "next/head"
import { pageData } from "../../meta.js";

import { useEffect } from "react";
import Script from "next/script";

import Cal, { getCalApi } from "@calcom/embed-react";
// import dynamic from "next/dynamic";
// import { getCalApi } from "@calcom/embed-react";
// const Cal = dynamic(() => import("@calcom/embed-react").then((mod) => mod.Cal), { ssr: false });

export default function Calcom() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {});
    })();
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>{pageData['signUp'].calcom.title}</title>

        <meta name="title" content={pageData['signUp'].calcom.title} />
        <meta name="description" content={pageData['signUp'].calcom.description} key="desc" />

        <meta property="og:image" content={pageData['signUp'].calcom.image} />
        <meta property="og:image:alt" content={pageData['signUp'].calcom.alt} />
        <meta property="og:title" content={pageData['signUp'].calcom.title} />
        <meta property="og:description" content={pageData['signUp'].calcom.description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['signUp'].calcom.path}`} />
        
        <Script src="https://cal.com/tannertanner1/trial" strategy="lazyOnload" />
      </Head>

      <div className="min-h-screen px-6 py-6 md:py-0 md:mt-4 justify-center items-center z-0">
        {/* <frame> or <iframe> elements do not have a title
        Failing Elements
        iframe.cal-embed */}
        {/* <iframe
          className="cal-embed"
          name="cal-embed"
          src="https://cal.com/tannertanner1/trial"
          style={{ height: "564px", width: "100%" }}
          title="Cal.com link"
        ></iframe> */}
        <Cal calLink="tannertanner1/trial" />
        
        <div className="text text-center py-3">
          <div className="=text-center text-lg font-semibold text-opacity-90 leading-loose">Note</div>
          <div className="text-sm text-slate-600 dark:text-gray-200 mt-1.5 lg:inline-flex lg:whitespace-break-spaces">
            <div>Vestibulum in mi sit amet ipsum congue. </div>
            <div>Pellentesque nec arcu consectetur justo.</div>
          </div>
        </div>
      </div>
    </>
  );
}