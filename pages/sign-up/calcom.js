import Head from "next/head"
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
        <title>Cal.com</title>
        <meta name="description" content="Cal.com link" key="desc" />
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