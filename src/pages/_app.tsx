import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../lang/i18n";
import Website from "../components/website";
import dynamic from "next/dynamic";

const DarkMode = dynamic(() => import("../context/darkMode"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkMode>
      <Website component={<Component {...pageProps} />} />
    </DarkMode>
  );
}

export default MyApp;
