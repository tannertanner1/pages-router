export default function Email() {
  return (
    <div className="flex min-h-screen mx-auto items-center justify-center">
      <form className="max-w-md border-0 text-md">
        
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 font-semibold opacity-90 drop-shadow-sm text-main">Subject</label>
          <select id="subject" className="select w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none font-medium appearance-none">
            <option value="1">General</option>
            <option value="2">Lessons</option>
            <option value="3">Billing</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold text-main">Email</label>
          <input type="text" id="email" className="input w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none" placeholder="Email" />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold text-main">Name</label>
          <input type="text" id="name" className="input w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none" placeholder="Name" />
        </div>

        <div className="mb-4 border-0 text-main">
          <label htmlFor="message" className="block mb-2 font-semibold text-main">Message</label>
          <textarea id="message" className="textarea h-24 w-full rounded p-2 text-black bg-opacity-90 shadow-md pl-4 pr-4 resize-none focus:outline-none" placeholder="Message" />
        </div>

        <button type="submit" className="btn py-2 px-4 mr-3">Send</button>
      </form>
    </div>
  );
}