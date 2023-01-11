import dynamic from "next/dynamic";

// Ui - Components
// const Container = dynamic(() => import("@components/Container"));

// Layouts - Components]
import Navbar from "@layouts/Navbar";

const Layouts = ({ children }) => {
  return (
    <>
      {/* Main (App) */}
      {children}
    </>
  );
};

export default Layouts;
