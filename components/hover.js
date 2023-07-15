import { useState } from "react";

export default function Hover ({ icon: Icon, className}) {
  const [hovered, setHovered] = useState(false);
  const defaultClass = "w-8 h-8 ml-4 mt-4 mb-4";
  const finalClass = className ? `${defaultClass} ${className}` : defaultClass;

  return (
    <Icon
      className={`${finalClass} ${hovered ? "opacity-50" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}