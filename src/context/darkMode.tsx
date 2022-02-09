import React, { createContext, useEffect, useState } from "react";

export const Darkcontext = createContext<
  [
    boolean | undefined,
    React.Dispatch<React.SetStateAction<boolean>> | undefined
  ]
>([undefined, undefined]);

const DarkMode = (props: any) => {
  let darkValue = sessionStorage.getItem("colorMode");
  const [isDark, setDark] = useState(
    !!darkValue ? darkValue === "dark" : false
  );

  useEffect(() => {
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);
  return (
    <Darkcontext.Provider value={[isDark, setDark]}>
      {props.children}
    </Darkcontext.Provider>
  );
};

export default DarkMode;
