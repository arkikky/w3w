import React, { useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";

// # Get .config
const { publicRuntimeConfig } = getConfig();

import "@styles/globals.css";

// Layouts - Components
import Layouts from "@layouts/Layouts";

const App = ({ Component, pageProps }) => {
  // Wihtout (Navbar & Footer)
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/ico" sizes="16x16" href="/favicon.ico" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <meta
          name="keywords"
          content="web3, web3 news, web3 technology, crypto, crypto market, cryptonomics, blockchain, what is blockchain, blockchain technology, blockchain explained, blockchain news, metaverse, metaverse explained, metaverse expansion, metaverse news, nft, nft explained, nft meaning, nft art, nft crypto, nft crypto, how to sell nft art, nft exhibition"
        />
        <meta name="author" content={`${publicRuntimeConfig.author}`} />
        <link rel="mask-icon" href="/favicon.svg" color="#1E1E1E" />
        <meta name="msapplication-TileColor" content="#1E1E1E" />
        <meta name="theme-color" content="#1E1E1E" />
        <meta name="msapplication-navbutton-color" content="#1E1E1E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#1E1E1E" />

        <link rel="canonical" href={publicRuntimeConfig.siteUrl} />
      </Head>
      {/* Main (App) */}
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
};

export default App;

// Version 0.3.1
