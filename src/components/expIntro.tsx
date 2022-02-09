/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Props {}

const ExpIntro = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      "#expWhole",
      { opacity: 0, translateX: 50 },
      { opacity: 1, translateX: 0, delay: (i) => i * 0.5 }
    );
  });
  const { t } = useTranslation();
  const exps = [
    { title: t("Happiness Event"), year: "2017", img: "./img/he2017.jpg" },
    { title: t("The Hawaiian Event"), year: "2017", img: "./img/he2018.jpg" },
    { title: t("The Hawaiian Event"), year: "2018", img: "./img/hpye2017.jpg" },
    { title: t("The Haunted Land"), year: "2018", img: "./img/hl2018.jpg" },
  ];

  return (
    <div className="h-screen w-screen fixed left-0 top-0 flex flex-col lg:flex-row justify-evenly">
      {exps.map((exp) => (
        <div
          id="expWhole"
          key={exp.title + exp.year}
          className=" overflow-hidden opacity-0 group w-full h-full relative  transition-all ease-in-out duration-1000"
        >
          <div className="absolute z-10 dark:from-slate-900 group-hover:backdrop-blur-md h-full w-full bg-gradient-to-b from-slate-100 to-transparent"></div>
          <h1 className="absolute text-slate-100 tracking-widest font-semibold uppercase opacity-0 group-hover:opacity-100 top-1/2 right-1/2 translate-x-1/2 z-10 -translate-y-1/3 transition-all ease-in-out duration-500 group-hover:-translate-y-1/2 text-4xl text-center">
            {exp.title}
          </h1>
          <span className="absolute text-slate-100 z-10 bottom-0 italic font-semibold tracking-widest right-1/2 translate-x-1/2 ">
            {exp.year}
          </span>
          <img
            src={exp.img}
            className="h-full brightness-50 group-hover:brightness-75 group-hover:scale-110 transition-all ease-in-out duration-500 object-center w-full object-cover"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default ExpIntro;
