import Head from "next/head";
import { Header } from "@/components/organisms/header";
import { ProfileSection } from "@/components/organisms/profile-section";
import { LinksSection } from "@/components/organisms/links-section";
import { Footer } from "@/components/organisms/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clínica Médica Vale Viver</title>
        <meta name="description" content="LinkTree da Clínica Médica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto px-4 py-8 max-w-md">
          <Header />
          <ProfileSection />
          <LinksSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
