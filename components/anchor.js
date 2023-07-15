import Screen from "../components/screen.js";
import Link from "next/link";
import Hover from "../components/hover.js";

import { FaHashtag } from "react-icons/fa";

export default function Anchor({ href, text }) {
  return (
    <div className="flex items-center justify-items-start p-26">
      <Screen classNames={["mr-44", "mr-24"]} />

      <Link href={href}>
        <Hover icon={FaHashtag} className="w-3 h-3 text-gray-700" />
      </Link>

      <h1 className="text-4xl ml-2">{text}</h1>
    </div>
  );
}