import Head from "next/head";

export const HeadTitle = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>Daredevils | {title}</title>
        <meta content={description} />
      </Head>
    </>
  );
};
