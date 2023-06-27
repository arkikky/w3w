import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Card from "@styles/components/Card.module.css";

// Ui - Components
import Main from "@components/Main";
import Container from "@components/Container";
import ImagesFill from "@components/UI/ImagesFill";
import Buttons from "@components/UI/Buttons";

const CuratedProjects = () => {
  return (
    <>
      {/* Head (Top 30 Curated Projects) */}
      <Head>
        <title>Top 30 Curated Projects - W3W | Web3 Weekend 2023</title>
        <meta
          name="title"
          content="Top 30 Curated Projects - W3W | Web3 Weekend 2023"
        />
        <meta
          name="description"
          content="W3W is an online web3 innovation competition co-hosted by Coinvestasi and Blockdev.id. Turn your ideas into reality!"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinfest.asia/" />
        <meta property="og:title" content="W3W | Web3 Weekend 2023" />
        <meta
          property="og:description"
          content="W3W is an online web3 innovation competition co-hosted by Coinvestasi and Blockdev.id. Turn your ideas into reality!"
        />
        <meta
          property="og:image"
          content="/assets/thumbnail-share/app-thumbnail-share.jpg"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://coinfest.asia/" />
        <meta property="twitter:title" content="W3W | Web3 Weekend 2023" />
        <meta
          property="twitter:description"
          content="W3W is an online web3 innovation competition co-hosted by Coinvestasi and Blockdev.id. Turn your ideas into reality!"
        />
        <meta
          property="twitter:image"
          content="/assets/thumbnail-share/app-thumbnail-share.jpg"
        />
      </Head>

      <Main className="relative mt-[92px] sm:mt-[129px] lg:mt-[164px]">
        <div className="overflow-hidden relative">
          {/* Backdrop (Beams) */}
          <Container className="select-none pointer-events-none absolute inset-y-0 inset-x-0 -z-px">
            {/* Beams (Left) */}
            <section className="absolute top-0 sm:top-[149px] lg:top-[102px] xl:top-[145px] -left-[234px] sm:-left-[189px] xl:-left-[213px] right-auto bottom-auto transform rotate-[-23deg] sm:rotate-0">
              <ImagesFill
                className="flex blur-[20px] relative h-[516px] 2xl:h-[516px] w-[393px] 2xl:w-[493px]"
                src={`${publicRuntimeConfig.staticFolderImgs}/backdrop/beams-left-backdrop.svg`}
                alt={`${publicRuntimeConfig.appName} (Beams - Left Backdrop)`}
              />
            </section>

            {/* Beams (Right) */}
            <section className="absolute -top-[243px] sm:-top-[239px] lg:-top-[198px] xl:-top-[135px] left-auto -right-[188px] sm:-right-16 2xl:-right-28 bottom-auto transform rotate-[14deg] sm:rotate-0">
              <ImagesFill
                className="flex blur-[20px] relative h-[516px] 2xl:h-[516px] w-[393px] 2xl:w-[493px]"
                src={`${publicRuntimeConfig.staticFolderImgs}/backdrop/beams-right-backdrop.svg`}
                alt={`${publicRuntimeConfig.appName} (Beams - Right Backdrop)`}
              />
            </section>
          </Container>
        </div>

        <Container>
          <section className="mb-28">
            <div className="text-center">
              <h1 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] uppercase">
                TOP 30 CURATED PROJECTS
              </h1>
            </div>
            <div className="grid overflow-y-hidden snap-x overflow-x-auto relative mt-8 sm:mt-12">
              <section className="bg-[#2C2C2C] hidden sm:grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 snap-center w-full sm:w-max lg:w-full">
                <div className="col-span-full sm:col-span-1 flex items-center justify-center text-white font-bevietnam-pro text-sm font-semibold uppercase py-6 px-4 sm:min-w-[273px] lg:min-w-max">
                  <span className="hidden sm:flex">Projects name</span>
                  <span className="flex sm:hidden">type</span>
                </div>
                <div className="col-span-full sm:col-span-1 flex items-center justify-center text-white font-bevietnam-pro text-sm font-semibold uppercase py-6 px-4 sm:min-w-[273px] lg:min-w-max">
                  <span className="hidden sm:flex">Category</span>
                  <span className="flex sm:hidden">Projects name</span>
                </div>
                <div className="col-span-full sm:col-span-2 flex items-center justify-center text-white font-bevietnam-pro text-sm font-semibold uppercase py-6 px-4 sm:min-w-[273px] lg:min-w-max">
                  Desc
                </div>
              </section>
              <section className="grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 px-4 snap-center w-full">
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Komoverse
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Gaming
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Komoverse allows game developers to do what they do best:
                    create exciting games without having to worry about other
                    non-core attributes of game development.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Gadjah Society NFT
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Social Impact
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Social project for elephant preservation, 10% profit will be
                    given to Indonesian Elephant Conservation.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    CrowdFunding DApps
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Social Impact
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    A decentralized application that aims to revolutionize the
                    traditional crowdfunding process by leveraging the power of
                    blockchain technology.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Learnly
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Social Impact
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Online learning platform for education that enables learners
                    & creators by bridging and preparing for getting ready into
                    Web3 world.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Jogjatron
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    NFT
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    An NFT Marketplace and Metaverse project originating from
                    Indonesia, invites the world community to jointly make the
                    special region of Yogyakarta a region for implementing
                    blockchain technology.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Blockchain Based File Sharing Platform
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    NFT
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Leveraging blockchain technology and smart contracts, the
                    platform enables traceable file access while utilizing
                    decentralized and encrypted storage through IPFS.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Unzyp Lab
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    NFT
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Unzyp protocol is for On-Demand Tokenization (ODT) of
                    digital assets over the blockchain networks.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Hexa Play - Reco
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Gaming
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Web3 Games; Compete-To-Earn, Users and Players get rewarded
                    based on their skills and knowledge when playing the game.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Xellar
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    DeFi
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Decentralized crypto bank that acts as Web 2 gateway to
                    access DeFi and the wider crypto ecosystem
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    B2B NFT Launchpad Emveep
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    NFT
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    B2B NFT Launchpad platform designed to tackle issues such as
                    plagiarism and stolen artwork. Ensures the protection and
                    authenticity of artwork
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Meta Village Borobudur
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Environmental
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    NFT marketplace integrate with the NFT ownership of Meta
                    Village Borobudur. Connecting blockchain technology with
                    visitors' experiences such as ticketing, souvenirs,
                    vouchers, and sponsorship opportunities.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Sekuya Multiverse
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Gaming
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Sekuya Multiverse is a web3 gaming social world, explore
                    four worlds epic fantasy adventure MMORPG.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    CryptoKaget
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    DeFi
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    a giveaway and aid platform that allows users to choose
                    between fixed or random amounts to give. It utilizes a
                    Captcha system to prevent bots and ensure that only genuine
                    users can claim rewards, creating a secure environment for
                    all.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    NFTku
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    NFT
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    An innovative mobile application aims to streamline NFT
                    utilization and overcome the challenges associated with
                    interoperability and custom development efforts.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Social Rating Based Token
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    NFT
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Utilizes Decentralized Identity (DID) as a social rating
                    system within a token-based dystopian society.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Xomerce
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    SocialFi
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Decentralize commerce for Manufacture, Merchant, Shop,
                    Delivery, and User.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    RaffleWave
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Gaming
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Web3 Raffle Platform that enables users to effortlessly
                    create raffles and profit from their assets.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    TAO
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    DAO
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Trader DAO is a groundbreaking decentralized organization
                    that oversees the fees generated on the KepingAI Platform.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Urunan legacy
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Social Impact
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Aid and Crowfunding scheme method using Blockchain and smart
                    contract.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Rivernity
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    NFT
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    NFT minting with multichain capabilities and free mint NFT
                    tool
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Socioverse
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    SocialFi
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Blockchain-powered Social Media for Transparent Integration
                    and All-In-One Convenience.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    NFT Skills Certification
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Social Impact
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    A blockchain-based Dapp that harnesses and develops
                    individuals' skills, providing not only commercial
                    opportunities but also educational products tailored to
                    everyday job requirements
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Techpolitan Metaverse
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Metaverse
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Coworking space and physical game center evolved into a
                    Metaverse with a B2B focus.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Wagon Network
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    DeFi
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    a data network that connect all supply chain sectors and
                    shareholders, and a De-Fi platform that open up Indonesia
                    supply chain to crypto investor
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    WasteChain
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Environmental
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Waste management system utilizes blockchain technology to
                    improve transparency and accountability.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Analog x Crypto
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Social Impact
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Tokenization and securitization, utilizing digital
                    identifiers to authenticate real-world assets.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    MEET
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    SocialFi
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    Decentralized web3 events platform, designed to assist
                    attendees and event organizers in hosting their events
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    AdsToken
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    SocialFi
                  </div>

                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    AdsToken is a blockchain-based platform that rewards users
                    for receiving advertisements.
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    Encoteki
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    Environmental
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    NFT project aims to protect endangered animals in Indonesia
                    through real contributions by implementing value-adding
                    initiatives, benefit the local community, environment, and
                    NFT holders
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-6 py-4 sm:py-8 w-full">
                  <div className="col-span-full sm:col-span-1 text-primary sm:text-white text-left sm:text-center self-center uppercase mt-2">
                    FitOff
                  </div>
                  <div className="col-span-full sm:col-span-1 text-left sm:text-center self-center uppercase mt-2">
                    NFT
                  </div>
                  <div className="col-span-full sm:col-span-2 text-left sm:text-center self-center text-sm uppercase mt-2">
                    a decentralized weightlifting and calisthenics competition
                    app that lets people compete just through their smartphones
                    to tackle issues such as high fees and hard requirements
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Banner (Join The Builders) */}
          {/* <section
            className={`${Card.bnnerIn} relative mx-0 sm:mx-4 mb-10 sm:mb-18 lg:mb-24`}
          >
            <div className="overflow-hidden absolute inset-y-0 inset-x-0 z-[2]">
              <div className="absolute inset-y-0 inset-x-0 z-[2]">
                <Image
                  className="bg-center object-cover h-full w-full"
                  src={`${publicRuntimeConfig.staticFolderImgs}/backdrop/gridlanes-backdrop.svg`}
                  alt={`${publicRuntimeConfig.appName} (Gridlines - Backdrop)`}
                  height={757}
                  width={1320}
                />
              </div>
            </div>

            <div className="bnner-in-content supports-grid:grid gap-y-3 sm:gap-y-4 relative z-50">
              <h1 className="title text-otlne text-otlne-white font-w3w-bold text-[17px] sm:text-[39px] lg:text-[49px] xl:text-[72px] 2xl:text-[76px] font-bold leading-tight tracking-[3px] sm:tracking-normal text-center uppercase">
                JOIN THE BUILDERS!
              </h1>
              <div className="mx-auto w-max">
                <Buttons
                  typeBtn="btn-blank-link"
                  url="https://bit.ly/w3wregistration"
                  label="PARTICIPATE NOW"
                  variants="btn-outline-white"
                  size="base"
                  text="uppercase"
                  position="center"
                />
              </div>
            </div>
          </section> */}
        </Container>
      </Main>
    </>
  );
};

export default CuratedProjects;
