import dynamic from "next/dynamic";

// Css
import Headr from "@styles/layouts/Header.module.css";

// Ui - Components
const Container = dynamic(() => import("@components/Container"));
const Buttons = dynamic(() => import("@components/UI/Buttons/Buttons"));
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));

export default function Header() {
  return (
    <>
      <header id="about" className={`${Headr.header}`}>
        <Container className="mt-[125px] sm:mt-[149px] mb-28 px-4">
          <section className="relative">
            <div className="flex flex-col w-full max-w-[597px] xl:max-w-[661px] 2xl:max-w-[782px]">
              <h1 className="text-white font-w3w-bold text-[32px] sm:text-[66px] 2xl:text-[88px] leading-[44px] sm:leading-[89px] 2xl:leading-[111px] tracking-[2px] lg:tracking-[4px]">
                HACK YOUR WAY INTO WEB3
              </h1>
              <p className="text-white/70 font-mono text-sm sm:text-lg lg:text-xl font-normal mt-2 w-full max-w-[289px] sm:max-w-[371px] xl:max-w-[527px] 2xl:max-w-[561px]">
                PARTICIPATE IN BUILDING THE FUTURE OF WEB3 FOR 3 WEEKS IN 3
                CITIES; <span className="text-primary">INDONESIA</span>,{" "}
                <span className="text-primary">THAILAND</span>,{" "}
                <span className="text-primary">VIETNAM</span>
              </p>
              <div className="mr-auto w-max">
                <Buttons
                  typeBtn="btn-blank-link"
                  className="text-sm sm:text-base mt-6 py-4 sm:py-6 px-4 sm:px-6"
                  label="Start building now"
                  variants="btn-primary"
                  size="lg"
                  text="uppercase"
                  url={"https://e7bao9msf39.typeform.com/web3week"}
                />
              </div>
            </div>
          </section>
          <div className={`${Headr.headerImgsItems}`}>
            <ImagesFill
              className="block relative h-full w-full"
              src={"/assets/images/w-glow.png"}
              alt="W3W (Header)"
              priority={true}
            />
          </div>
          <div className={`${Headr.headerImgs}`}>
            <ImagesFill
              className="block relative h-full w-full"
              src={"/assets/images/w.png"}
              alt="W3W (Header)"
              priority={true}
            />
          </div>
        </Container>
      </header>
    </>
  );
}
