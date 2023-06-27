import React, { Fragment, useState } from "react";
import { Element } from "react-scroll";
import { Dialog, Transition } from "@headlessui/react";

// Css
import Modal from "@styles/components/Modal.module.css";

// Ui - Components
import Buttons from "@components/UI/Buttons";

const LyPitchingTopics = () => {
  let [isOpenDefi, setIsOpenDefi] = useState(false);
  let [isOpenGaming, setIsOpenGaming] = useState(false);
  let [isOpenDao, setIsOpenDao] = useState(false);
  let [isOpenSocialfi, setIsOpenSocialfi] = useState(false);
  let [isOpenMetaverse, setIsOpenMetaverse] = useState(false);
  let [isOpenSocialImpact, setIsOpenSocialImpact] = useState(false);
  let [isOpenEnvironmental, setIsOpenEnvironmental] = useState(false);
  let [isOpenAnalytic, setIsOpenAnalytic] = useState(false);
  let [isOpenNft, setIsOpenNft] = useState(false);

  // Close
  function closeModalDefi() {
    setIsOpenDefi(false);
  }

  function closeModalGaming() {
    setIsOpenGaming(false);
  }

  function closeModalDao() {
    setIsOpenDao(false);
  }

  function closeModalSocialfi() {
    setIsOpenSocialfi(false);
  }

  function closeModalMetaverse() {
    setIsOpenMetaverse(false);
  }

  function closeModalSocialImpact() {
    setIsOpenSocialImpact(false);
  }

  function closeModalEnvironmental() {
    setIsOpenEnvironmental(false);
  }

  function closeModalAnalytic() {
    setIsOpenAnalytic(false);
  }

  function closeModalNft() {
    setIsOpenNft(false);
  }

  // Open
  function openModalDefi() {
    setIsOpenDefi(true);
  }

  function openModalGaming() {
    setIsOpenGaming(true);
  }

  function openModalDao() {
    setIsOpenDao(true);
  }

  function openModalSocialfi() {
    setIsOpenSocialfi(true);
  }

  function openModalMetaverse() {
    setIsOpenMetaverse(true);
  }

  function openModalSocialImpact() {
    setIsOpenSocialImpact(true);
  }

  function openModalEnvironmental() {
    setIsOpenEnvironmental(true);
  }

  function openModalAnalytic() {
    setIsOpenAnalytic(true);
  }

  function openModalNft() {
    setIsOpenNft(true);
  }

  return (
    <>
      {/* Defi */}
      <Transition appear show={isOpenDefi} as={Fragment}>
        <Dialog as="div" className="relative z-xl" onClose={closeModalDefi}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-y-0 inset-x-0 blur-md bg-black-900/60 z-[1613]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[2145]">
            <div className="flex min-h-full items-end sm:items-center justify-center py-0 px-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-xl sm:rounded-xl bg-[#2D2D2D] pt-7 pb-8 px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-white font-fira-code text-xl font-semibold leading-6 uppercase"
                  >
                    DeFi
                  </Dialog.Title>
                  <div
                    className={`${Modal.mdlDesc} text-white font-fira-code text-sm font-medium mt-6`}
                  >
                    <p>
                      Remove the need for intermediaries such as banks or
                      brokerages. Use cases for DeFi:
                    </p>
                    <ul>
                      <li>Peer-to-peer lending and borrowing</li>
                      <li>Decentralized exchanges</li>
                      <li>Insurance</li>
                    </ul>
                  </div>

                  <div className="absolute top-1.5 left-auto right-0 bottom-0">
                    <button
                      type="button"
                      className="inline-flex justify-center border-none border-transparent px-4 py-2"
                      onClick={closeModalDefi}
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Gaming */}
      <Transition appear show={isOpenGaming} as={Fragment}>
        <Dialog as="div" className="relative z-xl" onClose={closeModalGaming}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-y-0 inset-x-0 blur-md bg-black-900/60 z-[1613]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[2145]">
            <div className="flex min-h-full items-end sm:items-center justify-center py-0 px-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-xl sm:rounded-xl bg-[#2D2D2D] pt-7 pb-8 px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-white font-fira-code text-xl font-semibold leading-6 uppercase"
                  >
                    Gaming
                  </Dialog.Title>
                  <div
                    className={`${Modal.mdlDesc} text-white font-fira-code text-sm font-medium mt-6`}
                  >
                    <p>
                      Integrate blockchain technology in the gaming industry.
                      Use cases for gaming:
                    </p>
                    <ul>
                      <li>
                        Creation of in-game economies with blockchain-based
                        assets.
                      </li>
                      <li>Decentralized exchanges to trade in-game items.</li>
                      <li>
                        Interoperable gaming items between different games .
                      </li>
                    </ul>
                  </div>

                  <div className="absolute top-1.5 left-auto right-0 bottom-0">
                    <button
                      type="button"
                      className="inline-flex justify-center border-none border-transparent px-4 py-2"
                      onClick={closeModalGaming}
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Dao */}
      <Transition appear show={isOpenDao} as={Fragment}>
        <Dialog as="div" className="relative z-xl" onClose={closeModalDao}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-y-0 inset-x-0 blur-md bg-black-900/60 z-[1613]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[2145]">
            <div className="flex min-h-full items-end sm:items-center justify-center py-0 px-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-xl sm:rounded-xl bg-[#2D2D2D] pt-7 pb-8 px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-white font-fira-code text-xl font-semibold leading-6 uppercase"
                  >
                    Dao
                  </Dialog.Title>
                  <div
                    className={`${Modal.mdlDesc} text-white font-fira-code text-sm font-medium mt-6`}
                  >
                    <p>
                      Create a decentralized autonomous organization to
                      accomplish nearly anything without bloated leadership. Use
                      cases for DAOs:
                    </p>
                    <ul>
                      <li>Decentralized governance of protocols</li>
                      <li>Community-driven fundraising</li>
                      <li>Decentralized venture capital</li>
                      <li>Organization/nation voting system</li>
                      <li>Collaborative management</li>
                    </ul>
                  </div>

                  <div className="absolute top-1.5 left-auto right-0 bottom-0">
                    <button
                      type="button"
                      className="inline-flex justify-center border-none border-transparent px-4 py-2"
                      onClick={closeModalDao}
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Socialfi */}
      <Transition appear show={isOpenSocialfi} as={Fragment}>
        <Dialog as="div" className="relative z-xl" onClose={closeModalSocialfi}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-y-0 inset-x-0 blur-md bg-black-900/60 z-[1613]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[2145]">
            <div className="flex min-h-full items-end sm:items-center justify-center py-0 px-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-xl sm:rounded-xl bg-[#2D2D2D] pt-7 pb-8 px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-white font-fira-code text-xl font-semibold leading-6 uppercase"
                  >
                    Socialfi
                  </Dialog.Title>
                  <div
                    className={`${Modal.mdlDesc} text-white font-fira-code text-sm font-medium mt-6`}
                  >
                    <p>
                      Integrate blockchain technology in social media platforms.
                      Use cases for SocialFi:
                    </p>
                    <ul>
                      <li>
                        Platforms that incentivize content creators and curators
                        with cryptocurrency rewards
                      </li>
                      <li>
                        Social tokens representing ownership in a creator's work
                        or platform
                      </li>
                      <li>Decentralized reputation systems</li>
                      <li>OCreation of digital identity</li>
                    </ul>
                  </div>

                  <div className="absolute top-1.5 left-auto right-0 bottom-0">
                    <button
                      type="button"
                      className="inline-flex justify-center border-none border-transparent px-4 py-2"
                      onClick={closeModalSocialfi}
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Metaverse */}
      <Transition appear show={isOpenMetaverse} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-xl"
          onClose={closeModalMetaverse}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-y-0 inset-x-0 blur-md bg-black-900/60 z-[1613]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[2145]">
            <div className="flex min-h-full items-end sm:items-center justify-center py-0 px-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-xl sm:rounded-xl bg-[#2D2D2D] pt-7 pb-8 px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-white font-fira-code text-xl font-semibold leading-6 uppercase"
                  >
                    Metaverse
                  </Dialog.Title>
                  <div
                    className={`${Modal.mdlDesc} text-white font-fira-code text-sm font-medium mt-6`}
                  >
                    <p>
                      Develop a decentralized virtual world that run on a
                      blockchain network. Use cases for Metaverse:
                    </p>
                    <ul>
                      <li>Creation of virtual real estate</li>
                      <li>Virtual goods & services</li>
                      <li>Virtual social experiences</li>
                      <li>Developing digital economy world</li>
                    </ul>
                  </div>

                  <div className="absolute top-1.5 left-auto right-0 bottom-0">
                    <button
                      type="button"
                      className="inline-flex justify-center border-none border-transparent px-4 py-2"
                      onClick={closeModalMetaverse}
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* SocialImpact */}
      <Transition appear show={isOpenSocialImpact} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-xl"
          onClose={closeModalSocialImpact}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-y-0 inset-x-0 blur-md bg-black-900/60 z-[1613]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[2145]">
            <div className="flex min-h-full items-end sm:items-center justify-center py-0 px-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-xl sm:rounded-xl bg-[#2D2D2D] pt-7 pb-8 px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-white font-fira-code text-xl font-semibold leading-6 uppercase"
                  >
                    Social Impact
                  </Dialog.Title>
                  <div
                    className={`${Modal.mdlDesc} text-white font-fira-code text-sm font-medium mt-6`}
                  >
                    <p>
                      Cuts down on the need for even more physical
                      infrastructure sent around the world every day. Use cases
                      for Enviromental / Sustainability:
                    </p>
                    <ul>
                      <li>
                        Blockchain-based systems that track carbon emissions
                      </li>
                      <li>Decentralized renewable energy systems</li>
                      <li>
                        Sustainability-focused marketplace for green products &
                        services
                      </li>
                      <li>Charity/public good acts</li>
                    </ul>
                  </div>

                  <div className="absolute top-1.5 left-auto right-0 bottom-0">
                    <button
                      type="button"
                      className="inline-flex justify-center border-none border-transparent px-4 py-2"
                      onClick={closeModalSocialImpact}
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Environmental */}
      <Transition appear show={isOpenEnvironmental} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-xl"
          onClose={closeModalEnvironmental}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-y-0 inset-x-0 blur-md bg-black-900/60 z-[1613]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[2145]">
            <div className="flex min-h-full items-end sm:items-center justify-center py-0 px-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-xl sm:rounded-xl bg-[#2D2D2D] pt-7 pb-8 px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-white font-fira-code text-xl font-semibold leading-6 uppercase"
                  >
                    Environmental
                  </Dialog.Title>
                  <div
                    className={`${Modal.mdlDesc} text-white font-fira-code text-sm font-medium mt-6`}
                  >
                    <p>
                      Cuts down on the need for even more physical
                      infrastructure sent around the world every day. Use cases
                      for Enviromental / Sustainability:
                    </p>
                    <ul>
                      <li>
                        Blockchain-based systems that track carbon emissions
                      </li>
                      <li>Decentralized renewable energy systems</li>
                      <li>
                        Sustainability-focused marketplace for green products &
                        services
                      </li>
                      <li>Charity/public good acts</li>
                    </ul>
                  </div>

                  <div className="absolute top-1.5 left-auto right-0 bottom-0">
                    <button
                      type="button"
                      className="inline-flex justify-center border-none border-transparent px-4 py-2"
                      onClick={closeModalEnvironmental}
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Analytic */}
      <Transition appear show={isOpenAnalytic} as={Fragment}>
        <Dialog as="div" className="relative z-xl" onClose={closeModalAnalytic}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-y-0 inset-x-0 blur-md bg-black-900/60 z-[1613]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[2145]">
            <div className="flex min-h-full items-end sm:items-center justify-center py-0 px-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-xl sm:rounded-xl bg-[#2D2D2D] pt-7 pb-8 px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-white font-fira-code text-xl font-semibold leading-6 uppercase"
                  >
                    Analytic
                  </Dialog.Title>
                  <div
                    className={`${Modal.mdlDesc} text-white font-fira-code text-sm font-medium mt-6`}
                  >
                    <p>
                      Track & analyze data on decentralized blockchain networks.
                      Use cases for Analytics:
                    </p>
                    <ul>
                      <li>Blockchain-based data marketplace</li>
                      <li>Decentralized data storage & sharing</li>
                      <li>
                        Blockchain-based system to improve supply chain
                        management, fraud detection, etc
                      </li>
                    </ul>
                  </div>

                  <div className="absolute top-1.5 left-auto right-0 bottom-0">
                    <button
                      type="button"
                      className="inline-flex justify-center border-none border-transparent px-4 py-2"
                      onClick={closeModalAnalytic}
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Nft */}
      <Transition appear show={isOpenNft} as={Fragment}>
        <Dialog as="div" className="relative z-xl" onClose={closeModalNft}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-y-0 inset-x-0 blur-md bg-black-900/60 z-[1613]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[2145]">
            <div className="flex min-h-full items-end sm:items-center justify-center py-0 px-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-xl sm:rounded-xl bg-[#2D2D2D] pt-7 pb-8 px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-white font-fira-code text-xl font-semibold leading-6 uppercase"
                  >
                    Nft
                  </Dialog.Title>
                  <div
                    className={`${Modal.mdlDesc} text-white font-fira-code text-sm font-medium mt-6`}
                  >
                    <p>
                      Allow ownership and transfer of digital assets that are
                      verified on blockchain network. Use cases for NFT:
                    </p>
                    <ul>
                      <li>Decentralized marketplace for digital assets</li>
                      <li>
                        Verification of ownership and provenance of digital
                        assets
                      </li>
                      <li>
                        Creation of new revenue streams for content creators
                      </li>
                    </ul>
                  </div>

                  <div className="absolute top-1.5 left-auto right-0 bottom-0">
                    <button
                      type="button"
                      className="inline-flex justify-center border-none border-transparent px-4 py-2"
                      onClick={closeModalNft}
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Element
        id="pitchingTopics"
        className="flex flex-col px-2 sm:px-4 mt-16"
        name="pitchingTopics"
      >
        <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] text-center uppercase">
          PITCHING TOPICS
        </h2>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 gap-y-4 sm:gap-y-8 gap-x-4 sm:gap-x-8 mt-6">
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <button
              className="btn btn-base btn-square btn-outline-white bg-white/40 justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
              type="button"
              aria-labelledby="btnPitchingTopicDefi"
              onClick={openModalDefi}
            >
              DEFI
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <button
              className="btn btn-base btn-square btn-outline-white bg-white/40 justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
              type="button"
              aria-labelledby="btnPitchingTopicGaming"
              onClick={openModalGaming}
            >
              GAMING
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <button
              className="btn btn-base btn-square btn-outline-white bg-white/40 justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
              type="button"
              aria-labelledby="btnPitchingTopicDao"
              onClick={openModalDao}
            >
              DAO
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <button
              className="btn btn-base btn-square btn-outline-white bg-white/40 justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
              type="button"
              aria-labelledby="btnPitchingTopicSocialfi"
              onClick={openModalSocialfi}
            >
              SOCIALFI
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <button
              className="btn btn-base btn-square btn-outline-white bg-white/40 justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
              type="button"
              aria-labelledby="btnPitchingTopicMetaverse"
              onClick={openModalMetaverse}
            >
              METAVERSE
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <button
              className="btn btn-base btn-square btn-outline-white bg-white/40 justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
              type="button"
              aria-labelledby="btnPitchingSocialImpact"
              onClick={openModalSocialImpact}
            >
              SOCIAL IMPACT
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <button
              className="btn btn-base btn-square btn-outline-white bg-white/40 justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
              type="button"
              aria-labelledby="btnPitchingTopicEnvironmental"
              onClick={openModalEnvironmental}
            >
              ENVIRONMENTAL
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <button
              className="btn btn-base btn-square btn-outline-white bg-white/40 justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
              type="button"
              aria-labelledby="btnPitchingTopicAnalytic"
              onClick={openModalAnalytic}
            >
              ANALYTIC
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <button
              className="btn btn-base btn-square btn-outline-white bg-white/40 justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
              type="button"
              aria-labelledby="btnPitchingTopicNft"
              onClick={openModalNft}
            >
              NFT
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
        </div>
      </Element>
    </>
  );
};

export default LyPitchingTopics;
