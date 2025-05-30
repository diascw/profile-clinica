import type { NextPage } from "next";
import Head from "next/head";
import { clinicData } from "@/lib/constants";

const Home: NextPage = () => {
  const { name, description, contact, social } = clinicData;

  return (
    <>
      <Head>
        <title>Vale Viver - Clínica Médica | Links</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};

export default Home;
