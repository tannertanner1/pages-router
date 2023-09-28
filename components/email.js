import { useState } from 'react';

export default function Email() {
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
    <div className="flex flex-col md:flex-row items-center justify-center h-screen p-4 overflow-y-auto">

      <div className="inline-flex md:w-1/2 md:h-1/2 md:pl-4">
        <div className="text text-center md:text-left md:w-5/6 h-fit md:h-1/2">
          <h2 className="text-2xl font-semibold pb-3 md:pb-6 pt-3 md:pt-0">Praesent gravida ex eu mattis tempus</h2>
          <div className="max-w-sm min-w-full md:space-y-2">
            <div className="inline-flex items-center md:w-full text-sm font-light leading-tight pt-2 md:pt-4">
              Fusce facilisis hendrerit turpis, consequat tempor nisi ultricies. Donec nec orci orci.</div>
            <div className="inline-flex items-center md:w-full text-sm font-light leading-tight pt-2 md:pt-4 pb-6">
              Phasellus iaculis ullamcorper varius. Aliquam malesuada risus vel quam eleifend varius.
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="md:w-1/2 w-full max-w-md text-sm h-5/6 md:h-3/4 md:pr-8">
        <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
        <input
          placeholder="Name"
          className="mb-6 w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="subject" className="block mb-1 font-semibold opacity-90 drop-shadow-sm text">Subject</label>
        <select
          className="mb-6 w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none font-medium appearance-none"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Lessons">Lessons</option>
          <option value="Billing">Billing</option>
        </select>

        <label htmlFor="name" className="block mb-1 font-semibold text">Email</label>
        <input 
          placeholder="Email"
          className={`${emailError ? '' : 'mb-5'} w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none`}
          id="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
        />
        <div className="text-xs mt-1 mb-1 text-red-500">{emailError}</div>

        <label htmlFor="message" className="block mb-1 font-semibold text">Message</label>
        <textarea
          placeholder="Message"
          className={`${messageError ? '' : 'mb-4'} h-24 w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 resize-none focus:outline-none`}
          id="message"
          value={message}
          onChange={(e) => { setMessage(e.target.value); setMessageError(''); }}
        />
        <div className="text-xs mb-2.5 text-red-500">{messageError}</div>

        <button type="submit" className="font-medium rounded-md w-full py-2 px-4 mb-6 text-invert bg-invert hover:bg-black/95 active:bg-black/90 dark:hover:bg-white/95 dark:active:bg-white/90 focus:outline-none transition-opacity ease-in duration-300">
          <span className="">Submit</span>
        </button>
      </form>
    </div>
  );
}