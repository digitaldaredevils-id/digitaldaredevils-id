import Head from "next/head";

export const HeadTitle = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>Digital Daredevils | {title}</title>
        <meta content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
