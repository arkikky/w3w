import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>W3W | Builders Convention Focused on Web3</title>
        <meta name="title" content="Builders Convention Focused on Web3" />
        <meta
          name="description"
          content="Builders Convention Focused on Web3"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      <main className="bg-black-100 relative pb-4 sm:pb-6">
        {/* Backdrop (Gridlines) */}
        <div className="container absolute inset-y-0 inset-x-0 z-0.5">
          <section className="backdrp-grdlne grid grid-cols-2 sm:grid-cols-4 z-px">
            <div className="backdrp-grdlne-itms"></div>
            <div className="backdrp-grdlne-itms last-mble"></div>
            <div className="hidden sm:flex backdrp-grdlne-itms"></div>
            <div className="hidden sm:flex backdrp-grdlne-itms"></div>
          </section>
        </div>

        {/* Backdrop (Beams) */}
        <div className="absolute inset-y-0 inset-x-0 overflow-hidden select-none pointer-events-none z-0.5">
          <div className="container relative">
            <div className="backdrp-beams lft">
              <img
                src="/assets/images/backdrop/backdrop-beams-left.webp"
                alt="W3W (Backdrop Beams - Left)"
              />
            </div>
            <div className="backdrp-beams rght">
              <img
                src="/assets/images/backdrop/backdrop-beams-right.webp"
                alt="W3W (Backdrop Beams - Right)"
              />
            </div>
          </div>
        </div>

        {/* Sticky Textline */}
        <div className="fixed inset-y-0 inset-x-0 select-none pointer-events-none z-[60]">
          <div className="container h-full min-h-screen relative">
            <section className="stcky-txtline flex flex-row gap-x-4 sm:gap-x-6 font-space-mono uppercase">
              <ul className="stcky-txtline-group whitespace-nowrap">
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  Jakarta
                </li>
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  Bangkok
                </li>
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  HO CHI MINH CITY
                </li>
              </ul>
              <ul className="stcky-txtline-group whitespace-nowrap">
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  Jakarta
                </li>
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  Bangkok
                </li>
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  HO CHI MINH CITY
                </li>
              </ul>
              <ul className="stcky-txtline-group whitespace-nowrap">
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  Jakarta
                </li>
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  Bangkok
                </li>
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  HO CHI MINH CITY
                </li>
              </ul>
              <ul className="stcky-txtline-group whitespace-nowrap">
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  Jakarta
                </li>
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  Bangkok
                </li>
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  HO CHI MINH CITY
                </li>
              </ul>
              <ul className="stcky-txtline-group whitespace-nowrap">
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  Jakarta
                </li>
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  Bangkok
                </li>
                <li className="items text-[10px] sm:text-xs lg:text-base">
                  HO CHI MINH CITY
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className="overflow-hidden relative z-50">
          {/* Header */}
          <header className="headr pt-[141px] pb-11 sm:pb-16 lg:pb-24">
            <div className="container px-0 sm:px-auto">
              <div className="flex flex-col xl:flex-row px-4 relative">
                <div className="">
                  <div>
                    <div className="flex flex-row">
                      <h1 className="text-white font-w3w-bold text-[40px] sm:text-[72px] lg:text-[96px] xl:text-[80px] 2xl:text-[104px] font-bold leading-tight tracking-[3px] sm:tracking-[16px] uppercase">
                        WEB<span className="text-primary">3</span>
                      </h1>
                      <div className="text-primary font-space-mono leading-normal sm:leading-6 text-sm italic uppercase md:text-lg lg:text-xl -mt-[3px] sm:mt-0 pt-0 sm:pt-1.5 lg:pt-4 xl:pt-[11px] 2xl:pt-[21px] pr-0 lg:pr-24 xl:pr-0 pl-2 pb-3">
                        accelerating the adoption of Web 3{" "}
                        <span className="hidden md:inline-block">
                          development
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row mt-0 sm:-mt-3">
                      <h1 className="text-otlne text-otlne-white font-w3w-bold text-[40px] sm:text-[72px] lg:text-[96px] xl:text-[80px] 2xl:text-[104px] font-bold leading-tight tracking-[7px] sm:tracking-[21px] 2xl:tracking-[8px] uppercase">
                        WEEKEND.
                      </h1>
                    </div>
                    <p className="text-gray-500 font-space-mono text-sm lg:text-base font-normal leading-7 lg:leading-8 uppercase">
                      <span className="text-primary">
                        Join the largest Web3 builder
                      </span>{" "}
                      focused event in Southeast asia.{" "}
                      <span className="text-primary">Participate</span> in the
                      event by showcasing your innovation and advance solutions
                      to layer 1, tech solution providers, and business
                      founders.
                    </p>
                  </div>
                </div>
                <div className="flex mt-0 lg:mt-16 xl:mt-0 w-full">
                  <div className="scene scale-75 lg:scale-100 flex items-center justify-center ">
                    <div className="scene-sphere">
                      <span>0</span>
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span>10</span>
                      <span>11</span>
                      <span>12</span>
                      <span>13</span>
                      <span>14</span>
                      <span>15</span>
                      <span>16</span>
                      <span>17</span>
                      <span>18</span>
                      <span>19</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* About */}
          <div id="about" className="container px-0 sm:px-auto">
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:gap-y-8 xl:gap-y-0 relative pb-10 lg:pb-[120px]">
              <div className="col-span-full xl:col-span-2 order-last xl:order-none relative px-4">
                <div className="-ml-11 -mr-8 sm:mx-0">
                  <img
                    className="ml-0 h-[597px] sm:h-full max-h-[597px] sm:max-h-full w-[495px] sm:w-full max-w-[495px] sm:max-w-full"
                    src="/assets/images/wp-ranglobal.svg"
                    alt="W3W (Ran Global)"
                  />
                </div>
              </div>
              <div className="col-span-full xl:col-span-2 flex flex-col justify-center relative px-4">
                <div className="relative">
                  <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase pr-4 2xl:pr-14">
                    Ran by global web3 experts
                  </h1>
                  <p className="text-gray-500 font-space-mono text-sm lg:text-base font-normal leading-7 lg:leading-8 uppercase mt-1.5">
                    Hosted by web3 natives for web3 new natives. Specialising in
                    Dapps, DeFi, GameFi, NFT, Metaverse, and web3
                    infrastructure.
                  </p>
                  <div className="grid grid-cols-12 pr-0 lg:pr-32 xl:pr-0">
                    <div className="col-span-full sm:col-span-6 py-5 pr-5">
                      <div className="bg-[#303030] flex items-center justify-center rounded-full overflow-hidden h-10 w-min min-w-[40px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.615 1.59486C14.7614 1.67635 14.8763 1.80454 14.9413 1.95896C15.0064 2.11338 15.0179 2.28515 14.974 2.44686L12.982 9.74986H20.25C20.3961 9.74987 20.5391 9.79258 20.6613 9.87276C20.7835 9.95293 20.8796 10.0671 20.9378 10.2011C20.9961 10.3352 21.0138 10.4834 20.989 10.6274C20.9641 10.7714 20.8977 10.9051 20.798 11.0119L10.298 22.2619C10.1836 22.3847 10.0313 22.4656 9.86558 22.4916C9.69981 22.5177 9.53009 22.4874 9.38357 22.4056C9.23704 22.3238 9.12218 22.1952 9.05735 22.0405C8.99252 21.8857 8.98146 21.7137 9.02595 21.5519L11.018 14.2499H3.74995C3.60379 14.2498 3.46082 14.2071 3.33861 14.127C3.2164 14.0468 3.12028 13.9327 3.06206 13.7986C3.00384 13.6645 2.98607 13.5164 3.01092 13.3723C3.03578 13.2283 3.10217 13.0947 3.20195 12.9879L13.702 1.73786C13.8163 1.6155 13.9683 1.53495 14.1338 1.50903C14.2993 1.48312 14.4687 1.51333 14.615 1.59486Z"
                            fill="#12E582"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col mt-4">
                        <h4 className="text-white font-space-mono text-sm font-medium uppercase pr-6">
                          Rapid showcase
                        </h4>
                        <p className="text-gray-500 font-space-mono text-sm font-medium uppercase mt-2">
                          Get the latest updates and features from your favorite
                          chain
                        </p>
                      </div>
                    </div>
                    <div className="col-span-full sm:col-span-6 py-5 pr-5">
                      <div className="bg-[#303030] flex items-center justify-center rounded-full overflow-hidden h-10 w-min min-w-[40px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6999 2.8048C11.7946 2.7635 11.8967 2.74219 11.9999 2.74219C12.1032 2.74219 12.2053 2.7635 12.2999 2.8048C15.998 4.4212 19.5255 6.40269 22.8299 8.7198C22.9464 8.80147 23.0372 8.91456 23.0918 9.0459C23.1464 9.17723 23.1626 9.32139 23.1384 9.46154C23.1141 9.6017 23.0506 9.73209 22.9551 9.83748C22.8596 9.94288 22.736 10.0189 22.5989 10.0568C19.1683 11.0043 15.8488 12.3157 12.6969 13.9688L12.6939 13.9708L12.3539 14.1508C12.2452 14.2089 12.1238 14.2393 12.0004 14.2393C11.8771 14.2393 11.7557 14.2089 11.6469 14.1508C10.2956 13.4286 8.91183 12.7689 7.49994 12.1738V11.9498C7.49994 11.8188 7.56694 11.7018 7.67194 11.6388C9.18131 10.7241 10.7341 9.88313 12.3249 9.1188C12.5042 9.03261 12.6419 8.87872 12.7078 8.691C12.7736 8.50327 12.7621 8.29709 12.6759 8.1178C12.5897 7.93851 12.4359 7.80081 12.2481 7.73499C12.0604 7.66916 11.8542 7.68061 11.6749 7.7668C10.0407 8.55209 8.44552 9.4161 6.89494 10.3558C6.67434 10.4896 6.48403 10.6679 6.33614 10.8794C6.18824 11.0908 6.08601 11.3307 6.03594 11.5838C4.51715 10.9994 2.97063 10.4898 1.40194 10.0568C1.26483 10.0189 1.14132 9.94288 1.04581 9.83748C0.9503 9.73209 0.886728 9.6017 0.862512 9.46154C0.838297 9.32139 0.854435 9.17723 0.909045 9.0459C0.963655 8.91456 1.05449 8.80147 1.17094 8.7198C4.47509 6.40277 8.00223 4.42128 11.6999 2.8048Z"
                            fill="#12E582"
                          />
                          <path
                            d="M6.01953 11.5975L6.02257 11.6013L7.25817 12.0877L7.4894 12.1883V11.9662C7.4894 11.8347 7.55668 11.7172 7.66212 11.6539C9.17778 10.7354 10.7371 9.89093 12.3345 9.12342C12.5146 9.03687 12.6528 8.88234 12.7189 8.69383C12.785 8.50532 12.7735 8.29828 12.687 8.11825C12.6004 7.93821 12.4459 7.79994 12.2574 7.73384C12.0689 7.66774 11.8618 7.67923 11.6818 7.76578C10.0408 8.55435 8.43892 9.42196 6.88187 10.3656C6.66036 10.5 6.46925 10.679 6.32074 10.8913C6.17247 11.1033 6.06989 11.3438 6.01953 11.5975Z"
                            fill="#0C9C58"
                          />
                          <path
                            d="M13.0607 15.4725C15.517 14.1602 18.0818 13.0621 20.7267 12.1905C20.8607 13.6045 20.9467 15.0335 20.9817 16.4755C20.9854 16.6263 20.9435 16.7748 20.8614 16.9015C20.7793 17.0282 20.661 17.1271 20.5217 17.1855C17.687 18.3694 14.9729 19.8234 12.4167 21.5275C12.2935 21.6096 12.1488 21.6534 12.0007 21.6534C11.8527 21.6534 11.7079 21.6096 11.5847 21.5275C9.02895 19.8235 6.31511 18.3695 3.48074 17.1855C3.34134 17.1273 3.22275 17.0284 3.1405 16.9017C3.05824 16.775 3.01615 16.6265 3.01974 16.4755C3.05474 15.0335 3.14074 13.6055 3.27474 12.1895C4.1931 12.4921 5.10217 12.8223 6.00074 13.1795V14.4495C5.78468 14.5739 5.60306 14.7503 5.47231 14.9627C5.34156 15.175 5.26581 15.4166 5.25191 15.6656C5.23801 15.9145 5.28641 16.163 5.39271 16.3886C5.49901 16.6142 5.65987 16.8097 5.86074 16.9575C5.77074 17.3375 5.63874 17.7105 5.46374 18.0675C5.91574 18.2805 6.36474 18.5015 6.80974 18.7285C7.06064 18.2179 7.24579 17.6776 7.36074 17.1205C7.61363 17.008 7.83048 16.8278 7.98729 16.5998C8.14411 16.3717 8.23478 16.1047 8.24927 15.8284C8.26376 15.552 8.20151 15.277 8.0694 15.0338C7.93729 14.7906 7.74048 14.5887 7.50074 14.4505V13.8055C8.66887 14.3161 9.81642 14.8725 10.9407 15.4735C11.2669 15.6477 11.631 15.7388 12.0007 15.7388C12.3705 15.7388 12.7346 15.6477 13.0607 15.4735V15.4725Z"
                            fill="#0C9C58"
                          />
                          <path
                            d="M7.5003 13.8007C7.16241 13.6659 6.60772 13.416 6.0003 13.1777V14.4452C5.78545 14.5702 5.60381 14.746 5.47295 14.9589C5.34209 15.1718 5.26592 15.412 5.25225 15.662C5.23858 15.9101 5.28741 16.1581 5.39288 16.3847C5.49834 16.6093 5.66045 16.8066 5.86163 16.9531C5.77178 17.3339 5.63897 17.707 5.46319 18.0644C6.05889 18.3788 6.49053 18.5898 6.80694 18.7226C6.70342 18.6698 6.59991 18.6191 6.49639 18.5663C6.60186 18.6191 6.67773 18.7402 6.78125 18.793C6.85742 18.6348 6.95703 18.457 7.02178 18.2441C7.16827 17.8808 7.28155 17.5019 7.36163 17.1171C7.61358 17.0038 7.83038 16.8241 7.98663 16.5956C8.14483 16.3671 8.23467 16.1015 8.2503 15.8241C8.26397 15.5488 8.20147 15.2734 8.07061 15.0292C7.9378 14.787 7.74053 14.5839 7.5003 14.4472V13.8007Z"
                            fill="#12E582"
                          />
                          <path
                            d="M4.46232 19.4624C4.88232 19.0434 5.21532 18.5724 5.46232 18.0684C5.91532 18.2814 6.36432 18.5024 6.80932 18.7294C6.4821 19.3939 6.04762 20.0001 5.52332 20.5234C5.45466 20.597 5.37186 20.6561 5.27986 20.6971C5.18786 20.7381 5.08854 20.7602 4.98784 20.7619C4.88714 20.7637 4.78711 20.7452 4.69372 20.7075C4.60033 20.6698 4.5155 20.6136 4.44428 20.5424C4.37306 20.4712 4.31692 20.3863 4.27919 20.293C4.24147 20.1996 4.22295 20.0995 4.22473 19.9988C4.2265 19.8981 4.24854 19.7988 4.28954 19.7068C4.33053 19.6148 4.38963 19.532 4.46332 19.4634L4.46232 19.4624Z"
                            fill="#12E582"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col mt-4">
                        <h4 className="text-white font-space-mono text-sm font-medium uppercase pr-6">
                          Speed Mentoring
                        </h4>
                        <p className="text-gray-500 font-space-mono text-sm font-medium uppercase mt-2">
                          Meet native Web3 engineers and builders to gain the
                          best solution for your problems
                        </p>
                      </div>
                    </div>
                    <div className="col-span-full sm:col-span-6 py-5 pr-5">
                      <div className="bg-[#303030] flex items-center justify-center rounded-full overflow-hidden h-10 w-min min-w-[40px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_399_188)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.6225 9.5C15.9413 9.5 15.359 9.99303 15.2468 10.6653L15.1791 11.0735C15.1603 11.176 15.1149 11.2717 15.0474 11.3511C14.98 11.4305 14.8928 11.4907 14.7946 11.5256C14.6745 11.5706 14.5559 11.6197 14.4392 11.6729C14.345 11.7176 14.2407 11.7368 14.1368 11.7285C14.0329 11.7201 13.933 11.6845 13.8473 11.6253L13.5104 11.3844C13.2418 11.1925 12.9138 11.1021 12.5848 11.1293C12.2558 11.1565 11.9472 11.2996 11.7138 11.5331L11.5331 11.7138C11.2996 11.9472 11.1565 12.2558 11.1293 12.5848C11.1021 12.9138 11.1925 13.2418 11.3844 13.5104L11.6253 13.8473C11.6845 13.933 11.7201 14.0329 11.7285 14.1368C11.7368 14.2407 11.7176 14.345 11.6729 14.4392C11.6197 14.5559 11.5706 14.6745 11.5256 14.7946C11.4907 14.8928 11.4305 14.98 11.3511 15.0474C11.2717 15.1149 11.176 15.1603 11.0735 15.1791L10.6645 15.2475C10.3391 15.3019 10.0435 15.4699 9.83033 15.7216C9.61711 15.9734 9.50006 16.2926 9.5 16.6225V16.8783C9.5 17.5594 9.99303 18.1417 10.6653 18.254L11.0735 18.3217C11.2825 18.3566 11.4513 18.5076 11.5256 18.7061C11.5703 18.8266 11.6201 18.9448 11.6729 19.0616C11.7176 19.1557 11.7368 19.26 11.7285 19.3639C11.7201 19.4678 11.6845 19.5677 11.6253 19.6535L11.3844 19.9904C11.1925 20.259 11.1021 20.5869 11.1293 20.9159C11.1565 21.2449 11.2996 21.5536 11.5331 21.787L11.7138 21.9677C12.1957 22.4495 12.9556 22.5127 13.5104 22.1164L13.8473 21.8755C13.933 21.8162 14.0329 21.7807 14.1368 21.7723C14.2407 21.7639 14.345 21.7831 14.4392 21.8279C14.5559 21.8807 14.6742 21.9297 14.7946 21.9751C14.9932 22.0495 15.1441 22.2183 15.1791 22.4272L15.2475 22.8362C15.359 23.5077 15.9406 24.0007 16.6225 24.0007H16.8783C17.5594 24.0007 18.1417 23.5077 18.254 22.8355L18.3217 22.4272C18.3404 22.3248 18.3858 22.229 18.4533 22.1497C18.5208 22.0703 18.608 22.0101 18.7061 21.9751C18.8263 21.9301 18.9448 21.881 19.0616 21.8279C19.1557 21.7831 19.26 21.7639 19.3639 21.7723C19.4678 21.7807 19.5677 21.8162 19.6535 21.8755L19.9904 22.1164C20.259 22.3083 20.5869 22.3987 20.9159 22.3714C21.2449 22.3442 21.5536 22.2011 21.787 21.9677L21.9677 21.787C22.4495 21.3051 22.5127 20.5451 22.1164 19.9904L21.8755 19.6535C21.8162 19.5677 21.7807 19.4678 21.7723 19.3639C21.7639 19.26 21.7831 19.1557 21.8279 19.0616C21.8807 18.9448 21.9297 18.8266 21.9751 18.7061C22.0495 18.5076 22.2183 18.3566 22.4272 18.3217L22.8362 18.254C23.1618 18.1996 23.4574 18.0315 23.6707 17.7796C23.8839 17.5277 24.0009 17.2083 24.0007 16.8783V16.6225C24.0007 15.9413 23.5077 15.359 22.8355 15.2468L22.4272 15.1791C22.3248 15.1603 22.229 15.1149 22.1497 15.0474C22.0703 14.98 22.0101 14.8928 21.9751 14.7946C21.9301 14.6745 21.881 14.5559 21.8279 14.4392C21.7831 14.345 21.7639 14.2407 21.7723 14.1368C21.7807 14.0329 21.8162 13.933 21.8755 13.8473L22.1164 13.5104C22.3083 13.2418 22.3987 12.9138 22.3714 12.5848C22.3442 12.2558 22.2011 11.9472 21.9677 11.7138L21.787 11.5331C21.5536 11.2996 21.2449 11.1565 20.9159 11.1293C20.5869 11.1021 20.259 11.1925 19.9904 11.3844L19.6535 11.6253C19.5677 11.6845 19.4678 11.7201 19.3639 11.7285C19.26 11.7368 19.1557 11.7176 19.0616 11.6729C18.9448 11.6197 18.8263 11.5706 18.7061 11.5256C18.608 11.4907 18.5208 11.4305 18.4533 11.3511C18.3858 11.2717 18.3404 11.176 18.3217 11.0735L18.254 10.6645C18.1996 10.339 18.0315 10.0433 17.7796 9.83009C17.5277 9.61685 17.2083 9.49989 16.8783 9.5H16.6225ZM16.7504 19.539C17.49 19.539 18.1993 19.2452 18.7222 18.7222C19.2452 18.1993 19.539 17.49 19.539 16.7504C19.539 16.0108 19.2452 15.3015 18.7222 14.7785C18.1993 14.2556 17.49 13.9618 16.7504 13.9618C16.0108 13.9618 15.3015 14.2556 14.7785 14.7785C14.2556 15.3015 13.9618 16.0108 13.9618 16.7504C13.9618 17.49 14.2556 18.1993 14.7785 18.7222C15.3015 19.2452 16.0108 19.539 16.7504 19.539Z"
                              fill="#0C9C58"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.78855 9.93317e-08C7.94805 9.93317e-08 7.22959 0.608354 7.09103 1.43784L7.00753 1.94159C6.98439 2.06804 6.92837 2.18617 6.84509 2.2841C6.76182 2.38203 6.65423 2.45631 6.53315 2.49948C6.38489 2.55494 6.2386 2.61554 6.09455 2.68116C5.97837 2.73639 5.8497 2.76004 5.72148 2.74973C5.59326 2.73942 5.47001 2.69552 5.36415 2.62243L4.94849 2.32514C4.61706 2.08835 4.21236 1.97683 3.80641 2.01043C3.40047 2.04404 3.01961 2.22059 2.73163 2.50866L2.50866 2.73163C2.22059 3.01961 2.04404 3.40047 2.01043 3.80641C1.97683 4.21236 2.08835 4.61706 2.32514 4.94849L2.62243 5.36415C2.69552 5.47001 2.73942 5.59326 2.74973 5.72148C2.76004 5.8497 2.73639 5.97837 2.68116 6.09455C2.61554 6.2386 2.55494 6.38489 2.49948 6.53315C2.45631 6.65423 2.38203 6.76182 2.2841 6.84509C2.18617 6.92837 2.06804 6.98439 1.94159 7.00753L1.43693 7.09195C1.03541 7.15904 0.67069 7.36633 0.407596 7.67696C0.144501 7.9876 7.88413e-05 8.38147 0 8.78855V9.1042C0 9.9447 0.608353 10.6632 1.43784 10.8017L1.94159 10.8852C2.19943 10.9283 2.40772 11.1146 2.49948 11.3596C2.55453 11.5082 2.61601 11.6541 2.68116 11.7982C2.73639 11.9144 2.76004 12.0431 2.74973 12.1713C2.73942 12.2995 2.69552 12.4227 2.62243 12.5286L2.32514 12.9443C2.08835 13.2757 1.97683 13.6804 2.01043 14.0863C2.04404 14.4923 2.22059 14.8731 2.50866 15.1611L2.73163 15.3841C3.32622 15.9787 4.26398 16.0567 4.94849 15.5676L5.36415 15.2703C5.47001 15.1972 5.59326 15.1533 5.72148 15.143C5.8497 15.1327 5.97837 15.1564 6.09455 15.2116C6.23861 15.2767 6.3845 15.3373 6.53315 15.3933C6.77814 15.485 6.96441 15.6933 7.00753 15.9512L7.09195 16.4558C7.22959 17.2844 7.94713 17.8927 8.78855 17.8927H9.1042C9.9447 17.8927 10.6632 17.2844 10.8017 16.4549L10.8852 15.9512C10.9084 15.8247 10.9644 15.7066 11.0477 15.6086C11.1309 15.5107 11.2385 15.4364 11.3596 15.3933C11.5078 15.3378 11.6541 15.2772 11.7982 15.2116C11.9144 15.1564 12.0431 15.1327 12.1713 15.143C12.2995 15.1533 12.4227 15.1972 12.5286 15.2703L12.9443 15.5676C13.2757 15.8044 13.6804 15.9159 14.0863 15.8823C14.4923 15.8487 14.8731 15.6722 15.1611 15.3841L15.3841 15.1611C15.9787 14.5665 16.0567 13.6288 15.5676 12.9443L15.2703 12.5286C15.1972 12.4227 15.1533 12.2995 15.143 12.1713C15.1327 12.0431 15.1564 11.9144 15.2116 11.7982C15.2767 11.6541 15.3373 11.5082 15.3933 11.3596C15.485 11.1146 15.6933 10.9283 15.9512 10.8852L16.4558 10.8017C16.8575 10.7346 17.2223 10.5272 17.4855 10.2164C17.7486 9.90552 17.8929 9.51144 17.8927 9.1042V8.78855C17.8927 7.94805 17.2844 7.22959 16.4549 7.09103L15.9512 7.00753C15.8247 6.98439 15.7066 6.92837 15.6086 6.84509C15.5107 6.76182 15.4364 6.65423 15.3933 6.53315C15.3378 6.3849 15.2772 6.23862 15.2116 6.09455C15.1564 5.97837 15.1327 5.8497 15.143 5.72148C15.1533 5.59326 15.1972 5.47001 15.2703 5.36415L15.5676 4.94849C15.8044 4.61706 15.9159 4.21236 15.8823 3.80641C15.8487 3.40047 15.6722 3.01961 15.3841 2.73163L15.1611 2.50866C14.8731 2.22059 14.4923 2.04404 14.0863 2.01043C13.6804 1.97683 13.2757 2.08835 12.9443 2.32514L12.5286 2.62243C12.4227 2.69552 12.2995 2.73942 12.1713 2.74973C12.0431 2.76004 11.9144 2.73639 11.7982 2.68116C11.6541 2.61555 11.5079 2.55495 11.3596 2.49948C11.2385 2.45631 11.1309 2.38203 11.0477 2.2841C10.9644 2.18617 10.9084 2.06804 10.8852 1.94159L10.8017 1.43693C10.7346 1.03525 10.5272 0.670412 10.2164 0.407299C9.90552 0.144186 9.51144 -0.00013822 9.1042 9.93317e-08H8.78855ZM8.94637 12.3873C9.85896 12.3873 10.7342 12.0248 11.3795 11.3795C12.0248 10.7342 12.3873 9.85896 12.3873 8.94637C12.3873 8.03379 12.0248 7.15858 11.3795 6.51328C10.7342 5.86799 9.85896 5.50546 8.94637 5.50546C8.03379 5.50546 7.15858 5.86799 6.51328 6.51328C5.86799 7.15858 5.50546 8.03379 5.50546 8.94637C5.50546 9.85896 5.86799 10.7342 6.51328 11.3795C7.15858 12.0248 8.03379 12.3873 8.94637 12.3873Z"
                              fill="#12E582"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_399_188">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="flex flex-col mt-4">
                        <h4 className="text-white font-space-mono text-sm font-medium uppercase pr-6">
                          workshop
                        </h4>
                        <p className="text-gray-500 font-space-mono text-sm font-medium uppercase mt-2">
                          Gain insights and learn how to build from A to Z with
                          Web3 experts
                        </p>
                      </div>
                    </div>
                    <div className="col-span-full sm:col-span-6 py-5 pr-5">
                      <div className="bg-[#303030] flex items-center justify-center rounded-full overflow-hidden h-10 w-min min-w-[40px]">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 6C13 6.79565 12.6839 7.55871 12.1213 8.12132C11.5587 8.68393 10.7956 9 10 9C9.20435 9 8.44129 8.68393 7.87868 8.12132C7.31607 7.55871 7 6.79565 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.44129 3.31607 9.20435 3 10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6ZM14 15C14 13.9391 13.5786 12.9217 12.8284 12.1716C12.0783 11.4214 11.0609 11 10 11C8.93913 11 7.92172 11.4214 7.17157 12.1716C6.42143 12.9217 6 13.9391 6 15V18H14V15Z"
                            fill="#12E582"
                          />
                          <path
                            d="M5.41421 9.41421C5.78929 9.03914 6 8.53043 6 8C6 7.46957 5.78929 6.96086 5.41421 6.58579C5.03914 6.21071 4.53043 6 4 6C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8C2 8.53043 2.21071 9.03914 2.58579 9.41421C2.96086 9.78929 3.46957 10 4 10C4.53043 10 5.03914 9.78929 5.41421 9.41421Z"
                            fill="#0C9C58"
                          />
                          <path
                            d="M4 15C3.9986 13.9833 4.25675 12.983 4.75 12.094C4.30658 11.9795 3.84284 11.9681 3.39431 12.0605C2.94578 12.153 2.52437 12.3469 2.16238 12.6274C1.80039 12.9079 1.50743 13.2676 1.30595 13.6789C1.10446 14.0901 0.999808 14.542 1 15V18H4V15Z"
                            fill="#0C9C58"
                          />
                          <path
                            d="M14.5858 9.41421C14.2107 9.03914 14 8.53043 14 8C14 7.46957 14.2107 6.96086 14.5858 6.58579C14.9609 6.21071 15.4696 6 16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8C18 8.53043 17.7893 9.03914 17.4142 9.41421C17.0391 9.78929 16.5304 10 16 10C15.4696 10 14.9609 9.78929 14.5858 9.41421Z"
                            fill="#0C9C58"
                          />
                          <path
                            d="M16 15C16.0014 13.9833 15.7433 12.983 15.25 12.094C15.6934 11.9795 16.1572 11.9681 16.6057 12.0605C17.0542 12.153 17.4756 12.3469 17.8376 12.6274C18.1996 12.9079 18.4926 13.2676 18.6941 13.6789C18.8955 14.0901 19.0002 14.542 19 15V18H16V15Z"
                            fill="#0C9C58"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col mt-4">
                        <h4 className="text-white font-space-mono text-sm font-medium uppercase pr-6">
                          Panel discussion
                        </h4>
                        <p className="text-gray-500 font-space-mono text-sm font-medium uppercase mt-2">
                          Take notes from the experts and business leaders to
                          start getting into Web3
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden xl:flex flex-row">
                  <a
                    className="btn btn-primary btn-sm sm:btn-base btn-square btn-block lg:btn-max uppercase mt-7"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join early
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Banner (Promote) */}
          <section
            id="whatbethere"
            className="bnner bnner-backdrop bnner-wide grid grid-cols-2 sm:grid-cols-4 items-center justify-center relative py-14"
          >
            <div className="col-span-full">
              <div className="bnner-wide-content text-center mx-auto w-max">
                <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase">
                  3 Countries, 3 weeks, 1 Career Changing Event: Web3 week.
                </h1>
                <p className="text-white font-space-mono text-sm lg:text-base font-normal leading-7 lg:leading-8 uppercase mt-2">
                  Bringing together developers, founders, and community builders
                  focused on building the future of Web3
                </p>
              </div>
            </div>
          </section>

          <div className="container">
            {/* Timeline W3W */}
            <div className="px-4">
              <ul className="tmline grid grid-cols-2 sm:grid-cols-6 gap-y-6 xl:gap-y-20 gap-x-0 xl:gap-x-[196px] list-none my-10 sm:my-18 lg:my-28">
                <li className="tmline-itms col-span-full sm:col-span-2">
                  <div className="tmline-itms-bx flex flex-row sm:flex-col text-left sm:text-center">
                    <div className="tmline-itms-bx_icons">
                      <div className="icons bx bg-grdients-black bx-rounded bx-rounded-icons flex flex-col items-center justify-center mx-auto">
                        <img
                          className="h-[25.6px] sm:h-9 lg:h-[38px] xl:h-12"
                          src="/assets/images/flags/indonesia-id.webp"
                          alt="W3W (Timelines Flags)"
                        />
                      </div>
                    </div>
                    <div className="tmline-itms-bx_cntent grid gap-y-4 relative mt-0 xl:mt-4 ml-4 sm:ml-0">
                      <div className="hdding">
                        <h3 className="hdding-title text-white font-space-mono text-xl lg:leading-8 font-bold uppercase">
                          Indonesia
                        </h3>
                        <span className="hdding-subtitle text-gray-600 font-space-mono text-base font-normal uppercase mt-2">
                          Jakarta
                        </span>
                      </div>
                      <div className="text-gray-500 font-space-mono text-sm lg:text-base font-normal leading-7 lg:leading-8 uppercase">
                        <p className="flex flex-row items-center sm:mx-auto w-max">
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.04 22.351L12.11 22.391L12.138 22.407C12.249 22.467 12.3733 22.4985 12.4995 22.4985C12.6257 22.4985 12.75 22.467 12.861 22.407L12.889 22.392L12.96 22.351C13.3511 22.1191 13.7328 21.8716 14.104 21.609C15.0651 20.9305 15.963 20.1667 16.787 19.327C18.731 17.337 20.75 14.347 20.75 10.5C20.75 8.31196 19.8808 6.21354 18.3336 4.66637C16.7865 3.11919 14.688 2.25 12.5 2.25C10.312 2.25 8.21354 3.11919 6.66637 4.66637C5.11919 6.21354 4.25 8.31196 4.25 10.5C4.25 14.346 6.27 17.337 8.213 19.327C9.03664 20.1667 9.93427 20.9304 10.895 21.609C11.2666 21.8716 11.6485 22.1191 12.04 22.351ZM12.5 13.5C13.2956 13.5 14.0587 13.1839 14.6213 12.6213C15.1839 12.0587 15.5 11.2956 15.5 10.5C15.5 9.70435 15.1839 8.94129 14.6213 8.37868C14.0587 7.81607 13.2956 7.5 12.5 7.5C11.7044 7.5 10.9413 7.81607 10.3787 8.37868C9.81607 8.94129 9.5 9.70435 9.5 10.5C9.5 11.2956 9.81607 12.0587 10.3787 12.6213C10.9413 13.1839 11.7044 13.5 12.5 13.5Z"
                              fill="#BEBEBE"
                            />
                          </svg>
                          TBA
                        </p>
                        <p className="flex flex-row items-center mt-2 sm:mx-auto w-max">
                          <svg
                            className="mr-1"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.25 2.25C7.44891 2.25 7.63968 2.32902 7.78033 2.46967C7.92098 2.61032 8 2.80109 8 3V4.5H17V3C17 2.80109 17.079 2.61032 17.2197 2.46967C17.3603 2.32902 17.5511 2.25 17.75 2.25C17.9489 2.25 18.1397 2.32902 18.2803 2.46967C18.421 2.61032 18.5 2.80109 18.5 3V4.5H19.25C20.0456 4.5 20.8087 4.81607 21.3713 5.37868C21.9339 5.94129 22.25 6.70435 22.25 7.5V18.75C22.25 19.5456 21.9339 20.3087 21.3713 20.8713C20.8087 21.4339 20.0456 21.75 19.25 21.75H5.75C4.95435 21.75 4.19129 21.4339 3.62868 20.8713C3.06607 20.3087 2.75 19.5456 2.75 18.75V7.5C2.75 6.70435 3.06607 5.94129 3.62868 5.37868C4.19129 4.81607 4.95435 4.5 5.75 4.5H6.5V3C6.5 2.80109 6.57902 2.61032 6.71967 2.46967C6.86032 2.32902 7.05109 2.25 7.25 2.25ZM20.75 11.25C20.75 10.8522 20.592 10.4706 20.3107 10.1893C20.0294 9.90804 19.6478 9.75 19.25 9.75H5.75C5.35218 9.75 4.97064 9.90804 4.68934 10.1893C4.40804 10.4706 4.25 10.8522 4.25 11.25V18.75C4.25 19.1478 4.40804 19.5294 4.68934 19.8107C4.97064 20.092 5.35218 20.25 5.75 20.25H19.25C19.6478 20.25 20.0294 20.092 20.3107 19.8107C20.592 19.5294 20.75 19.1478 20.75 18.75V11.25Z"
                              fill="#BEBEBE"
                            />
                          </svg>
                          TBA
                        </p>
                      </div>

                      <button className="flex items-center justify-center border border-solid border-primary rounded-full relative mr-auto sm:mx-auto h-8 sm:h-12 w-8 sm:w-12">
                        <span className="text-primary font-space-mono text-sm sm:text-base font-medium absolute inset-y-auto inset-x-0 z-[5]">
                          W1
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="tmline-itms col-span-full sm:col-span-2">
                  <div className="tmline-itms-bx flex flex-row sm:flex-col text-left sm:text-center">
                    <div className="tmline-itms-bx_icons">
                      <div className="icons bx bg-grdients-black bx-rounded bx-rounded-icons flex flex-col items-center justify-center mx-auto">
                        <img
                          className="h-[25.6px] sm:h-9 lg:h-[38px] xl:h-12"
                          src="/assets/images/flags/thailand-th.webp"
                          alt="W3W (Timelines Flags)"
                        />
                      </div>
                    </div>
                    <div className="tmline-itms-bx_cntent grid gap-y-4 relative mt-0 xl:mt-4 ml-4 sm:ml-0">
                      <div className="hdding">
                        <h3 className="hdding-title text-white font-space-mono text-xl lg:leading-8 font-bold uppercase">
                          Thailand
                        </h3>
                        <span className="hdding-subtitle text-gray-600 font-space-mono text-base font-normal uppercase mt-2">
                          Bangkok
                        </span>
                      </div>
                      <div className="text-gray-500 font-space-mono text-sm lg:text-base font-normal leading-7 lg:leading-8 uppercase">
                        <p className="flex flex-row items-center sm:mx-auto w-max">
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.04 22.351L12.11 22.391L12.138 22.407C12.249 22.467 12.3733 22.4985 12.4995 22.4985C12.6257 22.4985 12.75 22.467 12.861 22.407L12.889 22.392L12.96 22.351C13.3511 22.1191 13.7328 21.8716 14.104 21.609C15.0651 20.9305 15.963 20.1667 16.787 19.327C18.731 17.337 20.75 14.347 20.75 10.5C20.75 8.31196 19.8808 6.21354 18.3336 4.66637C16.7865 3.11919 14.688 2.25 12.5 2.25C10.312 2.25 8.21354 3.11919 6.66637 4.66637C5.11919 6.21354 4.25 8.31196 4.25 10.5C4.25 14.346 6.27 17.337 8.213 19.327C9.03664 20.1667 9.93427 20.9304 10.895 21.609C11.2666 21.8716 11.6485 22.1191 12.04 22.351ZM12.5 13.5C13.2956 13.5 14.0587 13.1839 14.6213 12.6213C15.1839 12.0587 15.5 11.2956 15.5 10.5C15.5 9.70435 15.1839 8.94129 14.6213 8.37868C14.0587 7.81607 13.2956 7.5 12.5 7.5C11.7044 7.5 10.9413 7.81607 10.3787 8.37868C9.81607 8.94129 9.5 9.70435 9.5 10.5C9.5 11.2956 9.81607 12.0587 10.3787 12.6213C10.9413 13.1839 11.7044 13.5 12.5 13.5Z"
                              fill="#BEBEBE"
                            />
                          </svg>
                          TBA
                        </p>
                        <p className="flex flex-row items-center mt-2 sm:mx-auto w-max">
                          <svg
                            className="mr-1"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.25 2.25C7.44891 2.25 7.63968 2.32902 7.78033 2.46967C7.92098 2.61032 8 2.80109 8 3V4.5H17V3C17 2.80109 17.079 2.61032 17.2197 2.46967C17.3603 2.32902 17.5511 2.25 17.75 2.25C17.9489 2.25 18.1397 2.32902 18.2803 2.46967C18.421 2.61032 18.5 2.80109 18.5 3V4.5H19.25C20.0456 4.5 20.8087 4.81607 21.3713 5.37868C21.9339 5.94129 22.25 6.70435 22.25 7.5V18.75C22.25 19.5456 21.9339 20.3087 21.3713 20.8713C20.8087 21.4339 20.0456 21.75 19.25 21.75H5.75C4.95435 21.75 4.19129 21.4339 3.62868 20.8713C3.06607 20.3087 2.75 19.5456 2.75 18.75V7.5C2.75 6.70435 3.06607 5.94129 3.62868 5.37868C4.19129 4.81607 4.95435 4.5 5.75 4.5H6.5V3C6.5 2.80109 6.57902 2.61032 6.71967 2.46967C6.86032 2.32902 7.05109 2.25 7.25 2.25ZM20.75 11.25C20.75 10.8522 20.592 10.4706 20.3107 10.1893C20.0294 9.90804 19.6478 9.75 19.25 9.75H5.75C5.35218 9.75 4.97064 9.90804 4.68934 10.1893C4.40804 10.4706 4.25 10.8522 4.25 11.25V18.75C4.25 19.1478 4.40804 19.5294 4.68934 19.8107C4.97064 20.092 5.35218 20.25 5.75 20.25H19.25C19.6478 20.25 20.0294 20.092 20.3107 19.8107C20.592 19.5294 20.75 19.1478 20.75 18.75V11.25Z"
                              fill="#BEBEBE"
                            />
                          </svg>
                          TBA
                        </p>
                      </div>

                      <button className="flex items-center justify-center border border-solid border-primary rounded-full relative mr-auto sm:mx-auto h-8 sm:h-12 w-8 sm:w-12">
                        <span className="text-primary font-space-mono text-sm sm:text-base font-medium absolute inset-y-auto inset-x-0 z-[5]">
                          W2
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="tmline-itms col-span-full sm:col-span-2">
                  <div className="tmline-itms-bx flex flex-row sm:flex-col text-left sm:text-center">
                    <div className="tmline-itms-bx_icons">
                      <div className="icons bx bg-grdients-black bx-rounded bx-rounded-icons flex flex-col items-center justify-center mx-auto">
                        <img
                          className="h-[25.6px] sm:h-9 lg:h-[38px] xl:h-12"
                          src="/assets/images/flags/vietnam-vn.webp"
                          alt="W3W (Timelines Flags)"
                        />
                      </div>
                    </div>
                    <div className="tmline-itms-bx_cntent grid gap-y-4 relative mt-0 xl:mt-4 ml-4 sm:ml-0">
                      <div className="hdding">
                        <h3 className="hdding-title text-white font-space-mono text-xl lg:leading-8 font-bold uppercase">
                          Vietnam
                        </h3>
                        <span className="hdding-subtitle text-gray-600 font-space-mono text-base font-normal uppercase mt-2">
                          ho chi minh city
                        </span>
                      </div>
                      <div className="text-gray-500 font-space-mono text-sm lg:text-base font-normal leading-7 lg:leading-8 uppercase">
                        <p className="flex flex-row items-center sm:mx-auto w-max">
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.04 22.351L12.11 22.391L12.138 22.407C12.249 22.467 12.3733 22.4985 12.4995 22.4985C12.6257 22.4985 12.75 22.467 12.861 22.407L12.889 22.392L12.96 22.351C13.3511 22.1191 13.7328 21.8716 14.104 21.609C15.0651 20.9305 15.963 20.1667 16.787 19.327C18.731 17.337 20.75 14.347 20.75 10.5C20.75 8.31196 19.8808 6.21354 18.3336 4.66637C16.7865 3.11919 14.688 2.25 12.5 2.25C10.312 2.25 8.21354 3.11919 6.66637 4.66637C5.11919 6.21354 4.25 8.31196 4.25 10.5C4.25 14.346 6.27 17.337 8.213 19.327C9.03664 20.1667 9.93427 20.9304 10.895 21.609C11.2666 21.8716 11.6485 22.1191 12.04 22.351ZM12.5 13.5C13.2956 13.5 14.0587 13.1839 14.6213 12.6213C15.1839 12.0587 15.5 11.2956 15.5 10.5C15.5 9.70435 15.1839 8.94129 14.6213 8.37868C14.0587 7.81607 13.2956 7.5 12.5 7.5C11.7044 7.5 10.9413 7.81607 10.3787 8.37868C9.81607 8.94129 9.5 9.70435 9.5 10.5C9.5 11.2956 9.81607 12.0587 10.3787 12.6213C10.9413 13.1839 11.7044 13.5 12.5 13.5Z"
                              fill="#BEBEBE"
                            />
                          </svg>
                          TBA
                        </p>
                        <p className="flex flex-row items-center mt-2 sm:mx-auto w-max">
                          <svg
                            className="mr-1"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.25 2.25C7.44891 2.25 7.63968 2.32902 7.78033 2.46967C7.92098 2.61032 8 2.80109 8 3V4.5H17V3C17 2.80109 17.079 2.61032 17.2197 2.46967C17.3603 2.32902 17.5511 2.25 17.75 2.25C17.9489 2.25 18.1397 2.32902 18.2803 2.46967C18.421 2.61032 18.5 2.80109 18.5 3V4.5H19.25C20.0456 4.5 20.8087 4.81607 21.3713 5.37868C21.9339 5.94129 22.25 6.70435 22.25 7.5V18.75C22.25 19.5456 21.9339 20.3087 21.3713 20.8713C20.8087 21.4339 20.0456 21.75 19.25 21.75H5.75C4.95435 21.75 4.19129 21.4339 3.62868 20.8713C3.06607 20.3087 2.75 19.5456 2.75 18.75V7.5C2.75 6.70435 3.06607 5.94129 3.62868 5.37868C4.19129 4.81607 4.95435 4.5 5.75 4.5H6.5V3C6.5 2.80109 6.57902 2.61032 6.71967 2.46967C6.86032 2.32902 7.05109 2.25 7.25 2.25ZM20.75 11.25C20.75 10.8522 20.592 10.4706 20.3107 10.1893C20.0294 9.90804 19.6478 9.75 19.25 9.75H5.75C5.35218 9.75 4.97064 9.90804 4.68934 10.1893C4.40804 10.4706 4.25 10.8522 4.25 11.25V18.75C4.25 19.1478 4.40804 19.5294 4.68934 19.8107C4.97064 20.092 5.35218 20.25 5.75 20.25H19.25C19.6478 20.25 20.0294 20.092 20.3107 19.8107C20.592 19.5294 20.75 19.1478 20.75 18.75V11.25Z"
                              fill="#BEBEBE"
                            />
                          </svg>
                          TBA
                        </p>
                      </div>

                      <button className="flex items-center justify-center border border-solid border-primary rounded-full relative mr-auto sm:mx-auto h-8 sm:h-12 w-8 sm:w-12">
                        <span className="text-primary font-space-mono text-sm sm:text-base font-medium absolute inset-y-auto inset-x-0 z-[5]">
                          W3
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Schedule */}
            <section
              id="schedule"
              className="grid grid-cols-4 sm:grid-cols-4 mt-18 mb-14 sm:my-18 lg:my-24 px-0 sm:px-4"
            >
              <div className="col-span-full flex flex-row items-center justify-between">
                <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold text-center uppercase">
                  Schedule
                </h1>
                <span className="text-primary font-space-mono text-sm sm:text-xl uppercase -mt-2.5 sm:-mt-1">
                  Coming soon!
                </span>
              </div>
              <div className="cntent-shdow col-span-full grid grid-cols-12 gap-y-4 gap-x-4 mt-6 sm:mt-8 on">
                <div className="col-span-full sm:col-span-6 lg:col-span-4">
                  <section className="bx bg-grdients-black flex flex-col items-start blur-sm py-4 px-4">
                    <div>
                      <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                        2 February
                      </h3>
                      <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                        Test
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-full sm:col-span-6 lg:col-span-4">
                  <section className="bx bg-grdients-black flex flex-col items-start blur-sm py-4 px-4">
                    <div>
                      <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                        8 February
                      </h3>
                      <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                        Test
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-full sm:col-span-6 lg:col-span-4">
                  <section className="bx bg-grdients-black flex flex-col items-start blur-sm py-4 px-4">
                    <div>
                      <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                        8 February
                      </h3>
                      <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                        Test
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-full sm:col-span-6 lg:col-span-4">
                  <section className="bx bg-grdients-black flex flex-col items-start blur-sm py-4 px-4">
                    <div>
                      <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                        8 February
                      </h3>
                      <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                        Test
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-full sm:col-span-6 lg:col-span-4">
                  <section className="bx bg-grdients-black flex flex-col items-start blur-sm py-4 px-4">
                    <div>
                      <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                        8 February
                      </h3>
                      <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                        Test
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-full sm:col-span-6 lg:col-span-4">
                  <section className="bx bg-grdients-black flex flex-col items-start blur-sm py-4 px-4">
                    <div>
                      <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                        8 February
                      </h3>
                      <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                        Test
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-full sm:col-span-6 lg:col-span-4">
                  <section className="bx bg-grdients-black flex flex-col items-start blur-sm py-4 px-4">
                    <div>
                      <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                        8 February
                      </h3>
                      <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                        Test
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-full sm:col-span-6 lg:col-span-4">
                  <section className="bx bg-grdients-black flex flex-col items-start blur-sm py-4 px-4">
                    <div>
                      <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                        8 February
                      </h3>
                      <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                        Test
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-full sm:col-span-6 lg:col-span-4">
                  <section className="bx bg-grdients-black flex flex-col items-start blur-sm py-4 px-4">
                    <div>
                      <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                        8 February
                      </h3>
                      <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                        Test
                      </span>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>

          {/* Banner (Marquee) */}
          <section
            id="bnnerMarque"
            className="bnner-marque flex flex-col overflow-hidden relative mb-18 sm:mb-28 py-14 sm:py-16 lg:py-[88px]"
          >
            <div className="absolute inset-y-0 inset-x-0 -mt-12 z-[2]">
              <div className="relative h-full w-full">
                <Image
                  alt="W3W (Backdrop Gridlines 3D)"
                  src="/assets/images/backdrop/backdrop-gridlines-3d.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="bnner-marque-content inline-flex flex-row text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase z-[12]">
              <div className="flex flex-row items-center whitespace-nowrap">
                <span>WEB3</span>
                <span className="font-medium mx-2">/</span>
                <span>Infrastructure Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>NFT</span>
                <span className="font-medium mx-2">/</span>
                <span>Metaverse</span>
                <span className="font-medium mx-2">/</span>
                <span>Defi</span>
                <span className="font-medium mx-2">/</span>
                <span>Dao</span>
                <span className="font-medium mx-2">/</span>
              </div>
              <div className="flex flex-row items-center whitespace-nowrap">
                <span>WEB3</span>
                <span className="font-medium mx-2">/</span>
                <span>Infrastructure Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>NFT</span>
                <span className="font-medium mx-2">/</span>
                <span>Metaverse</span>
                <span className="font-medium mx-2">/</span>
                <span>Defi</span>
                <span className="font-medium mx-2">/</span>
                <span>Dao</span>
                <span className="font-medium mx-2">/</span>
              </div>
              <div className="flex flex-row items-center whitespace-nowrap">
                <span>WEB3</span>
                <span className="font-medium mx-2">/</span>
                <span>Infrastructure Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>NFT</span>
                <span className="font-medium mx-2">/</span>
                <span>Metaverse</span>
                <span className="font-medium mx-2">/</span>
                <span>Defi</span>
                <span className="font-medium mx-2">/</span>
                <span>Dao</span>
                <span className="font-medium mx-2">/</span>
              </div>
            </div>
          </section>

          <div className="container">
            {/* Mentors and Speakers */}
            <section id="mentors" className="spekrsjdge px-0 sm:px-4">
              <div className="col-span-full flex flex-col items-center justify-center">
                <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold text-center uppercase">
                  Mentors and Speakers
                </h1>
                <span className="text-primary font-space-mono text-sm sm:text-xl uppercase mt-2">
                  Coming soon!
                </span>
              </div>
              <div className="cntent-shdow col-span-full grid grid-cols-8 gap-y-8 gap-x-4 sm:gap-x-6 xl:gap-x-8 mt-6 sm:mt-9 on">
                <div className="col-span-4 lg:col-span-2 px-2">
                  <section className="grid gap-y-6 text-center blur-sm">
                    <div>
                      <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-white font-w3w-bold text-xl uppercase">
                        Title
                      </h3>
                      <span className="text-white font-space-mono text-base uppercase mt-2">
                        Entrepreneur & Angel Investor
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-4 lg:col-span-2 px-2">
                  <section className="grid gap-y-6 text-center blur-sm">
                    <div>
                      <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-white font-w3w-bold text-xl uppercase">
                        Title
                      </h3>
                      <span className="text-white font-space-mono text-base uppercase mt-2">
                        Entrepreneur & Angel Investor
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-4 lg:col-span-2 px-2">
                  <section className="grid gap-y-6 text-center blur-sm">
                    <div>
                      <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-white font-w3w-bold text-xl uppercase">
                        Title
                      </h3>
                      <span className="text-white font-space-mono text-base uppercase mt-2">
                        Entrepreneur & Angel Investor
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-4 lg:col-span-2 px-2">
                  <section className="grid gap-y-6 text-center blur-sm">
                    <div>
                      <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-white font-w3w-bold text-xl uppercase">
                        Title
                      </h3>
                      <span className="text-white font-space-mono text-base uppercase mt-2">
                        Entrepreneur & Angel Investor
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-4 lg:col-span-2 px-2">
                  <section className="grid gap-y-6 text-center blur-sm">
                    <div>
                      <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-white font-w3w-bold text-xl uppercase">
                        Title
                      </h3>
                      <span className="text-white font-space-mono text-base uppercase mt-2">
                        Entrepreneur & Angel Investor
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-4 lg:col-span-2 px-2">
                  <section className="grid gap-y-6 text-center blur-sm">
                    <div>
                      <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-white font-w3w-bold text-xl uppercase">
                        Title
                      </h3>
                      <span className="text-white font-space-mono text-base uppercase mt-2">
                        Entrepreneur & Angel Investor
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-4 lg:col-span-2 px-2">
                  <section className="grid gap-y-6 text-center blur-sm">
                    <div>
                      <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-white font-w3w-bold text-xl uppercase">
                        Title
                      </h3>
                      <span className="text-white font-space-mono text-base uppercase mt-2">
                        Entrepreneur & Angel Investor
                      </span>
                    </div>
                  </section>
                </div>
                <div className="col-span-4 lg:col-span-2 px-2">
                  <section className="grid gap-y-6 text-center blur-sm">
                    <div>
                      <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-white font-w3w-bold text-xl uppercase">
                        Title
                      </h3>
                      <span className="text-white font-space-mono text-base uppercase mt-2">
                        Entrepreneur & Angel Investor
                      </span>
                    </div>
                  </section>
                </div>
              </div>
              <div className="col-span-full inline-flex flex-wrap justify-center gap-x-8"></div>
            </section>

            {/* From The Creators Of */}
            <section className="grid grid-cols-4 sm:grid-cols-4 my-10 sm:my-18 lg:my-28 px-0 sm:px-4">
              <div className="col-span-full xl:col-span-2 flex flex-col items-start xl:items-center">
                <div className="my-0 xl:my-auto">
                  <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase pr-14">
                    From the creators of
                  </h1>
                </div>
              </div>
              <div className="col-span-full xl:col-span-2 mt-2 xl:mt-0">
                <p className="text-gray-500 font-space-mono text-sm lg:text-base font-normal leading-7 lg:leading-8 uppercase">
                  Organised by{" "}
                  <span className="text-primary">Indonesia Crypto Network</span>
                  , is the largest cross channel web3 media group and agency in
                  Indonesia and the go-to partner since 2016.
                </p>
              </div>
              <div className="col-span-full grid grid-cols-12 gap-y-4 sm:gap-y-6 xl:gap-y-8 gap-x-0 sm:gap-x-6 xl:gap-x-8 mt-6 sm:mt-8">
                <div className="col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-4 grayscale hover:grayscale-0 transition duration-500 ease-in-out">
                  <a
                    className="bx bg-grdients-black flex flex-col items-center justify-center px-4"
                    href="https://coinfest.asia/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/images/creators/coinfestasia.webp"
                      alt="W3W (From The Creators)"
                    />
                  </a>
                </div>
                <div className="col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-4 grayscale hover:grayscale-0 transition duration-500 ease-in-out">
                  <a
                    className="bx bg-grdients-black flex flex-col items-center justify-center px-4"
                    href="https://coinvestasi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/images/creators/coinvestasi.webp"
                      alt="W3W (From The Creators)"
                    />
                  </a>
                </div>
                <div className="col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-4 grayscale hover:grayscale-0 transition duration-500 ease-in-out">
                  <a
                    className="bx bg-grdients-black flex flex-col items-center justify-center px-4"
                    href="https://www.coindesk.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/images/creators/coindesk.webp"
                      alt="W3W (From The Creators)"
                    />
                  </a>
                </div>
              </div>
            </section>

            {/* Banner (See You There) */}
            <section className="bnner bnner-backdrop bnner-in relative mx-0 sm:mx-4">
              <div className="overflow-hidden absolute inset-y-0 inset-x-0 z-[2]">
                <div className="absolute inset-y-0 inset-x-0 -mt-12 z-[2]">
                  <div className="relative h-full w-full">
                    <Image
                      alt="W3W (Backdrop Gridlines 3D)"
                      src="/assets/images/backdrop/backdrop-gridlines-3d.svg"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>

              <div className="bnner-in-content grid gap-y-3 sm:gap-y-4 relative z-50">
                <h1 className="title text-otlne text-otlne-white font-w3w-bold text-[17px] sm:text-[39px] lg:text-[49px] xl:text-[73px] 2xl:text-[77px] font-bold leading-tight tracking-[3px] sm:tracking-normal text-center uppercase">
                  JOIN THE BUILDERS!
                </h1>
                <a
                  className="btn btn-outline-white bg-white/40 btn-sm sm:btn-base btn-square uppercase mx-auto"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  START BUILDING NOW
                </a>
              </div>
            </section>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </main>

      {/* JavaScript */}
      <Script id="init" src="/assets/js/init.js" />
    </>
  );
}
