import { useLocation } from "react-router-dom";
export default function Heading({ text }) {
  const { pathname } = useLocation();

  return (
   <header
className={`font-bold text-2xl uppercase ml-4 mt-4 mb-4 ${
  pathname === "/portfolio" || pathname === "/contact" || pathname === "/" ? "text-black" : "text-white"
}`}

>
  {text}
</header>

  );
}
