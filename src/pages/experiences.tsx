import React, { useEffect } from "react";
import Eachexp from "../components/eachexp";
import ExpIntro from "../components/expIntro";

interface Props {}

const Experience = (props: Props) => {
  useEffect(() => {});
  return (
    <div className="w-full h-full">
      <ExpIntro />
      {/* <Eachexp title="h" themeColor="from-red-500" />
      <Eachexp title="h" themeColor="from-red-500" />
      <Eachexp title="h" themeColor="from-red-500" /> */}
    </div>
  );
};

export default Experience;
