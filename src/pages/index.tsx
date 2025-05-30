import type { NextPage } from "next";
import Head from "next/head";
import { Profile } from "@/components/templates/profile";
import { clinicData } from "@/lib/constants";

const Home: NextPage = () => {
  const { name, description, contact, social } = clinicData;

  return (
    <>
      <Head>
        <title>Vale Viver - Clínica Médica | Links</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Profile
        name={name}
        description={description}
        schedule={contact.schedule}
        address={contact.address}
        phone={contact.phone}
        whatsapp={contact.whatsapp}
        facebookUrl={social.facebook}
        instagramUrl={social.instagram}
        email={contact.email}
      />
    </>
  );
};

export default Home;
