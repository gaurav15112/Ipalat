import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import Secondary from "@/Components/Middle Section/Secondary";
import Article from "@/Components/Article/Article";
import News from "@/Components/News/News";
import DieMarke from "@/Components/DieMarke/DieMarke";
import Faq from "@/Components/Faq/Faq";
import Footer from "@/Components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="container_inner">
          <Header />
          <Hero />
        </div>

        <hr />

        <div className="container_inner">
          <Secondary />
        </div>
        <div className="container_white">
          <div className="container_inner">
            <Article />
          </div>
        </div>
        <div className="news__smallbg"></div>

        <div className="container_white">
          <div className="container_inner">
            <News />
          </div>

          <div className="container_grey">
            <div className="container_inner">
              <DieMarke />
            </div>
          </div>
        </div>
      </div>
      <div className="container_white">
        <div className="container_inner">
          <Faq />
        </div>
         
         <div className="container_red">
        <div className="container_inner">
          <Footer />
        </div> 
          </div>
      </div>
    </>
  );
}
