import Head from "next/head"
import { pageData } from "../../meta.js";

import Script from "next/script";
// import { InlineWidget } from "react-calendly";
import dynamic from "next/dynamic";
const InlineWidget = dynamic(() => import("react-calendly").then((mod) => mod.InlineWidget), { ssr: false });

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
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['signUp'].calendly.path}`} />
        
        <Script src="https://calendly.com/tannertanner1/trial" strategy="lazyOnload" />
      </Head>

      <div className="min-h-screen px-6 py-6 md:py-0 justify-center items-center z-0">
        {/* <InlineWidget url="https://calendly.com/tannertanner1/trial?hide_gdpr_banner=1?hide_landing_page_details=1?hide_event_type_details=1" /> */}
        <InlineWidget url="https://calendly.com/tannertanner1/trial" />
        
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