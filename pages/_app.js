import dynamic from "next/dynamic";
import "../styles/globals.css";

// Layouts - Components
const Layouts = dynamic(() => import("@layouts/Layouts"));

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Main (App) */}
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}
