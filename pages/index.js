import Head from "next/head"
import Link from "next/link"
import Image from 'next/image';
// import Footer from "../components/footer.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Learn more about lessons or sign-up today" key="desc" />
      </Head>

      <div className="max-w-screen-sm px-4 mt-12 mb-24 mx-auto">      
        <div className="flex flex-col items-center">
          <Link href="/posts"><Image src="/profile.jpg" alt="alt" height={144} width={144} className="rounded-full mb-8 hover:animate-pulse ease-in-out" /></Link>
          <h1 className="text-main text-4xl leading-10 font-bold tracking-wide mb-1 py-4">Blog</h1>
          <p className="text-xl text-gray-600 text-opacity-50 dark:text-gray-400">Description</p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}