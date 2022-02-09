/* eslint-disable @next/next/no-img-element */
import { Disclosure } from "@headlessui/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { HiMenu, HiMoon, HiSun, HiX } from "react-icons/hi";
import Logo from "../assets/images/logo.svg";
import { Darkcontext } from "../context/darkMode";
import i18n from "../lang/i18n";
import Tl from "../utils/translate";
import { useTranslation } from "react-i18next";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter();
  const [isDark, setDark] = useContext(Darkcontext);
  const [lang, setLang] = useState(i18n.language);

  const navigation = [
    { name: t("Home"), href: "/", current: true },
    { name: t("Services"), href: "/services", current: false },
    { name: t("Experiences"), href: "/experiences", current: false },
    { name: t("About"), href: "/about", current: false },
    { name: t("Contact"), href: "/contact", current: false },
  ];

  const linkNavHandler: any = (href: string) => {
    for (let i = 0; i < navigation.length; i++) {
      if (router.pathname === href) {
        navigation[i].current = true;
      } else {
        navigation[i].current = false;
      }
    }
  };

  useEffect(() => {
    gsap.fromTo(
      "#navID",
      { opacity: 0, translateY: -40 },
      { opacity: 1, delay: 1, translateY: 0 }
    );
    gsap.fromTo(
      "#logoText",
      { opacity: 0, translateX: -10 },
      { opacity: 1, translateX: 0, delay: 1.5 }
    );
  }, []);

  const changeColorMode = (e: any) => {
    gsap.fromTo(
      e.currentTarget,
      { opacity: 0, rotate: -60, translateY: 10 },
      { opacity: 1, rotate: 0, translateY: 0 }
    );
    setDark!(!isDark);
    isDark
      ? sessionStorage.setItem("colorMode", "light")
      : sessionStorage.setItem("colorMode", "dark");
    isDark
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  };

  const changeLang = (e: any) => {
    gsap.fromTo(
      e.currentTarget,
      { opacity: 0, translateX: 10 },
      { opacity: 1, translateX: 0 }
    );
    if (i18n.language === "en-US") {
      i18n.changeLanguage("ar");
      setLang("ar");
    } else {
      i18n.changeLanguage("en-US");
      setLang("en-US");
    }
  };

  return (
    <Disclosure as="nav" id="navID" className="opacity-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div className="flex flex-col h-12 lg:hidden ">
                    <Image width={32} height={48} src={Logo} alt="" />
                    <span id="logoText" className="opacity-0">
                      <Tl>Final Touch</Tl>
                    </span>
                  </div>
                  <div className="hidden  h-12 lg:flex items-center">
                    <Image width={32} height={48} src={Logo} alt="" />
                    <span
                      id="logoText"
                      className="uppercase opacity-0 text-sm px-2 tracking-wider"
                    >
                      <Tl>Final Touch</Tl>
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex sm:ml-6 items-center">
                  <div className="flex z-30 space-x-4">
                    {navigation.map((item) => (
                      <span
                        key={item.name}
                        onClick={linkNavHandler(item.href)}
                        className={classNames(
                          item.current
                            ? "border border-gray-500 dark:border-slate-600"
                            : "text-gray-500 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 cursor-pointer text-sm font-medium transition ease-in-out"
                        )}
                      >
                        <Link
                          href={item.href}
                          passHref
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="p-1 flex items-center"
                  onClick={(e) => changeColorMode(e)}
                >
                  <span className="sr-only">Color Mode</span>
                  {isDark ? (
                    <HiMoon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiSun className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
                <button
                  type="button"
                  className="p-1 flex items-center"
                  onClick={(e) => changeLang(e)}
                >
                  <span className="sr-only">Language Mode</span>

                  <div className="flex justify-center items-center">
                    <span
                      className={`px-1 border-r-2 border-slate-900 dark:border-slate-200 ${
                        lang === "en-US" ? "opacity-100" : "opacity-50"
                      } font-semibold`}
                    >
                      EN
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span
                      className={`px-1 ${
                        lang === "ar" ? "opacity-100" : "opacity-50"
                      } font-semibold`}
                    >
                      AR
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden w-full">
            <div className="px-2 pt-2 w-full z-30 absolute pb-3 space-y-1 backdrop-blur">
              {navigation.map((item) => (
                <span
                  key={item.name}
                  className={classNames(
                    item.current
                      ? ""
                      : "text-slate-600 dark:text-slate-300 hover:text-white",
                    "block px-3 m-2 text-center py-2 rounded-md text-base font-medium"
                  )}
                >
                  <Disclosure.Button
                    as={Link}
                    href={item.href}
                    passHref
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </span>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
