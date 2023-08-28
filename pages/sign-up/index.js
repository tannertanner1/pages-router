import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/footer.js";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign-Up</title>
        <meta name="description" content="Information regarding schedule and availability" key="desc" />
      </Head>

      <div className="flex items-center justify-center min-h-screen mx-4 my-6">
        <div className="flex flex-col gap-y-12 lg:flex-row lg:gap-x-40">
          <div className="relative mt-2"><button className="btn w-28 h-14" aria-label="Cal.com"><Link href="/sign-up/calcom">Calcom</Link></button></div>
          <div className="relative mt-2 mb-60"><button className="btn w-28 h-14" aria-label="Calendly.com"><Link href="/sign-up/calendly">Calendly</Link></button></div>
        </div>
      </div>

      <Footer />
    </>
  );
}