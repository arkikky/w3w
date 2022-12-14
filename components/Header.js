import Image from "next/legacy/image";

// Css
import Headr from "../styles/components/Header.module.css";

// Ui
import ButtonsLink from "../components/ui/buttons/ButtonsLink";

export default function Header() {
  return (
    <>
      <header id="header" className={Headr.header}>
        <div className="container relative mt-[125px] sm:mt-[149px] mb-28 px-4">
          <section className="relative">
            <div className="flex flex-col w-full max-w-[597px] xl:max-w-[661px] 2xl:max-w-[782px]">
              <h1 className="text-white font-w3w-bold text-[32px] sm:text-[66px] 2xl:text-[88px] leading-[44px] sm:leading-[89px] 2xl:leading-[111px] tracking-[2px] lg:tracking-[4px]">
                HACK YOUR WAY INTO WEB3
              </h1>
              <p className="text-white/70 font-mono text-sm sm:text-lg lg:text-xl font-normal mt-2 w-full max-w-[289px] sm:max-w-[371px] xl:max-w-[527px] 2xl:max-w-[561px]">
                PARTICIPATE IN BUILDING THE FUTURE OF WEB3 FOR 3 WEEKS IN 3
                COUNTRIES; <span className="text-primary">INDONESIA</span>,{" "}
                <span className="text-primary">THAILAND</span>,{" "}
                <span className="text-primary">VIETNAM</span>
              </p>
              <ButtonsLink
                typeLink="link-blank"
                className=" text-sm sm:text-base mt-6 py-4 sm:py-6 px-4 sm:px-6"
                url="https://e7bao9msf39.typeform.com/web3week"
                label="Start building now"
                variant="btn-primary"
                position="left"
              ></ButtonsLink>
            </div>
            <div className="mt-11">
              <h4 className="text-white/30 font-mono text-base sm:text-xl font-normal uppercase">
                HEADQUARTERS SPONSORS.
              </h4>
              <div className="bg-[#3D3D3D] grid grid-cols-2 sm:grid-cols-4 gap-0 mt-4">
                <div className="flex flex-row items-center justify-center grayscale relative px-2 h-18 lg:h-[104px]">
                  <div className="block relative h-7 lg:h-10 w-[70px] lg:w-[104px]">
                    <Image
                      src="/assets/images/sponsor/intel.svg"
                      alt="W3W (Head Sponsor)"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center grayscale relative px-2 h-18 lg:h-[104px]">
                  <div className="block relative h-[26px] lg:h-[42px] w-[143px] lg:w-[241px]">
                    <Image
                      src="/assets/images/sponsor/bnbchain.svg"
                      alt="W3W (Head Sponsor)"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center grayscale relative px-2 h-18 lg:h-[104px]">
                  <div className="block relative h-11 lg:h-[55px] w-[142px] lg:w-[181px]">
                    <Image
                      src="/assets/images/sponsor/ethereum.svg"
                      alt="W3W (Head Sponsor)"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center grayscale relative px-2 h-18 lg:h-[104px]">
                  <div className="block relative h-10 lg:h-[50px] w-[65px] lg:w-[83px]">
                    <Image
                      src="/assets/images/sponsor/aws.svg"
                      alt="W3W (Head Sponsor)"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className={Headr.headerImgsItems}>
            <div className="block relative h-full w-full">
              <Image
                alt="W3W (Header)"
                src="/assets/images/wp-header-w-glow.png"
                layout="fill"
                objectFit="cover"
                quality="70"
                priority
              />
            </div>
          </div>
          <div className={Headr.headerImgs}>
            <div className="block relative h-full w-full">
              <Image
                alt="W3W (Header)"
                src="/assets/images/wp-header-w.png"
                layout="fill"
                objectFit="cover"
                quality="70"
                priority
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
