import Meta from '../../components/meta.js';
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
  return (
    <div className="max-w-screen-sm px-4 mt-12 mb-24 mx-auto">
      <Meta object={postData} />

      <div className="flex flex-col items-center mb-3">
        <Link href="/posts">
          <Image src={postData.image} alt={postData.alt} height={144} width={144} className="rounded-full mb-8 hover:animate-pulse ease-in-out" />
        </Link>
      </div>

      <h1 className="pt-6 pb-6">{postData.title}</h1>
      <div className="text-lg date">
        <Date dateString={postData.date} />
      </div>

      <div className="prose dark:prose-invert prose-h2:text-gray-600 dark:prose-h2:text-gray-400">
        <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>

      <div className="back text-4xl mt-12">
        <Link href="/posts">←</Link>
      </div>
    </div>
  );
}