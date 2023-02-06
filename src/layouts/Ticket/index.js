import React from "react";
import getConfig from "next/config";
import dynamic from "next/dynamic";

// Css
import Card from "@styles/components/Card.module.css";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));

const LyTicket = () => {
  return (
    <>
      <div id="" className="pt-24 sm:pt-28 pb-[88px]">
        <div className="flex flex-col items-center text-center px-6">
          <span className="text-primary font-fira-code text-base uppercase">
            Tickets
          </span>
          <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase mt-2">
            Join the builders!
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-x-6 mt-6">
          <div className="col-start-1 xl:col-start-2 col-span-full xl:col-span-10 px-0 sm:px-18 lg:px-0 xl:px-11">
            <div className="grid grid-cols-12 gap-y-6 gap-x-6">
              <div className="col-span-full lg:col-span-6">
                <div className="ticket ticketFree">
                  <div>
                    <div className="ticketHead pb-6 sm:pb-8 mb-6 sm:mb-8 relative">
                      <span className="text-primary font-fira-code text-base capitalize">
                        Community Meetup
                      </span>
                      <div className="flex flex-row items-end mt-4">
                        <h2 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase">
                          FREE
                        </h2>
                      </div>
                      <p className="text-white font-fira-code text-sm sm:text-base capitalize mt-3">
                        Register to enter WEB3Weekend community meetup in Bali
                        and Yogyakarta.
                      </p>
                    </div>
                    <div className="ticketContnt">
                      <ul className="ticketLst">
                        <li>
                          Gain access to product showcases, workshops, and
                          mentoring sessions with prominent Web3 experts
                        </li>
                        <li>
                          Participate directly in building and innovating Web3
                          with established Web3 builders
                        </li>
                        <li>food & beverage Coupons</li>
                        <li>
                          Meet & network with founders and Web3 leading
                          companies
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Buttons
                      typeBtn="btn-blank-link"
                      className="btn-block"
                      url=""
                      label="REGISTER HERE"
                      variants="btn-primary"
                      text="uppercase"
                      position="center"
                    />
                    <Buttons
                      typeBtn="btn-blank-link"
                      className="btn-link bg-transparent btn-block text-white/50 font-fira-code font-normal"
                      url=""
                      label="Learn more"
                      position="center"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-6">
                <div className="ticket">
                  <div>
                    <div className="ticketHead pb-6 sm:pb-8 mb-6 sm:mb-8 relative">
                      <span className="text-primary font-fira-code text-base capitalize">
                        Main Event
                      </span>
                      <div className="flex flex-row items-end mt-4">
                        <h2 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase">
                          $10
                        </h2>
                        <span className="text-white font-fira-code text-xs sm:text-base capitalize ml-0.5 mb-2">
                          /PAX
                        </span>
                      </div>
                      <p className="text-white font-fira-code text-sm sm:text-base capitalize mt-3">
                        Ticket pass to enter W3W main event in Jakarta
                      </p>
                    </div>
                    <div className="ticketContnt">
                      <ul className="ticketLst">
                        <li>
                          Gain access to product showcases, workshops, and
                          mentoring sessions with prominent Web3 experts
                        </li>
                        <li>
                          Participate directly in building and innovating Web3
                          with established Web3 builders
                        </li>
                        <li>food & beverage Coupons</li>
                        <li>
                          Meet & network with founders and Web3 leading
                          companies
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Buttons
                      typeBtn="btn-blank-link"
                      className="btn-block"
                      url=""
                      label="BUY NOW"
                      variants="btn-primary"
                      text="uppercase"
                      position="center"
                    />
                    <Buttons
                      typeBtn="btn-blank-link"
                      className="btn-link bg-transparent btn-block text-white/50 font-fira-code font-normal"
                      url=""
                      label="Learn more"
                      position="center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LyTicket;
