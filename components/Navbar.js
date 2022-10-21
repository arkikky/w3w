import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar flex items-center justify-center fixed top-8 sm:top-4 inset-x-0 z-base"
        data-navbar
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <a
              className="navbar-brand flex items-center py-0 sm:py-0.5"
              href=""
            >
              <div className="relative h-8 w-[102px]">
                <Image
                  alt="W3W (LOGO)"
                  src="/assets/images/w3w.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </a>
            <ul
              id="nvMnuPrimary"
              className="nav menu navbar-nav flex flex-col sm:flex-row"
              data-navmnu
            >
              <li className="menu-item">
                <a
                  className="menu-link uppercase outline-none"
                  data-scrollto
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="menu-item">
                <a
                  className="menu-link uppercase outline-none"
                  data-scrollto
                  href="#whatbethere"
                >
                  What’ll be there
                </a>
              </li>
              <li className="menu-item">
                <a
                  className="menu-link uppercase outline-none"
                  data-scrollto
                  href="#schedule"
                >
                  Schedules
                </a>
              </li>
              <li className="menu-item">
                <a
                  className="menu-link uppercase outline-none"
                  data-scrollto
                  href="#mentors"
                >
                  Speakers
                </a>
              </li>
            </ul>
            <div className="flex flex-row items-center">
              <a
                className="btn btn-primary btn-xs sm:btn-base btn-square btn-max uppercase"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                TALK WITH US
              </a>
              <button
                className="navbar-toggle flex lg:hidden ml-3"
                data-toggle="#nvMnuPrimary"
                data-icons="#hmbrgerMnu"
              >
                <div id="hmbrgerMnu" className="hmbrger flex flex-col">
                  <span className="hmbrger-itms transition-all duration-300"></span>
                  <span className="hmbrger-itms transition-all duration-300"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
