import Link from "next/link";
import Hover from "./hover.js";

import { PiMusicNotesPlusBold } from "react-icons/pi";
import { TbCalendarStar } from "react-icons/tb";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { LuMailQuestion } from "react-icons/lu";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 tabs flex items-center justify-between p-26">
      <div className="flex items-start">
        <Link href="/about" className="flex items-end">
          <Hover icon={PiMusicNotesPlusBold} className="ml-5" />
        </Link>

        <Link href="/book">
          <Hover icon={TbCalendarStar} />
        </Link>
      </div>

      <div className="flex items-end">
        <div className="text-gray-700">
          <Link href="https://www.tiktok.com">
            <Hover icon={FaTiktok} />
          </Link>
        </div>

        <div className="text-gray-700">
          <Link href="https://www.youtube.com">
            <Hover icon={FaYoutube} />
          </Link>
        </div>

        <Link href="/contact">
          <Hover icon={LuMailQuestion} className="mr-5" />
        </Link>
      </div>
    </div>
  );
}