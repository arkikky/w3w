import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Modal from "@styles/components/Modal.module.css";

const LyCommunityPartners = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* Defi */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-xl" onClose={closeModal}>
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
                    className={`${Modal.mdlDesc} text-white font-fira-code text-sm font-medium mt-4`}
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
                      onClick={closeModal}
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
    </>
  );
};

export default LyCommunityPartners;
