import Head from 'next/head.js';
import { postData } from '../pages/posts/[id].js';
// import { pageData, structData } from './meta.js';
import { pageData } from './meta.js';

const siteName = "Site Name";
const url = "https://pages-router-eight.vercel.app";

export const structData = {
  BlogPosting: {
    image: `postData[image]`,
    title: `postData[title]`,
    date: `postData[date]`,
    description: `postData[description]`,
  },
  Course: {
    path: '/',
    title: 'Title',
    description: 'Description',
  },
};

export const schema = {
  BlogPosting: {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "author": {
      "@type": "Person",
      "name": siteName
    },
    "thumbnail": `structData['BlogPosting'].image`,
    "headline": `structData['BlogPosting'].title`,
    "datePublished": `structData['BlogPosting'].date`,
    "description": `structData['BlogPosting'].description`
  },
  Course: {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `structData['Course'].title`,
    "description": `structData['Course'].description`,
    "provider": {
      "@type": "Organization",
      "name": siteName,
      "sameAs": `${url}${structData['Course'].path}`
    }
  },
};

export function MetaData({ object, property }) {
  const data = object === pageData ? pageData[property] : postData;
  const { path, image, alt, title, description } = data;

  return (
    <>
      <link rel="icon" href="favicon.ico" />
      <title>{title + ' | ' + siteName}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} key="desc" />

      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={alt} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url + path}`} />
    </>
  );
}

export function Schema({ type }) {
  return (     
    <>
      { !structData[type] ? (
        <></>
      ) : (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema[type]) }} />
      )}
    </>  
  );
}

export default function Meta({ object, property, type }) {
  return (
    <Head>
      <MetaData object={object} property={property} />
      <Schema type={type} />
    </Head>
  );
}