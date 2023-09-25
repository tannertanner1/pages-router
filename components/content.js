import Link from "next/link";
import dynamic from "next/dynamic";

import { scroller } from "react-scroll";
const Element = dynamic(() => import("react-scroll").then((mod) => mod.Element), { ssr: false });

export default function Content() {
  const sections = [
    { a: "temp",
      h: "About Temp",
      d: "Integer viverra sapien fermentum sollicitudin mollis",
      p: `
      Aliquam vitae interdum ipsum, sit amet semper mi. Fusce convallis magna quis mi viverra, sed aliquam purus gravida.
      
      Integer tempus fringilla nisl eu congue. Etiam varius ante velit, iaculis laoreet leo auctor ut. Quisque eget viverra leo, ut consectetur urna.

      Maecenas quis eleifend lacus, et pulvinar nibh. Donec consectetur ipsum malesuada mollis condimentum. 
      `,
      i: "/assets/about.png",
      b: "bg-orange-50"
    },
    { a: "policy",
      h: "Studio Policy",
      d: "Proin consectetur velit at tincidunt facilisis",
      p: `
      Duis pulvinar id massa eu imperdiet. Fusce vehicula rhoncus justo et cursus. Fusce sagittis magna sed sapien malesuada accumsan.
      
      Etiam fermentum dapibus gravida. Curabitur eu faucibus felis, sit amet bibendum nisl.
      
      Nunc ipsum est, pharetra sed rhoncus non, cursus non felis. Sed ut lorem commodo, porttitor lectus vel, venenatis nulla.
      `,
      i: "/assets/policy.png",
      b: "bg-blue-50"
    },
    { a: "lessons",
      h: "Online Lessons",
      d: "Duis gravida velit vel leo mollis dignissim",
      p: `
      Cras lobortis magna sed nunc maximus, ac ullamcorper nisi rutrum. Vestibulum bibendum tempus rutrum.
      
      Quisque nec leo sem. Nunc egestas metus vitae quam dapibus convallis. Phasellus porta at tortor nec pharetra.
      
      Mauris aliquet, orci nec luctus aliquam, nunc augue hendrerit est, eget tincidunt sem velit vitae massa.
      `,
      i: "/assets/lessons.png",
      b: "bg-green-50"
    },
  ];

  const handleScroll = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      offset: -100,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="flex flex-col bg-white">
      {sections.map(({ a, h, d, p, i, b }, index) => (
        <Element key={a} id={a}>
          <div id={a} className={`flex flex-col items-center w-full mx-auto ${b} ${index % 2 != 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className={`object-cover w-full ${index % 2 === 1 ? "md:w-1/2 md:order-2" : "md:w-1/2 md:order-1"}`}>
              <img src={i} alt="alt" className="w-full md:w-fit object-contain" />
            </div>
            
            <div className={`flex flex-col whitespace-pre-line md:w-1/2 overflow-x-auto p-8 lg:pt-12`}>
              <Link href={`/about#${a}`} onClick={() => handleScroll(a)} className="text-gray-500 uppercase tracking-wide text-xs font-semibold bg-transparent lg:hover:bg-transparent lg:hover:opacity-80 transition-opacity duration-300">{h}</Link>
              <div className="block text-black text-sm leading-tight font-medium mt-1.5">{d}</div>
              <div className="text-slate-500 text-sm">{p}</div>
            </div>
          </div>
        </Element>
      ))}
    </div>
  );
}