import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footr mt-10 sm:mt-18 lg:mt-28">
        <div className="container px-4">
          <div className="footr-end bg-gray-800 flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 sm:py-4 px-6 sm:px-8">
            <div className="relative h-8 w-[102px]">
              <Image
                alt="W3W (LOGO)"
                src="/assets/images/w3w_logo.svg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="label text-white font-space-mono text-sm font-normal text-left lg:text-center uppercase mt-4 lg:mt-0 w-full lg:max-w-[486px] 2xl:max-w-max">
              All rights reserved. WEB3 weekend is organized by Coinvestasi, a
              subsidiary of Indonesia Crypto Network.
            </p>
            <span className="text-white font-space-mono text-sm font-normal mt-4 lg:mt-0">
              ©2023
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
