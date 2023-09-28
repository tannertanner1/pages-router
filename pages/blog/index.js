import Head from 'next/head';
import { pageData } from "../../meta.js";

import Link from 'next/link';
import Image from 'next/image';
import Date from '../../components/date.js';

import { getSortedPostsData } from '../../lib/posts.js';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>{pageData['blog'].title}</title>

        <meta name="title" content={pageData['blog'].title} />
        <meta name="description" content={pageData['blog'].description} key="desc" />

        <meta property="og:image" content={pageData['blog'].image} />
        <meta property="og:image:alt" content={pageData['blog'].alt} />
        <meta property="og:title" content={pageData['blog'].title} />
        <meta property="og:description" content={pageData['blog'].description} />
        <meta property="og:site_name" content={"Site Name"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['blog'].path}`} />
      </Head>
      <div className="max-w-screen-sm px-4 mt-12 mb-24 mx-auto">     
        <div className="flex flex-col items-center">
          <Link href="/"><Image priority={true} src="/profile.jpg" alt="alt" height={144} width={144} className="rounded-full mb-8" /></Link>        
        </div>

        <section className="text-xl leading-6 p-1">
          <h1 className="text-3xl text-gray-700 text-opacity-50 dark:text-gray-300 leading-8 py-8">Blog</h1>

          {/* <ul className="list-none p-0 m-0"> */}
          <ul className="">
            {allPostsData.map(({ id, image, alt, title, date, description }) => (
              <li className="mb-6 flex" key={id}>
                <div className="content flex-1 py-2">
                  <div className="title mb-2"><Link href={`/blog/${id}`}>{title}</Link></div>
                  <div className="date text-xs mt-1"><Date dateString={date} /></div>
                  <div className="desc text-lg mt-3 break-after-auto">{description}</div>
                </div>
                <div className="mt-3 mb-3">
                  <Link priority={true} href={`/blog/${id}`}><Image src={image} alt={alt} width={100} height={100} className="rounded-lg" /></Link>        
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}