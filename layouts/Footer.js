import { useState, React } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Ui - Components
const Container = dynamic(() => import("@components/Container"));

const Footer = () => {
  const gtToday = new Date();
  const gtDtaYears = gtToday.getFullYear();

  const [gtYears, stYears] = useState(gtDtaYears);

  return (
    <>
      {/* Footer */}
      <footer id="footrMain">
        <Container className="px-4">
          <div className="bg-gray-800 flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 sm:py-4 px-6 sm:px-8">
            <Image
              alt={`${process.env.NEXT_PUBLIC_APP_NAME} (LOGO)`}
              src={`${process.env.NEXT_PUBLIC_APP_LOGO}`}
              height={32}
              width={102}
            />
            <p className="label text-white font-fira-code text-sm font-normal text-left lg:text-center uppercase mt-4 lg:mt-0 w-full lg:max-w-[533px] 2xl:max-w-max">
              {`All rights reserved. WEB3 weekend is organized by Coinvestasi, a
              subsidiary of Indonesia Crypto Network.`}
            </p>
            <span className="text-white font-fira-code text-sm font-normal mt-4 lg:mt-0">
              ©{gtYears}
            </span>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
