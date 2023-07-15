import { useEffect, useState } from "react";

export default function Screen({ classNames, children }) {
  const [isWide, setWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWide(typeof window !== "undefined" && window.innerWidth > 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const className = isWide ? classNames[0] : classNames[1];

  return <div className={className}>{children}</div>;
}