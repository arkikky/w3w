import getConfig from "next/config";
import dynamic from "next/dynamic";
import Head from "next/head";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css - Global
import "@styles/globals.css";

// Layouts - Components
const Layouts = dynamic(() => import("@layouts/Layouts"));

const App = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      {/* Head (Default - Init) */}
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

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
        <meta name="author" content={`${publicRuntimeConfig.siteAuthor}`} />
        <meta name="theme-color" content="#12E582" />
        <meta name="msapplication-navbutton-color" content="#12E582" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#12E582" />
      </Head>

      {/* Main (App) */}
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
};

export default App;
