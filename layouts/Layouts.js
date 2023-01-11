import dynamic from "next/dynamic";

// Ui - Components
const Main = dynamic(() => import("@components/Main"));

// Ui - Components

// Layouts - Components]
const Footer = dynamic(() => import("@layouts/Footer"));
import Navbar from "@layouts/Navbar";

const Layouts = ({ children }) => {
  return (
    <>
      {/* Main (App) */}
      <Main>{children}</Main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layouts;
