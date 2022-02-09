/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { BsMouse } from "react-icons/bs";
import _ from "lodash";
import Tl from "../utils/translate";
import { useTranslation } from "react-i18next";

interface Props {
  currentSlide: number;
}

const ServiceIntro = (props: Props) => {
  const { t } = useTranslation();
  const [alphabet, setAlphabet] = useState("A");

  const atozproj = [
    { title: "A", proj: t("Agile") },
    { title: "B", proj: t("Benefits Realisation Management (BRM)") },
    { title: "C", proj: t("Change Management") },
    { title: "D", proj: t("Deliverables") },
    { title: "E", proj: t("Emotional Intelligence") },
    { title: "F", proj: t("Failure") },
    { title: "G", proj: t("Gantt Charts") },
    { title: "H", proj: t("Human Resource Management Plan") },
    { title: "I", proj: t("Issue") },
    { title: "J", proj: t("Jobs") },
    { title: "K", proj: t("Key Performance Indicator (KPI)") },
    { title: "L", proj: t("Lean Project Management") },
    { title: "M", proj: t("Monitoring") },
    { title: "N", proj: t("Non-linear Management (NLM)") },
    { title: "O", proj: t("Out of Scope") },
    { title: "P", proj: t("Phases") },
    { title: "Q", proj: t("Quality") },
    { title: "R", proj: t("Risk Management") },
    { title: "S", proj: t("Scrum") },
    { title: "T", proj: t("Training") },
    { title: "U", proj: t("User Story") },
    { title: "V", proj: t("Virtual Team") },
    { title: "W", proj: t("Waterfall") },
    { title: "X", proj: t("X Bar Control Charts") },
    { title: "Y", proj: t("Yellow") },
    { title: "Z", proj: t("Zero Float") },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#mouseIcon",
      { translateY: -10 },
      { translateY: 0, duration: 1.5, ease: "power3.inOut" }
    );
    tl.fromTo(
      "#mouseIcon",
      { translateY: 0 },
      { translateY: -10, duration: 1, ease: "power3.inOut" }
    );
    tl.repeat(999);

    if (props.currentSlide === 0) {
      gsap.fromTo(
        "#introImg",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, delay: 0.3 }
      );
      gsap.from("#introText", {
        opacity: 0,
        translateY: 10,
        delay: 0.3,
      });
    }
  }, [props.currentSlide]);

  const alphaclickHandler = (e: any) => {
    setAlphabet(e.currentTarget.innerHTML);
    gsap.fromTo("#alphaProj", { opacity: 0 }, { opacity: 1 });
  };
  return (
    <div className="h-full w-full relative">
      <div className="flex flex-row absolute z-40 w-full flex-wrap justify-around px-2">
        {atozproj.map((el) => (
          <div key={el.title}>
            <li
              onClick={alphaclickHandler}
              className={` ${
                alphabet === el.title
                  ? "border-b-2 border-black dark:border-white"
                  : ""
              } z-30 backdrop-blur cursor-pointer h-8 w-8 flex justify-center items-center`}
            >
              {el.title}
            </li>
          </div>
        ))}
      </div>

      <div
        id="alphaProj"
        className="flex p-4 text-center flex-col justify-center -translate-y-16 lg:translate-y-0 lg:-translate-x-1/3 items-center h-full w-full uppercase font-semibold text-3xl lg:text-7xl lg:max-w-lg m-auto"
      >
        {atozproj[_.findIndex(atozproj, (i) => i.title === alphabet)].proj}
        <span className="text-xs leading-4 tracking-wider py-4 text-sky-700 dark:text-indigo-300">
          <Tl>
            We are well versed in creating the description of a new facility by
            representing it in detailed plans and specifications, including
            construction planning and the allocation of resources required to
            make the design a physical reality.
          </Tl>
        </span>
      </div>

      <span className="text-lg fixed bottom-4 flex justify-center flex-col lg:bottom-8 right-1/2 translate-x-1/2">
        <BsMouse id="mouseIcon" className="m-auto" />
        <span className="text-xs lg:text-sm uppercase tracking-wider opacity-50">
          Scroll
        </span>
      </span>
      <div className="w-1/2 scale-75 lg:w-1/3 fixed z-10 bottom-16 lg:bottom-1/2 -translate-y-1/4 lg:translate-y-1/4 right-0">
        <img id="introImg" src="./img/atz.png" alt="" />
      </div>
      <div className="w-1/2 scale-75 lg:w-1/3 fixed z-0 bottom-16 lg:bottom-1/2  lg:translate-y-full right-0">
        <h1 id="introText" className="lg:text-7xl text-2xl font-bold">
          <span className="lg:text-9xl text-5xl">
            <Tl>Design</Tl>
          </span>
          <br />
          <Tl>from A to Z</Tl>
        </h1>
      </div>
    </div>
  );
};

export default ServiceIntro;
