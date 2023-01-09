import Head from "next/head";

const HeadSeo = ({
  siteTitle,
  title,
  siteDescription,
  description,
  images = null,
}) => {
  const addSiteTitle = siteTitle
    ? siteTitle
    : `${process.env.NEXT_PUBLIC_SITE_TITLE}`;
  const addTitle = title ? title : "Web 3 Week";
  const addDesc = description
    ? description
    : "Web 3 Week (W3W), Builders convention focused on web3";
  const addImgs = images ? images : null;

  return (
    <>
      <Head>
        <title>{`${addSiteTitle || addTitle}`}</title>
        <meta name="title" content={addTitle} />
        <meta name="description" content={siteDescription} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}`}
        />
        <meta property="og:title" content={addTitle} />
        {addDesc && <meta property="og:description" content={addDesc} />}
        <meta property="og:site_name" content={addSiteTitle} />
        {addImgs && <meta property="og:image" content={addImgs} />}
        <meta property="og:locale" content="id_ID" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:site"
          content={`${process.env.NEXT_PUBLIC_TAGS}`}
        />
        <meta
          property="twitter:creator"
          content={`${process.env.NEXT_PUBLIC_TAGS}`}
        />
        <meta property="twitter:title" content={title} />
        {addDesc && <meta property="twitter:description" content={addDesc} />}
        {addImgs && <meta property="twitter:image" content={addImgs} />}
      </Head>
    </>
  );
};

export default HeadSeo;
