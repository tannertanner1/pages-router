import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { contact } from "../content.js";

export function Form() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('General');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const sendEmail = async () => {
    const data = {
      name: name,
      subject: subject,
      email: email,
      message: message,
    };

    try {
      // send data to API route
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      // get response from server 
      if (response.status === 200) {
        console.log('Sent');
        setName('');
        setSubject('General');
        setEmail('');
        setMessage('');
        setEmailError('');
        setMessageError('');
      } else {
        console.error('Error');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setMessageError('');
  
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!emailFormat.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (!message.trim()) {
      setMessageError('Message is required');
      return;
    }

    await sendEmail();
    console.log({ name, subject, email, message });
  };
  
  return (
    <form onSubmit={handleSubmit} className="md:w-1/2 w-full max-w-md text-sm h-5/6 md:h-3/4 md:pr-8">
      <input
        placeholder="Name"
        className="mb-2.5 w-full rounded p-2 text-zinc-900 bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        className="mb-2.5 w-full rounded p-2 text-zinc-900 bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none font-medium appearance-none"
        id="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option disabled defaultValue="">Subject</option>
        <option value="General">General</option>
        <option value="Lessons">Lessons</option>
        <option value="Billing">Billing</option>
      </select>

      <div className="mb-3">
        <input 
          placeholder="Email"
          className={`${emailError ? '' : 'mb-4'} w-full rounded p-2 text-zinc-900 bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none`}
          id="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
        />
        <div className="pl-2 text-xs pt-1.5 mb-1 text-red-500">{emailError}</div>
      </div>

      <div className="mb-3">
        <textarea
          placeholder="Message"
          className={`${messageError ? '' : 'mb-4'} h-28 w-full rounded p-2 text-zinc-900 bg-opacity-90 shadow-md pl-4 pr-4 resize-none focus:outline-none`}
          id="message"
          value={message}
          onChange={(e) => { setMessage(e.target.value); setMessageError(''); }}
        />
        <div className="pl-2 text-xs pt-0.5 mb-2 text-red-500">{messageError}</div>
      </div>

      <button type="submit" className="font-medium rounded-md w-full py-2 px-4 mb-6 text-invert bg-invert hover:bg-zinc-900/90 active:bg-zinc-900/95 dark:hover:bg-white/95 dark:active:bg-white/90 focus:outline-none transition-opacity ease-in duration-300">
        <span className="">Submit</span>
      </button>
    </form>
  );
}

export function Href({ span, href }) {
  return (
    <>{span[0]}<Link href={href} className={`ml-1 mr-1 href`}>{span[1]}</Link>{span[2]}</>
  );
}

export function Icon() {
  return (
    // fill-zinc-900 dark:fill-white stroke-zinc-900 dark:stroke-white
    <svg className="ml-1.5 w-10 h-10 fill-zinc-900 dark:fill-white" viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.svg" />
        <title>{contact.meta.title}</title>
        <meta name="title" content={contact.meta.title} />
        <meta name="description" content={contact.meta.description} key="desc" />
        <meta property="og:image" content={contact.meta.image} />
        <meta property="og:image:alt" content={contact.meta.alt} />
        <meta property="og:title" content={contact.meta.title} />
        <meta property="og:description" content={contact.meta.description} />
        <meta property="og:site_name" content="Temp Suscip" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={contact.meta.url} />
      </Head>

      <section className="flex flex-col md:flex-row items-center justify-center h-screen p-4 overflow-y-auto">
        <div className="inline-flex md:w-1/2 md:h-3/6 md:pl-4">
          <div className="text text-center md:text-left md:w-5/6 h-fit md:h-1/2">
            <h1 className="text-2xl font-semibold pb-1.5 md:pb-3 pt-6 md:pt-0 inline-flex align-baseline ml-4 md:ml-0">
              {contact.section.h1}<Icon />
            </h1>
            <p className="md:max-w-sm min-w-full px-10 md:px-0 space-y-0 md:space-y-1.5 pb-6">
              <span className="items-center md:w-full text-sm font-light leading-tighter">{contact.section.div.p}</span>
              <span className="whitespace-pre-line items-center w-full text-sm font-light leading-tighter"><Href span={contact.section.div.span} href={contact.section.div.href} /></span>
            </p>
          </div>
        </div>
        <Form />
      </section>
    </>
  );
}