import Head from "next/head";

const MyHead = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />

    <link rel="icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon_io/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon_io/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon_io/favicon-16x16.png"
    />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
);

export default MyHead;
