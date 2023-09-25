import Head from 'next/head';

import Link from 'next/link';
import Image from 'next/image';
import Date from '../../components/date.js';

import { getAllPostIds, getPostData } from '../../lib/posts.js';
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export default function Post({ postData }) {
  const url = `https://pages-router-eight.vercel.app/posts/${postData.id}`;
  const Course = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": postData.title,
    "description": postData.description,
    "provider": {
      "@type": "Organization",
      "name": "Site Name",
      "sameAs": url
    }
  };
  // const BlogPosting = {
  //   "@context": "https://schema.org",
  //   "@type": "BlogPosting",
  //   "author": {
  //     "@type": "Person",
  //     "name": 'Site Name'
  //   },
  //   "thumbnail": postData.image,
  //   "headline": postData.title,
  //   "datePublished": postData.date,
  //   "description": postData.description
  // };
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
        <meta property="og:site_name" content={"Site Name"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Course) }} />
      </Head>
      <div className="max-w-screen-sm px-4 mt-12 mb-24 mx-auto">
        
        <div className="flex flex-col items-center mb-3">
          <Link href="/posts">
            <Image priority={true} src={postData.image} alt={postData.alt} height={144} width={144} className="rounded-full mb-8" />
          </Link>
        </div>

        <div className="prose dark:prose-invert prose-h2:text-gray-800 dark:prose-h2:text-gray-300">
        {/* <div className="text-gray-800 dark:text-gray-300"> */}
          <h1 className="not-prose font-medium">{postData.title}</h1>
          <div className="not-prose date mt-2"><Date dateString={postData.date} /></div>
  
          <article className="break-after-auto" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>

        <div className="back text-4xl mt-12">
          <Link href="/posts">←</Link>
        </div>

      </div>
    </>
  );
}