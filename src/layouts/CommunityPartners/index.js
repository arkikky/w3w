import React from "react";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
import PostLink from "@components/UI/Post/PostLink";

const LyCommunityPartners = () => {
  return (
    <>
      <section className="flex flex-col px-0 sm:px-4 my-[88px] sm:my-[154px]">
        <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] text-center uppercase px-4">
          Previous COMMUNITY PARTNERS
        </h2>
        <div className="inline-flex flex-wrap items-center justify-start gap-y-6 w-full mt-8">
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/alta.alchemy/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/alterra.svg`}
              alt={`${publicRuntimeConfig.appName} (Alterra Academy - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/baliblockchain/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/bali-blockchain community.svg`}
              alt={`${publicRuntimeConfig.appName} (Bali Blockchain Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://t.me/dataengineeringid"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/data-engineering-indonesia.png`}
              alt={`${publicRuntimeConfig.appName} (Data Engineering Indonesia Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://t.me/codeigniterindonesia"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/code-igniter-indonesia.png`}
              alt={`${publicRuntimeConfig.appName} (Code Igniter Indonesia Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/datascienceindo/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/data-science-indonesia.png`}
              alt={`${publicRuntimeConfig.appName} (Petani Kode - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/gdgbali/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/gdg-bali.svg`}
              alt={`${publicRuntimeConfig.appName} (GDG Bali - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="http://facebook.com/indoxploit/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/indoxploit.png`}
              alt={`${publicRuntimeConfig.appName} (IndoXploit  - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://t.me/indonesiapahambitcoin"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/indonesia-paham-bitcoin.png`}
              alt={`${publicRuntimeConfig.appName} (Indonesia Paham Bitcoin - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://linktr.ee/itsavirus"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/itsavirus.png`}
              alt={`${publicRuntimeConfig.appName} (Itsavirus - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://s.id/jvmid"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/jvm-dev.svg`}
              alt={`${publicRuntimeConfig.appName} (JVM Developer ID - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://t.me/komunitascoinvestasi"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/coinvestasi-semua-bisa-crypto.svg`}
              alt={`${publicRuntimeConfig.appName} (Coinvestasi Semua Bisa Crypto - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/lombokblockchainsociety/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/lombok-blockchain-society.png`}
              alt={`${publicRuntimeConfig.appName} (Lombok Blockchain Society - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/majalabs_xyz/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/maja-labs.svg`}
              alt={`${publicRuntimeConfig.appName} (Maja Labs - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://t.me/nodejsid"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/node-js-indonesia.png`}
              alt={`${publicRuntimeConfig.appName} (NodeJS Indonesia - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/nvp.dev/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/nvp-bali.png`}
              alt={`${publicRuntimeConfig.appName} (NVP Bali - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/oxlabsgroup/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/oxlabs.png`}
              alt={`${publicRuntimeConfig.appName} (Oxlabs - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/petanikode/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/petani-kode.png`}
              alt={`${publicRuntimeConfig.appName} (Petani Kode Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://t.me/PHPIDforStudent"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/phpidfor.png`}
              alt={`${publicRuntimeConfig.appName} (PHPIDfor Student Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/startupbandung/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/startup-bandung.svg`}
              alt={`${publicRuntimeConfig.appName} (Startup Bandung Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/studi_devsecops/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/dev-sec-ops.png`}
              alt={`${publicRuntimeConfig.appName} (DevSecOps Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://t.me/surabayadev"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/surabaya-dev.png`}
              alt={`${publicRuntimeConfig.appName} (SurabayaDev Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://t.me/UndergroundGemsIndonesia"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/underground-gems-indonesia.svg`}
              alt={`${publicRuntimeConfig.appName} (Underground Gems Indonesia Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url=""
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/aku-mitra-digital.svg`}
              alt={`${publicRuntimeConfig.appName} (Aku Mitra Digital Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/ganeshadao/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/ganesha-dao.png`}
              alt={`${publicRuntimeConfig.appName} (Ganesha DAO Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/voxthree/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/vox3.png`}
              alt={`${publicRuntimeConfig.appName} (VOX3 Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://t.me/js_id"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/js-indonesia.png`}
              alt={`${publicRuntimeConfig.appName} (JS Indonesia Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://www.instagram.com/femalegeek_org/"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/femalegeek.png`}
              alt={`${publicRuntimeConfig.appName} (FemaleGeek Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url="https://t.me/metadevwtf"
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/metdev.png`}
              alt={`${publicRuntimeConfig.appName} (MetDev Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url=""
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/ibmc.png`}
              alt={`${publicRuntimeConfig.appName} (IBMC Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url=""
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/wgs-hub.png`}
              alt={`${publicRuntimeConfig.appName} (WGS Hub Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <PostLink
            typePost="blank-link"
            url=""
            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
          >
            <Image
              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
              src={`${publicRuntimeConfig.staticFolderImgs}/community-partners/anak-teknik-indonesia.png`}
              alt={`${publicRuntimeConfig.appName} (Anak Teknik Indonesia Community - Community Partners)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              height={140}
              width={220}
              quality="87"
            />
          </PostLink>
          <div className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 py-7 px-0 h-full">
            <div className="bg-[#5A5A5A] blur-lg h-[38px] sm:h-[48px] w-[126px] sm:w-[176px]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LyCommunityPartners;
