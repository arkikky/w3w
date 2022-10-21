import Head from "next/head";

import "../styles/globals.css";
import "../styles/typography.css";

import "../styles/components/backdrop.css";
import "../styles/components/box.css";
import "../styles/components/card.css";
import "../styles/components/navbar.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta
          name="keywords"
          content="web3, web3 news, web3 technology, crypto, crypto market, cryptonomics, blockchain, what is blockchain, blockchain technology, blockchain explained, blockchain news, metaverse, metaverse explained, metaverse expansion, metaverse news, nft, nft explained, nft meaning, nft art, nft crypto, nft crypto, how to sell nft art, nft exhibition"
        />
        <meta name="author" content="Coinfest Asia 2022" />
        <meta name="theme-color" content="#12E582" />
        <meta name="msapplication-navbutton-color" content="#12E582" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#12E582" />

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

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
