import { Element } from "react-scroll";
import Link from "next/link";

export default function Content() {
  const sections = [
    { id: "lessons", h: "Lessons", p: "Lessons..." },
    { id: "reviews", h: "Reviews", p: "Reviews..."},
    { id: "policy", h: "Policy", p: "Policy..." },
  ];

  return (
    <div className="flex py-4">
      <div className="flex flex-col items-start w-full">
        {sections.map(({ id, h, p }) => (
          <Element key={id} id={id} className="min-h-screen flex flex-col items-start justify-center w-full pl-32 lg:pl-52">
            <h2 className="link text-main text-4xl font-bold mb-4"><Link href={`/about#${id}`}>{h}</Link></h2>
            <p className="text-main text-opacity-50 text-2xl">{p}</p>
          </Element>
        ))}
      </div>
    </div>
  );
}