
import { Element } from "react-scroll";
import Link from "next/link";

export default function Content() {
  const sections = [
    { id: "lessons", text: "Lessons", content: "Lessons..." },
    { id: "reviews", text: "Reviews", content: "Reviews..."},
    { id: "policy", text: "Policy", content: "Policy..." },
  ];

  return (
    <div className="flex py-4">
      <div className="flex flex-col items-start w-full">
        {sections.map(({ id, text, content }) => (
          <Element key={id} id={id} className="min-h-screen flex flex-col items-start justify-center w-full pl-32 lg:pl-52">
            <h2 className="link text-main text-4xl font-bold mb-4">
              <Link href={`/about#${id}`}>{text}</Link>
            </h2>

            <p className="text-main text-opacity-50 text-2xl">
              {content}
            </p>
          </Element>
        ))}
      </div>
    </div>
  );
}