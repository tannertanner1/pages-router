import Link from "next/link";

// import Image from "next/image";
// import image from "../public/profile.jpg";

export default function Home() {
  const testimonials = [
    ['Turpis', 'Mollis', 'Donec sit amet vestibulum lectus. Cras tempus non metus et aliquet.'],
    ['Commodo', 'Consectetur', 'Phasellus nec magna tempor, maximus augue ac, vestibulum elit.'],
    ['Neque', 'Malesuada', 'Nulla est purus, ullamcorper nec massa nec, imperdiet elementum nisi.'],
    ['Amaximus', 'Nunc', 'Phasellus facilisis imperdiet mauris, a lobortis nisi bibendum sed.'],
    ['Feugiat', 'Mollis', 'Donec sit amet vestibulum lectus. Cras tempus non metus et aliquet.'],
    ['Lectus', 'Consectetur', 'Phasellus nec magna tempor, maximus augue ac, vestibulum elit.'],
    ['Porro', 'Malesuada', 'Nulla est purus, ullamcorper nec massa nec, imperdiet elementum nisi.'],
    ['Augue', 'Nunc', 'Phasellus facilisis imperdiet mauris, a lobortis nisi bibendum sed.'],
    ['Commodo', 'Consectetur', 'Phasellus nec magna tempor, maximus augue ac, vestibulum elit.'],
    ['Neque', 'Malesuada', 'Nulla est purus, ullamcorper nec massa nec, imperdiet elementum nisi.'],
    ['Feugiat', 'Mollis', 'Donec sit amet vestibulum lectus. Cras tempus non metus et aliquet.'],
    ['Lectus', 'Consectetur', 'Phasellus nec magna tempor, maximus augue ac, vestibulum elit.'],
  ];

  return (
    <>

      <>
        <div className="relative overflow-hidden bg-clip-border shadow-md">
          {/* <Image className="h-[512px] w-full object-cover object-center" src={image} alt="Image" /> */}
          <div className="h-screen w-full relative">
            {/* <Image className="h-full w-full object-cover object-center" src={image} alt="Image" /> */}
            <div className="bg object-cover object-center absolute inset-0 bg-gradient-to-r bg-clip-content bg-300% animate-gradient from-orange-700/60 via-blue-500/40 to-green-400/20" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="whitespace-break-spaces pl-2 md:-pl-2 flex flex-col md:flex-row text-center md:gap-y-3 text-6xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              <span>Learn. </span>
              <span>Music. </span>
              <span>Online. </span>
            </div>

            <div className="text text-center pb-6 pt-8 px-12 w-3/4 overflow-x-auto">
              <p className="text-base font-semibold leading-[1.3] tracking-wide">
                Lorem ipsum dolor sit
              </p>
              <p className="text-sm font-light leading-relaxed py-2">
                Proin id lectus vehicula, luctus orci tempus, malesuada ipsum.
              </p>
            </div>

            <div className="flex gap-x-8 mt-6 justify-center items-center">
              <Link href="/about" className="items-center justify-center drop-shadow-lg">
                <button className="inline-flex text-invert text-lg font-medium hover:font-semibold border-0 text-opacity-90 hover:text-opacity-100 dark:text-opacity-90 dark:hover:text-opacity-100 bg-opacity-90 hover:bg-opacity-100 dark:bg-opacity-90 dark:hover:bg-opacity-100 transition hover:-translate-y-1 hover:scale-110 duration-300">
                  <span className="relative rounded-md px-5 py-2.5 transition-all ease-in bg-invert">Learn More</span>
                </button>
              </Link>
              <Link href="/sign-up" className="drop-shadow-lg">
                <button className="inline-flex items-center justify-center p-0.5 text-lg font-medium hover:font-semibold rounded-lg text-black hover:text-white dark:text-white shadow-lg dark:shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 dark:shadow-blue-500/60 dark:hover:shadow-blue-500/40 bg-gradient-to-br from-orange-700 via-blue-500 to-green-400 group group-hover:from-orange-700 group-hover:via-blue-500 group-hover:to-green-400 bg-300% animate-gradient">
                  <span className="relative rounded-md px-5 py-2.5 transition-all ease-in bg duration-7 group-hover:bg-opacity-0">Free Trial</span>
                </button>
              </Link>
            </div>
          </div>
        </div>      
      </>

      <>
        <div className="text bg text-center pt-6">
          <p className="text-3xl font-semibold leading-tight tracking-wide mx-auto">
            Bibendum venenatis ipsum
          </p>
          <p className="text-sm font-light leading-loose">
            Vestibulum bibendum tempus rutrum
          </p>
        </div>
        <div className="flex flex-wrap place-content-center pt-10 pb-6 px-3">
          {testimonials.map(([client, region, testimonial], index) => (
            <div key={index} className="max-w-sm mx-auto bg-white rounded-xl space-x-3 pb-3 mb-6 shadow-md">
              <div className="p-3 flex items-center">
                <div className={`${index % 2 != 0 ? 'bg-black' : 'bg-transparent border border-black'} rounded-full w-12 h-12 ml-0.5`} />
                <div className="ml-3">
                  <div className="text-sm text-black font-light leading-loose">{client}</div>
                  <div className="text-sm text-slate-500 font-semibold leading-snug tracking-wide">{region}</div>
                </div>
              </div>
              <p className="pl-2 pr-4 pb-0.5 text-sm text-gray-500 leading-relaxed">{testimonial}</p>
            </div>
          ))}
        </div>
      </>

    </>
  );
}