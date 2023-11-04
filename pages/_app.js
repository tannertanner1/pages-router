import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/layout.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics mode={'production'} />
    </>
  );
}