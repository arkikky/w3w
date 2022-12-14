import { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";
import Script from "next/script";

// Css
import Card from "../styles/components/Card.module.css";

// Json
import mockSchedule from "../utils/schedule.json";

export default function Schedule() {
  const [posts, setPosts] = useState(mockSchedule);

  return (
    <>
      <Head>
        <title>W3W | Web 3 Week</title>
        <meta name="title" content="Web 3 Week" />
        <meta
          name="description"
          content="Web 3 Week (W3W), Builders convention focused on web3"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://w3w.netlify.app/" />
        <meta
          property="og:title"
          content="Builders Convention Focused on Web3"
        />
        <meta
          property="og:description"
          content="Builders Convention Focused on Web3"
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://w3w.netlify.app/" />
        <meta
          property="twitter:title"
          content="Builders Convention Focused on Web3"
        />
        <meta
          property="twitter:description"
          content="Builders Convention Focused on Web3"
        />
        <meta property="twitter:image" content="" />
      </Head>

      <main className="relative mt-[125px] sm:mt-[168px] mb-28 min-h-screen">
        <div className="overflow-hidden relative z-50">
          <div className="container relative px-4">
            <div className="mb-2 sm:mb-1">
              <h1 className="text-white font-w3w-bold text-[32px] sm:text-[44px] lg:text-[50px] xl:text-[64px] leading-relaxed">
                Schedule
              </h1>
            </div>
            {posts.length > 0 && (
              <ul
                id="tabs-tab"
                className="nav nav-tabs flex flex-row flex-wrap list-none w-full"
                role="tablist"
              >
                {posts.map((dtSchdle) => (
                  <li
                    key={dtSchdle.id}
                    className="nav-item flex-1 mr-2 last:mr-0"
                    role="presentation"
                  >
                    <Link
                      id={"tabs-" + dtSchdle.location + "-tab"}
                      className={`nav-link block text-center ${
                        dtSchdle.id >= 2 ? "" : "active"
                      }`}
                      href={"#tabs-" + dtSchdle.location}
                      data-bs-toggle="pill"
                      data-bs-target={"#tabs-" + dtSchdle.location}
                      role="tab"
                      aria-controls={"tabs-" + dtSchdle.location}
                      aria-selected="true"
                    >
                      {dtSchdle.location}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {posts.length > 0 && (
              <div id="tabs-tabContent" className="tab-content mt-2">
                {posts.map((dtSchdle) => (
                  <section
                    key={dtSchdle.id}
                    id={"tabs-" + dtSchdle.location}
                    className={`tab-pane ${
                      dtSchdle.id >= 2 ? "fade" : "fade show active"
                    }`}
                    role="tabpanel"
                    aria-labelledby={"tabs-" + dtSchdle.location + "-tab"}
                  >
                    {dtSchdle.day.length > 0 && (
                      <ul
                        id="tabs-tab-day"
                        className="nav nav-tabs flex flex-row flex-wrap list-none w-full"
                        role="tablist"
                      >
                        {dtSchdle.day.map((dtSchdleDay) => (
                          <li
                            key={dtSchdleDay.id_day}
                            className="nav-item flex-1"
                            role="presentation"
                          >
                            <Link
                              id={"tabs-day" + dtSchdleDay.id_day + "-tab"}
                              className={`nav-link block text-center ${
                                dtSchdleDay.id_day >= 2 ? "" : "active"
                              }`}
                              href={"#tabs-day" + dtSchdleDay.id_day}
                              data-bs-toggle="pill"
                              data-bs-target={"#tabs-day" + dtSchdleDay.id_day}
                              role="tab"
                              aria-controls={"tabs-day" + dtSchdleDay.id_day}
                              aria-selected="true"
                            >
                              Day {dtSchdleDay.id_day}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {dtSchdle.day.length > 0 && (
                      <div
                        id="tabs-day-tabContent"
                        className="tab-content mt-8"
                      >
                        {dtSchdle.day.map((dtSchdleDay) => (
                          <section
                            key={dtSchdleDay.id_day}
                            id={"tabs-day" + dtSchdleDay.id_day}
                            className={`tab-pane ${
                              dtSchdleDay.id_day >= 2
                                ? "fade"
                                : "fade show active"
                            }`}
                            role="tabpanel"
                            aria-labelledby={
                              "tabs-day" + dtSchdleDay.id_day + "-tab"
                            }
                          >
                            {dtSchdleDay.schedule.length > 0 && (
                              <div className="grid grid-cols-12 gap-x-0 mt-10 lg:mt-8">
                                {dtSchdleDay.schedule.map((dtDayCntent) => (
                                  <div
                                    key={dtDayCntent.id_schedule}
                                    className={
                                      Card.bxScheduleGroup +
                                      " col-span-full sm:col-span-6 lg:col-span-4"
                                    }
                                  >
                                    <section className={Card.bxSchedule}>
                                      <div className="flex flex-col">
                                        {dtDayCntent.tags !== false && (
                                          <span className="btn btn-outline-primary btn-xs btn-square text-white uppercase px-2">
                                            {dtDayCntent.tags}
                                          </span>
                                        )}
                                        <div className="mt-4">
                                          {dtDayCntent.title !== false && (
                                            <h2
                                              className={
                                                Card.bxScheduleTitle +
                                                " text-white"
                                              }
                                            >
                                              {dtDayCntent.title}
                                            </h2>
                                          )}
                                          {dtDayCntent.desc !== false && (
                                            <p
                                              className={
                                                Card.bxScheduleDesc +
                                                " text-white mt-4"
                                              }
                                            >
                                              {dtDayCntent.desc}
                                            </p>
                                          )}
                                        </div>
                                        {dtDayCntent.speakers !== false && (
                                          <div className="mt-4">
                                            <p className="text-white font-fira-code text-sm font-normal">
                                              {"Speakers"}
                                            </p>
                                            <ul className={Card.bxScheduleList}>
                                              {dtDayCntent.speakers.map(
                                                (dtSpeakers) => (
                                                  <li
                                                    key={dtSpeakers.id_speakers}
                                                  >
                                                    <div
                                                      className={
                                                        Card.bxScheduleImages +
                                                        " block relative"
                                                      }
                                                    >
                                                      <Image
                                                        alt="W3W (Schedule - Speakers)"
                                                        src={dtSpeakers.images}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        quality="70"
                                                      />
                                                    </div>
                                                    <span className="text-white font-fira-code text-sm font-normal">
                                                      {dtSpeakers.name}
                                                    </span>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        )}
                                      </div>
                                      {dtDayCntent.time !== false && (
                                        <span className="text-white font-fira-code text-sm font-normal mt-4">
                                          {dtDayCntent.time}
                                        </span>
                                      )}
                                    </section>
                                  </div>
                                ))}
                              </div>
                            )}
                          </section>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            )}
            {/* <div className="grid grid-cols-12 gap-x-0 mt-10 lg:mt-8">
              {posts.map((dtSchdle) => (
                <div
                  key={dtSchdle.id_schedule}
                  className={
                    Card.bxScheduleGroup +
                    " col-span-full sm:col-span-6 lg:col-span-4"
                  }
                >
                  <section className={Card.bxSchedule}>
                    <div className="flex flex-col">
                      {dtSchdle.tags !== false && (
                        <span className="btn btn-outline-primary btn-xs btn-square text-white uppercase px-2">
                          {dtSchdle.tags}
                        </span>
                      )}
                      <div className="mt-4">
                        {dtSchdle.title !== false && (
                          <h2 className={Card.bxScheduleTitle + " text-white"}>
                            {dtSchdle.title}
                          </h2>
                        )}
                        {dtSchdle.desc !== false && (
                          <p
                            className={Card.bxScheduleDesc + " text-white mt-4"}
                          >
                            {dtSchdle.desc}
                          </p>
                        )}
                      </div>
                      {dtSchdle.speakers !== false && (
                        <div className="mt-4">
                          <p className="text-white font-fira-code text-sm font-normal">
                            {"Speakers"}
                          </p>
                          <ul className={Card.bxScheduleList}>
                            {dtSchdle.speakers.map((dtSpeakers) => (
                              <li key={dtSpeakers.id_speakers}>
                                <div
                                  className={
                                    Card.bxScheduleImages + " block relative"
                                  }
                                >
                                  <Image
                                    alt="W3W (Schedule - Speakers)"
                                    src={dtSpeakers.images}
                                    layout="fill"
                                    objectFit="cover"
                                    quality="70"
                                  />
                                </div>
                                <span className="text-white font-fira-code text-sm font-normal">
                                  {dtSpeakers.name}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    {dtSchdle.time !== false && (
                      <span className="text-white font-fira-code text-sm font-normal mt-4">
                        {dtSchdle.time}
                      </span>
                    )}
                  </section>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </main>

      {/* Script (Plugin) */}
      <Script id="w3wElements" src="/assets/js/elements/index.min.js" />
    </>
  );
}
