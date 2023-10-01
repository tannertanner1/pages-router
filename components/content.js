import Link from "next/link";

import Img from "./img.js";
import aboutImg from "../public/assets/about.png";
import policyImg from "../public/assets/policy.png";
import lessonsImg from "../public/assets/lessons.png";

import dynamic from "next/dynamic";
import { scroller } from "react-scroll";
const Element = dynamic(() => import("react-scroll").then((mod) => mod.Element), { ssr: false });

export default function Content({  }) {
  const sections = [
    { a: "temp",
      h: "About Temp",
      d: "Integer viverra sapien fermentum sollicitudin",
      p: `
      Aliquam vitae interdum ipsum, sit amet semper mi. Fusce convallis magna quis mi viverra, sed aliquam purus gravida.
      
      Integer tempus fringilla nisl eu congue. Etiam varius ante velit, iaculis laoreet leo auctor ut. Quisque eget viverra leo.

      Maecenas quis eleifend lacus, et pulvinar nibh. Donec consectetur ipsum malesuada mollis condimentum. Vitae pharetra massa.
      `,
      i: aboutImg,
      b: "bg-orange-50"
    },
    { a: "policy",
      h: "Studio Policy",
      d: "Proin consectetur velit at tincidunt facilisis",
      p: `
      Duis pulvinar id massa eu imperdiet. Fusce vehicula rhoncus justo et cursus. Fusce sagittis magna sed dignissim.
      
      Etiam fermentum dapibus gravida. Curabitur eu faucibus felis, sit amet bibendum nisl sapien malesuada.
      

      `,
      i: policyImg,
      b: "bg-blue-50"
    },
    { a: "lessons",
      h: "Online Lessons",
      d: "Duis gravida velit vel leo mollis dignissim",
      p: `
      Cras lobortis magna sed nunc maximus, ac ullamcorper nisi rutrum. Vestibulum bibendum tempus rutrum.
      
      Quisque nec leo sem. Nunc egestas metus vitae quam dapibus convallis. Phasellus porta at tortor nec pharetra.
      
      Mauris aliquet, orci nec luctus aliquam, nunc augue hendrerit est, eget tincidunt sem velit vitae massa vivamus vel.
      `,
      i: lessonsImg,
      b: "bg-green-50"
    },
  ];

  const dates = [
    { date: "January – February", description: "Consequat tempor ultricies" },
    { date: "February – March", description: "Consectetur adipiscing elit" },
    { date: "March – April", description: "Proin a sem non massa 🌸" },
    { date: "March – May", description: "Mattis suscipit eget tempus" },
    { date: "May – June", description: "Phasellus iaculis ullamcorper" },
    { date: "June – July", description: "Finibus sodales pulvinar ☀️" },
    { date: "July – August", description: "Curabitur tincidunt fermentum" },
    { date: "August – September", description: "Scelerisque fermentum dolor" },
    { date: "September – October", description: "Mauris pulvinar dictum 🍂" },
    { date: "October – November", description: "Quisque ante lectus eu" },
    { date: "November – December", description: "Duis fringilla ipsum hendrerit" },
    { date: "December – January", description: "Risus vel eleifend varius ❄️" },
  ];

  const handleScroll = (section) => {
    scroller.scrollTo(section, { duration: 800, offset: -100, smooth: "easeInOutQuart" });
  };

  return (
    <div className="flex flex-col bg-white">
      {sections.map(({ a, h, d, p, i, b }, index) => (
        <Element key={a} id={a}>
          <div id={a} className={`flex flex-col items-center w-full ${b} ${index % 2 != 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className={`object-cover w-full ${index % 2 === 1 ? "md:w-1/2 md:order-2" : "md:w-1/2 md:order-1"}`}>
              <Img src={i} alt="alt" />
            </div>
            
            <div className={`flex flex-col whitespace-pre-line md:w-1/2 p-8 lg:pt-12`}>
              <div className="mx-1.5">
                <Link href={`/about#${a}`} onClick={() => handleScroll(a)} className="text-gray-500 uppercase tracking-wide text-xs font-semibold bg-transparent lg:hover:bg-transparent lg:hover:opacity-80 transition-opacity duration-300">{h}</Link>
                <div className="block text-black text-sm leading-tight font-medium mt-1.5">{d}</div>
                <div className="text-slate-500 text-sm">
                  {p}
                  
                  <span className={`${index === 1 ? "flex justify-end mr-1.5" : "hidden"}`}>
                    <Link href="/policy" className="text-xs drop-shadow-sm">
                      <button className="inline-flex items-center tracking-wide font-medium bg-transparent shadow-black/10 shadow-sm rounded-md px-3 py-1.5 text-black outline outline-1 hover:opacity-80 active:opacity-90 ease-in-out">
                        Read more
                        <svg className="items-center ml-1.5 w-4 h-4 stroke stroke-black fill-black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </button>
                    </Link>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </Element>
      ))}
      <div className="text min-h-screen p-10 bg">
        <h1 className="md:text-center text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-gray-100 font-bold leading-relaxed tracking-wide mb-8 md:mb-10">Important Dates</h1>
        
        <div className="flex md:items-center md:justify-center">
          <div className="sm:grid grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 lg:gap-y-10">
            {dates.map((dateInfo, index) => (
              <div key={index} className="mb-1 md:md-2 justify-center whitespace-nowrap text-sm">
                <div className="text-slate-600 dark:text-gray-200 font-bold leading-loose tracking-wide w-1/2 sm:w-full">{dateInfo.date}</div>
                <div className="text-slate-500 dark:text-gray-400 w-1/2 sm:w-full">{dateInfo.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}