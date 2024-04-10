import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import Secondary from "@/Components/Middle Section/Secondary";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero/>
        <hr />
        <Secondary/>
       
      </div>
    </>
  );
}
