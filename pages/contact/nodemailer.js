import Head from "next/head"
import Email from '../../components/email.js';

export default function Nodemailer() {
  return (
    <>
      <Head>
        <title>Nodemailer</title>
        <meta name="description" content="Nodemailer" key="desc" />
      </Head>
      <Email />
    </>
  );
}