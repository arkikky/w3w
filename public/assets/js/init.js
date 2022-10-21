/* ------------------------------------------------------------------------------
	
  Name: W3W - Website
  Description: W3W - Website
  License: ISC
  
  ------------------------------------------------------------------------------ */
//

(() => {
  // Navbar
  let stNavbar = document.querySelector("[data-navbar]");

  // Nav Menu
  let stNvMnu = document.querySelectorAll("[data-navmnu]");

  // Target
  let gTggleTget = document.querySelectorAll("[data-toggle]");

  if (gTggleTget.length !== 0) {
    gTggleTget.forEach((tgetEl) => {
      tgetEl.addEventListener("click", (e) => {
        let defltScroll = Math.ceil(window.pageYOffset);

        var gElmtIcons = tgetEl.getAttribute("data-icons");

        if (gElmtIcons !== "") {
          let sElmtIcons = document.querySelector(gElmtIcons);

          if (sElmtIcons !== null) {
            if (!sElmtIcons.classList.contains("close")) {
              sElmtIcons.classList.add("close");
            } else {
              sElmtIcons.classList.remove("close");
            }
          }
        }

        if (defltScroll <= 12) {
          if (!stNavbar.classList.contains("active")) {
            stNavbar.classList.add("active");
          } else {
            stNavbar.classList.remove("active");
          }

          let gAttrTggle = tgetEl.getAttribute("data-toggle");

          if (gAttrTggle !== "") {
            let sElmtTget = document.querySelector(gAttrTggle);

            if (!sElmtTget.classList.contains("on")) {
              sElmtTget.classList.add("on");
            } else {
              sElmtTget.classList.remove("on");
            }
          }
        } else if (defltScroll >= 12) {
          if (!stNavbar.classList.contains("active")) {
            stNavbar.classList.add("active");
          } else {
            if (!stNavbar.classList.contains("active")) {
              stNavbar.classList.remove("active");
            }
          }

          let gAttrTggle = tgetEl.getAttribute("data-toggle");

          if (gAttrTggle !== "") {
            let sElmtTget = document.querySelector(gAttrTggle);

            if (!sElmtTget.classList.contains("on")) {
              sElmtTget.classList.add("on");
            } else {
              sElmtTget.classList.remove("on");
            }
          }
        }

        e.preventDefault();
      });
    });
  }

  // Scroll To
  var gScrllTo = document.querySelectorAll("[data-scrollto]");

  if (gScrllTo.length !== 0) {
    gScrllTo.forEach((tgetEl) => {
      tgetEl.addEventListener("click", (e) => {
        gScrllTo.forEach((gDtaScrllTo) => {
          if (gDtaScrllTo.classList.contains("active")) {
            gDtaScrllTo.classList.remove("active");
          }
        });

        if (!tgetEl.classList.contains("active")) {
          tgetEl.classList.add("active");
        }

        if (tgetEl.classList.contains("active")) {
          if (stNvMnu.length !== 0) {
            stNvMnu.forEach((tgetElNvMnu) => {
              if (tgetElNvMnu.classList.contains("on")) {
                setTimeout(() => {
                  tgetElNvMnu.classList.remove("on");
                }, 600);
              }
            });
          }
        }

        if (gTggleTget.length !== 0) {
          gTggleTget.forEach((tgetElToggle) => {
            var gElmtIcons = tgetElToggle.getAttribute("data-icons");

            if (gElmtIcons !== "") {
              let sElmtIcons = document.querySelector(gElmtIcons);

              if (sElmtIcons !== null) {
                if (sElmtIcons.classList.contains("close")) {
                  setTimeout(() => {
                    sElmtIcons.classList.remove("close");
                  }, 600);
                }
              }
            }
          });
        }

        var gAttr_Href = tgetEl.getAttribute("href");

        if (gAttr_Href !== "") {
          var sElmtTget = document.querySelector(gAttr_Href);

          if (sElmtTget !== null) {
            var chckOffsTop;

            if (sElmtTget.offsetTop > 0) {
              chckOffsTop = sElmtTget.offsetTop - (stNavbar.clientHeight + 44);
            } else {
              chckOffsTop = sElmtTget.offsetTop;
            }

            window.scrollTo({
              top: chckOffsTop,
              left: 0,
              behavior: "smooth",
            });
          }
        }

        e.preventDefault();
      });
    });
  }

  // App Scroll
  let defltScroll = Math.ceil(window.pageYOffset);

  window.addEventListener("scroll", () => {
    let lngthScroll = Math.ceil(window.pageYOffset);

    // Navbar
    if (stNavbar !== null) {
      if (lngthScroll >= 12) {
        stNavbar.classList.add("active");
      } else if (lngthScroll <= 12) {
        if (stNvMnu.length !== 0) {
          stNvMnu.forEach((tgetEl) => {
            if (!tgetEl.classList.contains("on")) {
              stNavbar.classList.remove("active");
            }
          });
        }
      }
    }

    // Scroll Spy
    if (gScrllTo.length !== 0) {
      gScrllTo.forEach((tgetEl) => {
        let gAttr_Href = tgetEl.getAttribute("href");

        if (gAttr_Href !== "") {
          var sElmtTget = document.querySelector(gAttr_Href);

          if (lngthScroll > sElmtTget.offsetTop - 396) {
            gScrllTo.forEach((gDtaScrllTo) => {
              if (gDtaScrllTo.classList.contains("active")) {
                gDtaScrllTo.classList.remove("active");
              }
            });

            if (!tgetEl.classList.contains("active")) {
              tgetEl.classList.add("active");
            } else {
              tgetEl.classList.add("active");
            }
          } else if (lngthScroll < sElmtTget.offsetTop - 396) {
            if (!tgetEl.classList.contains("active")) {
              tgetEl.classList.remove("active");
            } else {
              tgetEl.classList.remove("active");
            }
          }
        }
      });
    }

    lngthScroll = defltScroll;
  });

  // App Load
  window.addEventListener("load", () => {
    // Default Navbar
    if (defltScroll >= 12) {
      stNavbar.classList.add("active");
    }
  });
})();
