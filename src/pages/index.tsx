import type { NextPage } from "next";
import Homeslide from "../components/homeslide";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useContext, useEffect } from "react";
import gsap from "gsap";
import { Darkcontext } from "../context/darkMode";
import Tl from "../utils/translate";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [isDark, setDark] = useContext(Darkcontext);
  const eachhometitle = t("Entertainment Events Leisure Management").split("");
  const homeslide = [
    {
      title: "Vision",
      content:
        "We are confident in undertaking full project management of a project from design, to consultation and execution.",
      display: true,
    },
    {
      title: "Mission",
      content:
        "We are dedicated to providing the highest quality events and execute successful projects that not only set the best standards but also set the trend for the industry.",
      display: false,
    },
    {
      title: "Quality",
      content:
        "You can rely on our quality as we are professionals in the event management, planning and organizing with some of our senior management having years of experience in that specific field.",
      display: false,
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      "#titleHome",
      {
        opacity: 0,
        color: "red",
      },
      {
        opacity: 1,
        color: isDark ? "#7a8bb4" : "white",
        delay: (i) => i * 0.05,
      }
    );
    gsap.fromTo(
      "#bgMotionCircle1",
      { translateX: 0, translateY: -innerHeight / 2, scale: 0 },
      {
        translateX: innerWidth / 2,
        duration: 30,
        translateY: innerHeight,
        repeat: 999,
        scale: 2,
      }
    );
    gsap.fromTo(
      "#bgMotionCircle2",
      { translateX: -innerWidth, width: 40, height: 30, rotate: 60 },
      {
        width: 60,
        rotate: 0,
        height: 90,
        duration: 30,
        translateX: innerWidth,
        repeat: 999,
      }
    );
  });

  return (
    <div className="w-full h-full relative">
      <div className=" absolute w-full lg:max-w-2xl px-4 z-0 top-1/2 pb-10 right-1/2 translate-x-1/2 lg:translate-x-1/3 -translate-y-1/2 font-semibold">
        <p className="text-purple-800 dark:text-gray-300 uppercase">
          <Tl>Event Company (formal, public or private)</Tl>
        </p>
        <h1 className="text-4xl border-l-4 dark:border-slate-600 capitalize lg:text-6xl tracking-widest">
          {" "}
          {eachhometitle.map((el) => (
            <span
              id="titleHome"
              className="text-slate-900 dark:text-slate-100"
              key={el + Math.random()}
            >
              {el}
            </span>
          ))}
        </h1>
        <div>
          {homeslide.map((el) => (
            <div id="homeslide" key={el.title} className=" w-full">
              <Homeslide tite={el.title} content={el.content} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute backdrop-blur-md z-10 left-1/2 space-x-2 -translate-x-1/2 lg:translate-x-0 lg:left-0 bottom-3 lg:bottom-8 flex flex-row">
        <Link passHref href="https://www.instagram.com/finaltouchsa/?hl=en">
          <FaInstagram className="hover:scale-110 cursor-pointer" />
        </Link>
        <Link passHref href="">
          <FaTwitter className="hover:scale-110 cursor-pointer" />
        </Link>
        <span className="text-xs tracking-widest">finaltouchsa</span>
      </div>
      <div
        id="bgMotionCircle1"
        className="fixed -z-10 left-0 blur-3xl opacity-50"
      >
        <div className="w-64 h-96 bg-red-300 dark:bg-gray-700 rounded-full"></div>
      </div>
      <div
        id="bgMotionCircle2"
        className="fixed -z-10 right-0 blur-3xl opacity-50"
      >
        <div className="w-96 h-96 bg-indigo-300 dark:bg-purple-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Home;
