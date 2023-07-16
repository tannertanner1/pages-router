import { useRouter } from "next/router";
import { Link } from "react-scroll";

export default function Anchor({ href, text }) {
  const router = useRouter();
  const handleClick = () => {
    router.replace(`${router.pathname}#${href}`);
  };
  
  return (
    <Link
      activeClass="font-bold"
      to={href}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      className="text-3xl text-gray-500 hover:text-gray-700 cursor-pointer"
      onClick={handleClick}
    >
      {text}
    </Link>
  );
}