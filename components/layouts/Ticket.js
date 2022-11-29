// Css
import Ticket from "../../styles/components/Ticket.module.css";

// Ui
import ButtonsLink from "../../components/ui/buttons/ButtonsLink";

const RoashowIn = () => {
  return (
    <>
      <section className="grid grid-cols-12 gap-y-8 lg:gap-y-0 gap-x-0 lg:gap-x-8 mt-24 mb-[120px]">
        <div className="col-span-full lg:col-span-6">
          <div className={"bg-[#00934C] " + Ticket.bxTicket}>
            <div>
              <div>
                <h2 className="text-white font-w3w-bold text-2xl uppercase">
                  SINGLE PASS
                </h2>
                <p className="text-white font-mono text-base uppercase">
                  Suitable for 1 person
                </p>
              </div>
              <div className="flex flex-row mt-6">
                <h1 className="text-white font-w3w-bold text-[48px] sm:text-[64px] xl:text-[72px] leading-[77px] sm:leading-[102px] xl:leading-[112px] uppercase">
                  $10
                </h1>
              </div>
              {/* <div className="columns-1 xl:columns-3 bg-white/20 border border-solid border-white text-white font-mono text-base text-left xl:text-center uppercase relative mt-2 lg:mt-1 py-4 px-4">
                <p>IDR 50.000</p>
                <p>Baht 50.000</p>
                <p>Dong 50.000</p>
              </div> */}
              <div className={Ticket.bxTicketBx}>
                <ul className={Ticket.bxTicketList}>
                  <li>2 days pass in 1 country</li>
                  <li>
                    access to all area (hq space, garage space, and other areas)
                  </li>
                  <li>access to workshops, use-cases, and other sessions</li>
                  <li>1-on-1 mentoring sessions*</li>
                  <li>food & beverage Coupons</li>
                  <li>
                    meet & network with founders and web3 leading companies
                  </li>
                  <li>goods & merchandises</li>
                </ul>
              </div>
            </div>
            <ButtonsLink
              className="btn-block"
              url=""
              label="Buy now"
              type="btn-outline-white"
              center
            ></ButtonsLink>

            <div className={Ticket.bxTicketItmL}></div>
            <div className={Ticket.bxTicketItmR}></div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-6">
          <div className={"bg-[#AF30DB] " + Ticket.bxTicket}>
            <div>
              <div>
                <h2 className="text-white font-w3w-bold text-2xl uppercase">
                  SINGLE PASS
                </h2>
                <p className="text-white font-mono text-base uppercase">
                  Suitable for 1 person
                </p>
              </div>
              <div className="flex flex-row mt-6">
                <h1 className="text-white font-w3w-bold text-[48px] sm:text-[64px] xl:text-[72px] leading-[77px] sm:leading-[102px] xl:leading-[112px] uppercase">
                  $10
                </h1>
              </div>
              <div className={Ticket.bxTicketBx}>
                <ul className={Ticket.bxTicketList}>
                  <li>2 days pass in 1 country</li>
                  <li>
                    access to all area (hq space, garage space, and other areas)
                  </li>
                  <li>access to workshops, use-cases, and other sessions</li>
                  <li>1-on-1 mentoring sessions*</li>
                  <li>food & beverage Coupons</li>
                  <li>
                    meet & network with founders and web3 leading companies
                  </li>
                  <li>goods & merchandises</li>
                </ul>
              </div>
            </div>
            <ButtonsLink
              className="btn-block"
              url=""
              label="Buy now"
              type="btn-outline-white"
              center
            ></ButtonsLink>

            <div className={Ticket.bxTicketItmL}></div>
            <div className={Ticket.bxTicketItmR}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoashowIn;
