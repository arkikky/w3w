import getConfig from "next/config";
import Head from "next/head";

// # Get .config
const { publicRuntimeConfig } = getConfig();

const HeadSeo = ({
  siteTitle,
  title,
  siteDescription,
  description,
  images = null,
}) => {
  // # Env .var
  const addSiteTitle = siteTitle
    ? siteTitle
    : `${publicRuntimeConfig.siteTitle}`;
  const addSiteDesc = siteDescription
    ? siteDescription
    : `${publicRuntimeConfig.siteDesc}`;
  const addTitle = title ? title : `${publicRuntimeConfig.siteTitle}`;
  const addDesc = description ? description : `${publicRuntimeConfig.siteDesc}`;
  const addImgs = images ? images : (images = false);

  return (
    <>
      <Head>
        <title>{`${addSiteTitle || addTitle}`}</title>
        <meta name="title" content={addTitle} />
        <meta name="description" content={addSiteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${publicRuntimeConfig.siteUrl}`} />
        <meta property="og:title" content={addTitle} />
        {addDesc && <meta property="og:description" content={addDesc} />}
        <meta property="og:site_name" content={addSiteTitle} />
        {addImgs && <meta property="og:image" content={addImgs} />}
        <meta property="og:locale" content="id_ID" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content={`${publicRuntimeConfig.tags}`} />
        <meta
          property="twitter:creator"
          content={`${publicRuntimeConfig.author}`}
        />
        <meta property="twitter:title" content={addTitle} />
        {addDesc && <meta property="twitter:description" content={addDesc} />}
        {addImgs && <meta property="twitter:image" content={addImgs} />}
      </Head>
    </>
  );
};

export default HeadSeo;
