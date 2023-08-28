import Head from "next/head"
import Script from "next/script";
import { InlineWidget } from "react-calendly";

export default function Calendly() {
  return (
    <>
      <Head>
        <title>Calendly</title>
        <meta name="description" content="Calendly widget" key="desc" />
      </Head>

      <div className="p-4 z-0">
        {/* <InlineWidget url="https://calendly.com/tannertanner1/trial" /> */}
        <InlineWidget url="https://calendly.com/tannertanner1/trial?hide_gdpr_banner=1?hide_landing_page_details=1?hide_event_type_details=1" />        
        <Script src="https://calendly.com/tannertanner1/trial" strategy="lazyOnload" />
      </div>
    </>
  );
}