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
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${pageData['blog'].path}`} />
      </Head>

      <ul className="max-w-screen-sm h-screen mx-auto pt-8 px-4">
        {allPostsData.map(({ id, image, alt, title, date, description }) => (
          <li className="flex pb-6 justify-between pl-3 md:pl-0 gap-x-4" key={id}>
            <div className="flex flex-col">
              <span className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 pb-2"><Date dateString={date} /></span>
              <div className="text text-base font-semibold bg-transparent lg:hover:bg-transparent lg:hover:opacity-80 transition-opacity duration-300 pb-1"><Link href={`/blog/${id}`}>{title}</Link></div>
              <div className="text-xs text-gray-700 dark:text-gray-300">{description}</div>
            </div>

            <div className="flex-none mr-3 md:ml-3 py-2">
              <Link priority={true} href={`/blog/${id}`}>
                <Image src={image} alt={alt} width={96} height={96} className="rounded-md" />
              </Link>        
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}