import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdLocationCity, MdMailOutline, MdPhone } from "react-icons/md";
import Logo from "../assets/images/logo.svg";
import Tl from "../utils/translate";

interface Props {}

const Contactus = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      "#getintouch",
      { opacity: 0, translateY: 10 },
      { opacity: 1, translateY: 0 }
    );
    gsap.fromTo(
      "#contactList",
      { opacity: 0, translateY: -10 },
      { opacity: 1, delay: (i) => i * 0.5, translateY: 0 }
    );
  });
  return (
    <div className="h-full w-full relative">
      <h1
        id="getintouch"
        className="lg:max-w-6xl m-auto uppercase text-center text-xl lg:text-4xl tracking-wider pt-16"
      >
        <Tl>We Take Your Fun Seriously</Tl>
        <br />
        <span className="text-base text-indigo-600 dark:text-orange-300">
          <Tl>Get in touch now</Tl>
        </span>
      </h1>
      <div className="space-x-5 space-y-4 lg:space-y-0 opacity-80 list-none absolute top-1/2 translate-x-1/2 right-1/2 -translate-y-1/2 tracking-wider hover:brightness-110 uppercase  p-2 flex flex-col lg:flex-row text-center justify-center items-center">
        <li
          id="contactList"
          className="flex flex-col space-y-3 justify-center items-center"
        >
          <MdMailOutline className="text-3xl font-semibold" />
          <Tl>Email Us</Tl> <span className="text-xs">info@finaltouch.sa</span>
        </li>
        <li
          id="contactList"
          className="flex flex-col space-y-3 justify-center items-center"
        >
          <MdPhone className="text-3xl font-semibold" />
          <Tl>Call Us</Tl> <span className="text-xs">+966114545656</span>
        </li>
        <li
          id="contactList"
          className="flex flex-col space-y-3 justify-center items-center"
        >
          <MdLocationCity className="text-3xl font-semibold" />
          <Tl>Location</Tl>{" "}
          <span className="text-xs">
            <Tl>Riyadh, Saudi Arabia</Tl>
          </span>
        </li>
      </div>
      <div className="list-none w-full lg:w-fit justify-center flex items-center space-x-4 uppercase absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-3 bottom-6 lg:bottom-3 text-xs">
        <li className="hover:scale-105 cursor-pointer">
          <Link passHref href="/">
            <Image
              className="brightness-0 dark:brightness-200 dark:saturate-0"
              width={20}
              height={30}
              src={Logo}
              alt=""
            />
          </Link>
        </li>
        <li className="hover:scale-105 cursor-pointer">
          All right reserved 2022
        </li>
        <li className="hover:scale-105 cursor-pointer">Privacy</li>
        <li className="hover:scale-105 cursor-pointer">Security</li>
      </div>

      <div className="list-none lg:text-base flex items-center space-x-4 uppercase absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-3 bottom-3 lg:bottom-5 text-xs">
        <Link passHref href="https://www.instagram.com/finaltouchsa/?hl=en">
          <FaInstagram className="hover:scale-110 cursor-pointer" />
        </Link>
        <Link passHref href="">
          <FaTwitter className="hover:scale-110 cursor-pointer" />
        </Link>
        <span className="text-xs tracking-widest">finaltouchsa</span>
      </div>
    </div>
  );
};

export default Contactus;
