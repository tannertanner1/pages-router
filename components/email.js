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
    // pass event to handleSubmit() function on submit
    <div className="relative flex items-center justify-center mt-4 py-4 px-8">
      <form onSubmit={handleSubmit}>

        <label htmlFor="name" className="block mb-2 font-semibold text-main">Name</label>
        <input
          placeholder="Name" className="mb-6 w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none"
          id="name" value={name} onChange={(e) => setName(e.target.value)}
        ></input>

        <label htmlFor="subject" className="block mb-2 font-semibold opacity-90 drop-shadow-sm text-main">Subject</label>
        <select
          className="mb-6 w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none font-medium appearance-none"
          id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Lessons">Lessons</option>
          <option value="Billing">Billing</option>
        </select>
        
        <label className="block mb-2 font-semibold text-main" htmlFor="name">Email</label>
        <input 
          placeholder="Email" className={`${emailError ? '' : 'mb-6'} w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none`}
          id="email" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
        ></input>
        <div className="mt-1 mb-1 text-red-500 text-sm">{emailError}</div>

        <label htmlFor="message" className="block mb-2 font-semibold text-main">Message</label>
        <textarea
          placeholder="Message" className={`${messageError ? '' : 'mb-5'} h-24 w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 resize-none focus:outline-none`}
          id="message" value={message} onChange={(e) => { setMessage(e.target.value); setMessageError(''); }}
        ></textarea>
        <div className="mb-2 text-red-500 text-sm">{messageError}</div>

        <button type="submit" className="btn mt-1 py-2 px-4 mr-3">Submit</button>
      </form>
    </div>
  );
}