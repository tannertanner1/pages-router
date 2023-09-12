import Head from "next/head"
import Content from "../components/content.js";
import Footer from "../components/footer.js";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About lessons, reviews, and policy" key="desc" />
      </Head>

      <Content />
      <Footer />
    </>
  );
}