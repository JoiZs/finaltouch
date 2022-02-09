import { Grid } from "@mui/material";
import gsap from "gsap";
import React, { useEffect } from "react";
import Tl from "../utils/translate";

interface Props {
  title: string;
  currentslide: number;
  cont: string;
  subcont: string;
}

const Serviceslide = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      "#titleServ",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7 }
    );
    gsap.fromTo("#subServ", { opacity: 0 }, { opacity: 0.6, delay: 0.5 });
  });
  return (
    <Grid container className="h-full w-full relative p-4 lg:p-0">
      <Grid item xs={12} height={"30%"} id="titleServ">
        <h1 className="uppercase relative lg:max-w-3xl lg:m-auto lg:text-6xl text-xl font-extrabold border-b border-slate-900 dark:border-slate-300 tracking-widest p-4 lg:p-2">
          {props.title}
          <p
            id="subServ"
            className="uppercase text-xs border-t my-2  opacity-0 text-indigo-800 dark:text-yellow-200 border-indigo-800 dark:border-yellow-200"
          >
            <Tl>{props.subcont}</Tl>
          </p>
        </h1>
      </Grid>
      <Grid item height={"30%"} xs={12}>
        <p className="lg:max-w-xl lg:border-l border-slate-900 dark:border-slate-300 bg-gradient-to-r from-slate-300 opacity-60 dark:from-slate-700 h-full flex items-center p-2 lg:ml-auto lg:leading-10 text-justify ">
          {props.cont}
        </p>
      </Grid>
      <Grid item xs={12}>
        {/* <p
          id="subServ"
          className="uppercase text-xs border-t  opacity-0 text-indigo-800 dark:text-yellow-200 border-indigo-800 dark:border-yellow-200"
        >
          <Tl>{props.subcont}</Tl>
        </p> */}
      </Grid>
    </Grid>
  );
};

export default Serviceslide;
