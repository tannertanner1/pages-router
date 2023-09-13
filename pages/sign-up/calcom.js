import Head from "next/head"
import { pageData } from "../../meta.js";

import Script from "next/script";
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

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
        <link rel="icon" href="favicon.ico" />
        <title>{pageData['signUp'].calcom.title}</title>

        <meta name="title" content={pageData['signUp'].calcom.title} />
        <meta name="description" content={pageData['signUp'].calcom.description} key="desc" />

        <meta property="og:image" content={pageData['signUp'].calcom.image} />
        <meta property="og:image:alt" content={pageData['signUp'].calcom.alt} />
        <meta property="og:title" content={pageData['signUp'].calcom.title} />
        <meta property="og:description" content={pageData['signUp'].calcom.description} />
        <meta property="og:site_name" content={"Site Name"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['signUp'].calcom.path}`} />
      </Head>

      <div className="items-center p-4 z-0">
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
        <Script src="https://cal.com/tannertanner1/trial" strategy="lazyOnload" />
      </div>
    </>
  );
}