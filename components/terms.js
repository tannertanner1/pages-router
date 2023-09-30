import Link from "next/link";
import dynamic from "next/dynamic";

import { scroller } from "react-scroll";
const Element = dynamic(() => import("react-scroll").then((mod) => mod.Element), { ssr: false });

export default function Terms() {
  const sections = [
    // { id: "policy-overview", h: "", p: "..." },
    { id: "teacher-commitments", h: "Teacher Commitments", p: "Morbi quis mauris id eros rutrum consequat tempus in sapien. Sed libero leo, dictum vel tempor nec, commodo ut tellus. Nulla lectus lacus, molestie in suscipit vel, maximus ac quam. Vivamus eu augue sed nulla bibendum venenatis at sed tellus." },
    { id: "student-expectations", h: "Student Expectations", p: "Proin sed mauris vitae velit porttitor elementum. Aliquam pellentesque dui vel mauris ornare, vulputate lacinia magna faucibus. Sed maximus, elit sit amet sagittis congue, est quam tincidunt velit, vel dictum mauris sapien nec metus. In tristique ante sed orci." },
    { id: "tuition-and-payment", h: "Tuition and Payment", p: "Mauris dictum sapien eget egestas rutrum. Cras id erat vulputate, iaculis massa sit amet, luctus lorem. Sed quis placerat ante, at mattis diam. Nulla lectus lacus, molestie in suscipit vel, maximus ac quam. Vivamus eu augue sed nulla bibendum venenatis at sed tellus." },
    { id: "schedule-and-cancellations", h: "Schedule and Cancellations", p: "Sed maximus, elit sit amet sagittis congue, est quam tincidunt velit, vel dictum mauris sapien nec metus. In tristique ante sed orci. Morbi quis mauris id eros rutrum consequat tempus in sapien. Sed libero leo, dictum vel tempor nec, commodo ut tellus." },
    { id: "music-and-materials", h: "Music and Materials", p: "Vivamus ut justo id mi rhoncus pellentesque ac ut tortor. Nam vitae orci vel risus lacinia egestas. Vestibulum hendrerit lectus odio, in hendrerit diam. Proin sed mauris vitae velit porttitor elementum. Aliquam pellentesque dui vel mauris ornare, vulputate lacinia magna faucibus." },
    { id: "term-commitment", h: "Term Commitment", p: "Pellentesque eros ligula, consequat nec molestie vitae, auctor lacinia velit. Fusce id iaculis massa. Donec ligula ex, dapibus nec semper non, molestie non purus. Sed maximus, elit sit amet sagittis congue, est quam tincidunt velit, vel dictum mauris sapien nec metus. In tristique ante sed orci." },
    { id: "media-and-privacy", h: "Media and Privacy", p: "Nulla lectus lacus, molestie in suscipit vel, maximus ac quam. Vivamus eu augue sed nulla bibendum venenatis at sed tellus. In dignissim ac dui eleifend blandit. Vivamus ut justo id mi rhoncus pellentesque ac ut tortor. Nam vitae orci vel risus lacinia egestas. Vestibulum hendrerit lectus odio." },
    // { id: "policy-acknowledgment", h: "", p: "..." },
  ];

  const handleScroll = (section) => {
    scroller.scrollTo(section, { duration: 800, offset: -100, smooth: "easeInOutQuart" });
  };

  return (
    <>
      <div className="text bg min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <header className="text-center pt-8 pb-2 md:pb-8">
            <h1 className="text-2xl md:text-4xl font-semibold">Studio Policy</h1>
            <p className="mt-2 text-xs md:text-sm font-light leading-relaxed">Last updated on January 01, 2023</p>
          </header>

          <main className="pt-5 md:pt-8 pb-4 md:pb-6 px-12 md:px-20">
            <div className="text-xs md:text-base text-slate-500 dark:text-gray-400 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat, velit quis sagittis ornare, sem neque ornare sapien, a volutpat neque lacus at nulla. Nullam ac mattis purus, eget tincidunt enim.
            </div>
            {sections.map((section, index) => (
              <section key={index} id={section.id} className="">
                <Element name={section.id} className="text-sm md:text-xl text-slate-600 dark:text-gray-200 font-semibold mb-2.5">
                  <Link href={`/policy#${section.id}`} onClick={() => handleScroll(section.h)}>
                    {section.h}
                  </Link>
                </Element>
                <div className="text-xs md:text-base text-slate-500 dark:text-gray-400 mb-5">{section.p}</div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}