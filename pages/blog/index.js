import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// import { blog } from "../../content.js";
import img from "/public/temp-suscip.png";
export const blog = {
  meta: {
    image: img,
    alt: `Photo of Temp Suscip`,
    title: `Blog | Temp Suscip`,
    description: `Blog posts`,
    url: `https://pages-router-eight.vercel.app/blog`,
  },
};

import { parseISO, format } from "date-fns";
export function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

import { getSortedPostsData } from "../../lib/posts.js";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>{blog.meta.title}</title>
        <meta name="title" content={blog.meta.title} />
        <meta name="description" content={blog.meta.description} key="desc" />
        <meta property="og:image" content={blog.meta.image} />
        <meta property="og:image:alt" content={blog.meta.alt} />
        <meta property="og:title" content={blog.meta.title} />
        <meta property="og:description" content={blog.meta.description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pages-router-eight.vercel.app${blog.meta.url}`} />
      </Head>

      <section className="max-w-screen-sm h-screen mx-auto pt-8 px-4">
        {allPostsData.map(({ id, image, alt, title, date, description }) => (
          <div className="flex pb-6 justify-between pl-3 md:pl-0 gap-x-4" key={id}>
            <div className="flex flex-col">
              <span className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 pb-2"><Date dateString={date} /></span>
              <h2 className="text text-base font-semibold bg-transparent lg:hover:bg-transparent lg:hover:opacity-80 transition-opacity duration-300 pb-1"><Link href={`/blog/${id}`}>{title}</Link></h2>
              <p className="text-xs text-gray-700 dark:text-gray-300">{description}</p>
            </div>

            <div className="flex-none mr-3 md:ml-3 py-2">
              <Link priority="true" href={`/blog/${id}`}>
                <Image src={image} alt={alt} width={96} height={96} className="rounded-md" />
              </Link>        
            </div>
          </div>
        ))}
      </section>
    </>
  );
}