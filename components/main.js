import Link from "next/link";

export default function Main() {
  return (
    <div className="flex min-h-screen items-center text-center justify-center">
      <div className="flex flex-col text-center justify-between mb-12">
        <h1 className="text-main text-5xl font-bold">Header</h1>
        <p className="text-main opacity-50 text-xl py-2 mt-8 mb-4">Text</p>
        
        <div className="flex flex-row gap-y-4 gap-x-8 p-8">
          <Link href="/about">
            <button className="btn py-2 px-4 mr-3">Learn More</button>
          </Link>
          
          <Link href="/sign-up">
            <button className="btn py-2 px-4 mr-3">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}