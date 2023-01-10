import Head from "next/head";

import "../styles/global.css";
import "../styles/typography.css";

// Components
import "../styles/components/navbar.css";
import "../styles/components/backdrop.css";
import "../styles/components/card.css";
import "../styles/components/box.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

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
        <meta name="author" content="W3W | Web 3 Week" />
        <meta name="theme-color" content="#12E582" />
        <meta name="msapplication-navbutton-color" content="#12E582" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#12E582" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
