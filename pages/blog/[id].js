import Head from "next/head";
import Date from "../../components/date.js";

import Link from "next/link";
import Image from "next/image";

import { getAllPostIds, getPostData } from "../../lib/posts.js";
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export default function Post({ postData }) {
  const url = `https://pages-router-eight.vercel.app/blog/${postData.id}`;
  const Course = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": postData.title,
    "description": postData.description,
    "provider": {
      "@type": "Organization",
      "name": "Temp Suscip",
      "sameAs": url
    }
  };
  // const BlogPosting = {
  //   "@context": "https://schema.org",
  //   "@type": "BlogPosting",
  //   "author": {
  //     "@type": "Person",
  //     "name": 'Temp Suscip'
  //   },
  //   "thumbnail": postData.image,
  //   "headline": postData.title,
  //   "datePublished": postData.date,
  //   "description": postData.description
  // };

  const prose=`prose dark:prose-invert leading-tight
    prose-h2:text-base prose-h2:leading-tight prose-h2:tracking-wide prose-h2:font-semibold prose-h2:text-zinc-800 dark:prose-h2:text-gray-200
    prose-p:text-sm prose-p:leading-tight prose-p:font-normal prose-p:text-neutral-800 dark:prose-p:text-neutral-400
    prose-strong:tracking-wide prose-strong:text-neutral-600 dark:prose-strong:text-neutral-400
    prose-em:tracking-tight prose-em:text-opacity-80 dark:prose-em:text-opacity-80 prose-em:text-neutral-600 dark:prose-em:text-neutral-400
    prose-blockquote:border-neutral-800 dark:prose-blockquote:border-neutral-400 prose-blockquote:border-opacity-30 dark:prose-blockquote:border-opacity-30 prose-blockquote:font-light prose-blockquote:leading-relaxed
    prose-li:text-xs prose-li:font-medium prose-li:text-zinc-600 dark:prose-li:text-zinc-300
    prose-a:text-stone-700 dark:prose-a:text-stone-400
    prose-img:rounded-full
  `;

  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>{postData.title}</title>

        <meta name="title" content={postData.title} />
        <meta name="description" content={postData.description} key="desc" />

        <meta property="og:image" content={postData.image} />
        <meta property="og:image:alt" content={postData.alt} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Course) }} />
      </Head>

      <section className={`${prose} min-w-screen-sm min-h-screen px-6 py-6 mx-auto`}>
        <header>
          <Link href="/blog" className={postData.title === 'Ukulele Lessons Online' ? 'flex flex-col items-center' : 'hidden'}><Image src={postData.image} alt={postData.alt} height={100} width={100} className="rounded-full mb-6" /></Link>
          <h1 className="not-prose text text-xl font-bold mb-1">{postData.title}</h1>
          <span className="not-prose text-xs font-light text-zinc-700 dark:text-zinc-400"><Date dateString={postData.date} /></span>
        </header>
        <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    </>
  );
}