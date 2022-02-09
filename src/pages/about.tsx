/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/images/logo.svg";
import Tl from "../utils/translate";

interface Props {}

const About = (props: Props) => {
  return (
    <div className="w-full h-full lg:max-w-4xl m-auto p-4 lg:p-0">
      <div className="flex flex-col items-center uppercase text-center leading-8 justify-center font-semibold">
        <h1 className=" tracking-widest text-4xl ">
          <Tl>Who we are</Tl>
        </h1>
        <span className=" lg:text-lg text-indigo-600 dark:text-yellow-300 font-thin tracking-wider">
          <Tl>Established in 2012</Tl>
        </span>
        <span className="text-xs lg:text-sm">
          {" "}
          <Tl>
            Specialize in organizing and developing entertainment, conferences,
            exhibitions and more
          </Tl>
        </span>
      </div>
      <div className="flex flex-row items-center justify-evenly py-8 ">
        <div className="flex-1 h-full relative flex justify-end">
          <Image src={Logo} width="300" height="300" alt="" />
        </div>
        <div className="flex-1">
          <span className="text-xs lg:leading-10 tracking-wider">
            <Tl>
              In 2017 alone, using our knowledge, creativity and experience, we
              were able to reach out to 40,000 people in the entertainment
              industry around Saudi Arabia. With our potential to organize all
              kinds of events in all fields, we planned to stretch the limit in
              public events and fortunately, we reached our target of 1.5
              million people by 2018
            </Tl>
          </span>
        </div>
      </div>
      <div>
        <div className="text-center uppercase">
          <Tl>
            We pride ourselves in being efficient partners of companies,
            agencies, government institutions, designers, producers, promoters
            and other parties in the events industry
          </Tl>
        </div>
        <div className="flex justify-center p-2">
          <Link passHref href="/services">
            <span className="bg-slate-400 shadow hover:brightness-105 cursor-pointer p-2 px-4 text-slate-100">
              <Tl>Services</Tl>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
