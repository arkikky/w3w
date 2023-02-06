import React from "react";
import { Element } from "react-scroll";
import dynamic from "next/dynamic";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));
const SubHeading = dynamic(() => import("@components/UI/SubHeading"));

const LySponsor = () => {
  return (
    <>
      <Element
        id="sponsor"
        name="sponsor"
        className="flex flex-col relative mt-20 sm:mt-24 lg:mt-32 px-0 sm:px-4"
      >
        <SubHeading
          className="flex flex-row items-center justify-between mb-15"
          title="Sponsor"
        >
          <Buttons
            typeBtn="btn-blank-link"
            className="text-xs lg:text-sm -mt-1.5 sm:my-auto py-2 sm:py-3 lg:py-3 px-3 sm:px-6 lg:px-6"
            url="https://e7bao9msf39.typeform.com/to/c1WBrXM7"
            label="Become Sponsor"
            variants="btn-primary"
            text="uppercase"
          />
        </SubHeading>
        <div className="supports-grid:grid grid-cols-12 gap-y-15">
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 hidden sm:flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 hidden sm:flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 hidden sm:flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
          <div className="col-span-6 sm:col-span-3 xl:col-span-3 hidden sm:flex items-center justify-center blur-lg px-4">
            <span className="bg-[#5A5A5A] flex h-12 w-[176px]"></span>
          </div>
        </div>
      </Element>
    </>
  );
};

export default LySponsor;
