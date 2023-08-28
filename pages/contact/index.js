import Head from "next/head"
import Link from "next/link";
import Footer from "../../components/footer.js";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact forms for handling emails" key="desc" />
      </Head>

      <div className="flex items-center justify-center min-h-screen mx-4 my-6">
        <div className="flex flex-col gap-y-12 lg:flex-row lg:gap-x-40">
          <div className="relative mt-2"><button className="btn w-28 h-14" aria-label="Nodemailer"><Link href="/contact/nodemailer">Nodemailer</Link></button></div>
          <div className="relative mt-2 mb-60"><button className="btn w-28 h-14" aria-label="Sendgrid"><Link href="/contact/sendgrid">Sendgrid</Link></button></div>
        </div>
      </div>

      <Footer />
    </>
  );
}