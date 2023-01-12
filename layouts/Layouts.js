import dynamic from "next/dynamic";

// Css
import Backdrop from "@styles/components/Backdrop.module.css";

// Ui - Components
const Main = dynamic(() => import("@components/Main"));

// Layouts - Components]
const Container = dynamic(() => import("@components/Container"));
const Footer = dynamic(() => import("@layouts/Footer"));
import Navbar from "@layouts/Navbar";

const Layouts = ({ children }) => {
  return (
    <>
      {/* Backdrop (Gridlines) */}
      <Container className="fixed inset-y-0 inset-x-0 -z-px">
        <section
          className={`${Backdrop.backdrpGrdlne} supports-grid:grid grid-cols-2 sm:grid-cols-4`}
        >
          <div className={`${Backdrop.backdrpGrdlneItms}`}></div>
          <div className={`hidden sm:flex ${Backdrop.backdrpGrdlneItms}`}></div>
          <div className={`hidden sm:flex ${Backdrop.backdrpGrdlneItms}`}></div>
          <div className={`${Backdrop.backdrpGrdlneItms}`}></div>
        </section>
      </Container>

      {/* Main (App) */}
      <Main>{children}</Main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layouts;
