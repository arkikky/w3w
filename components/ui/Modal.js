import Image from "next/legacy/image";

// import Modal from "../styles/components/Backdrop.module.css";

const Modal = ({ id, className, varietyModal }) => {
  const addClassName = className ? className : "";

  return (
    <>
      {varietyModal === "modal-split" && (
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id={id}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-split lg:max-w-[796px] xl:max-w-[998px] relative">
            {/* <div className="modal-content border-none relative overflow-hidden outline-none text-current"> */}
            <div
              className="modal-content border-none absolute sm:relative top-auto bottom-0 sm:bottom-auto inset-x-auto overflow-hidden outline-none text-current p-0"
            >
              <div className="flex-auto lg:flex-1 h-[224px] sm:h-auto min-h-[224px] lg:min-h-[545px] w-full max-w-full lg:max-w-[472px]">
                {/* <img className="img-cver h-full w-full" src="./assets/images/wp-banner-earlybird-1.jpg"
            alt="Coinfest Asia 2022 (Split Modal)"> */}
                <div className="block relative h-full w-full">
                  <Image
                    alt="W3W (Split Modal)"
                    src="/assets/images/backdrop/modal-newsletters.png"
                    layout="fill"
                    objectFit="cover"
                    quality="55"
                  />
                </div>
              </div>
              <div className="flex-1 bg-white py-6 px-6 sm:px-12">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body relative">
                  <div className="mb-8">
                    <h3 className="text-[#0054E8] font-montserrat text-2xl sm:text-[40px] font-bold leading-[normal] lg:leading-[48px] tracking-wide capitalize mb-2 w-full max-w-max">
                      STAY TUNED
                    </h3>
                    <p className="text-[#000000] font-bevietnam-pro text-sm font-semibold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <form action="">
                    <div className="grid gap-y-6">
                      <div className="flex flex-col relative">
                        <label
                          className="form-label text-sm sm:text-base font-medium capitalize mb-2"
                          htmlFor="inputNameNotifMe"
                        >
                          Name
                          <span>*</span>
                        </label>
                        <input
                          id="inputNameNotifMe"
                          className="form-input form-input-base"
                          type="text"
                          name="nama_notif_me"
                          maxLength="80"
                          placeholder="eg: Ferdinand Alonzo"
                          defaultValue=""
                          required=""
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
