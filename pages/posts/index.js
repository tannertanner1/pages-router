import Link from 'next/link';
import Image from 'next/image';
import Date from '../../components/date.js';

import { getSortedPostsData } from '../../lib/posts.js';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

export default function Posts({ allPostsData }) {
  return (
    <div className="max-w-screen-sm px-4 mt-12 mb-24 mx-auto">     
      <div className="flex flex-col items-center">
        <Link href="/"><Image src="/profile.jpg" alt="alt" height={144} width={144} className="rounded-full mb-8 hover:animate-pulse ease-in-out" /></Link>        
      </div>

      <section className="text-xl leading-6 p-1">
        <h1 className="text-gray-600 text-opacity-50 dark:text-gray-400 leading-8 py-8">Posts</h1>
        
        <ul className="list-none p-0 m-0">
          {allPostsData.map(({ id, image, alt, title, date, description }) => (
            <li className="mb-6 flex" key={id}>
              <div className="content flex-1">
                <div className="title mb-2"><Link href={`/posts/${id}`}>{title}</Link></div>
                <div className="date text-sm mt-1"><Date dateString={date} /></div>
                <div className="desc text-lg mt-3">{description}</div>
              </div>
              <div><Image src={image} alt={alt} width={100} height={100} className="rounded-lg" /></div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}