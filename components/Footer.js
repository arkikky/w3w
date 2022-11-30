import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container px-4">
          <div className="bg-gray-800 flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 sm:py-4 px-6 sm:px-8">
            <Image
              alt="W3W (LOGO)"
              src="/assets/images/w3w.svg"
              height={32}
              width={102}
            />
            <p className="label text-white font-fira-code text-sm font-normal text-left lg:text-center uppercase mt-4 lg:mt-0 w-full lg:max-w-[533px] 2xl:max-w-max">
              All rights reserved. WEB3 weekend is organized by Coinvestasi, a
              subsidiary of Indonesia Crypto Network.
            </p>
            <span className="text-white font-fira-code text-sm font-normal mt-4 lg:mt-0">
              ©2023
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
