import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import Tl from "../utils/translate";

interface Props {
  tite: string;
  content: string;
}

const Homeslide = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      "#slidetitle",
      { opacity: 0, translateX: 20 },
      { opacity: 1, translateX: 0, ease: "power1.inOut", delay: 2 }
    );
  });

  return (
    <div className="w-3/4 ml-auto lg:translate-x-1/3">
      <h1
        id="slidetitle"
        className="group group-hover:brightness-90 cursor-pointer text-lg uppercase text-indigo-800 dark:text-orange-300 text-right"
      >
        <span className="border-r-4 border-opacity-80 group-hover:shadow dark:group-hover:shadow-slate-700 bg-gradient-to-l from-indigo-200 dark:from-slate-600 to-transparent border-indigo-400 px-2 dark:border-orange-100">
          <Tl>{props.tite}</Tl>
        </span>
        <p
          id="slidecont"
          className="text-right transition ease-in-out pl-10 opacity-40 group-hover:opacity-100 focus:opacity-100 text-xs text-indigo-800 dark:text-orange-100"
        >
          <Tl>{props.content}</Tl>
        </p>
      </h1>
    </div>
  );
};

export default Homeslide;
