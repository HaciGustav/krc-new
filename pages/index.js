import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { terminalArt } from "@/utils/devCredentials";
import dynamic from "next/dynamic";
import LandingPage from "@/components/Homepage";

export default function Home() {
  console.log(terminalArt);
  return (
    <>
      <Head>
        <title>KRC Buchhaltung</title>
        <meta name="description" content="Buchaltung" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
      {/* <Header />
      <Footer /> */}
    </>
  );
}
