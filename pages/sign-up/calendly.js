import Head from "next/head"
import { pageData } from "../../meta.js";

import Script from "next/script";
import { InlineWidget } from "react-calendly";

export default function Calendly() {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>{pageData['signUp'].calendly.title}</title>

        <meta name="title" content={pageData['signUp'].calendly.title} />
        <meta name="description" content={pageData['signUp'].calendly.description} key="desc" />

        <meta property="og:image" content={pageData['signUp'].calendly.image} />
        <meta property="og:image:alt" content={pageData['signUp'].calendly.alt} />
        <meta property="og:title" content={pageData['signUp'].calendly.title} />
        <meta property="og:description" content={pageData['signUp'].calendly.description} />
        <meta property="og:site_name" content={"Site Name"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['signUp'].calendly.path}`} />
      </Head>

      <div className="p-4 z-0">
        {/* <InlineWidget url="https://calendly.com/tannertanner1/trial" /> */}
        <InlineWidget url="https://calendly.com/tannertanner1/trial?hide_gdpr_banner=1?hide_landing_page_details=1?hide_event_type_details=1" />        
        <Script src="https://calendly.com/tannertanner1/trial" strategy="lazyOnload" />
      </div>
    </>
  );
}