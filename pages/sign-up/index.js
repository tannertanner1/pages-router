import Head from "next/head";
import { pageData } from "../../meta.js";

import Pair from "../../components/pair.js"

export default function SignUp() {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>{pageData['signUp'].index.title}</title>

        <meta name="title" content={pageData['signUp'].index.title} />
        <meta name="description" content={pageData['signUp'].index.description} key="desc" />

        <meta property="og:image" content={pageData['signUp'].index.image} />
        <meta property="og:image:alt" content={pageData['signUp'].index.alt} />
        <meta property="og:title" content={pageData['signUp'].index.title} />
        <meta property="og:description" content={pageData['signUp'].index.description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['signUp'].index.path}`} />
      </Head>

      <Pair
        hrefL="/sign-up/calendly" ariaL="Calendly.com" spanL="Calendly" 
        hrefR="/sign-up/calcom" ariaR="Cal.com" spanR="Calcom"
      />
    </>
  );
}
