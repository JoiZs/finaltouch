import React from "react";
import { Grid } from "@mui/material";
import Navbar from "./navbar";

interface Props {
  component: JSX.Element;
}

const Website = (props: Props) => {
  return (
    <div className="  text-slate-900 dark:text-slate-100  relative">
      <Grid container className="container m-auto">
        <Grid item xs={12} height={"12vh"} className="z-10">
          <Navbar />
        </Grid>
        <Grid item xs={12} height={"88vh"} className="2xl:px-8">
          {props.component}
        </Grid>
      </Grid>

      <div className="dark:bg-slate-900 bg-slate-200 w-screen h-screen fixed top-0 right-0 -z-50"></div>
    </div>
  );
};

export default Website;
