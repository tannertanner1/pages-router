export default function Email() {
  return (
    <div className="container mx-auto py-8 flex items-center justify-center mt-8">
      <form className="max-w-md mx-auto">

        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
          <select id="subject" className="select select-bordered w-full focus:outline-none">
            <option value="">General</option>
            <option value="1">Scheduling</option>
            <option value="2">Lessons</option>
            <option value="3">Billing</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">Email</label>
          <input type="text" id="email" className="input input-bordered w-full  border-gray-700 placeholder-gray-500 focus:outline-none" placeholder="Email"/>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">Name</label>
          <input type="text" id="name" className="input input-bordered w-full border-gray-700 placeholder-gray-500 focus:outline-none" placeholder="Name"/>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-medium">Message</label>
          <textarea id="message" className="textarea textarea-bordered h-24 w-full border-gray-700 placeholder-gray-500 focus:outline-none" placeholder="Message"/>
        </div>

        <button type="submit" className="btn btn-neutral">Send</button>

      </form>
    </div>
  );
}