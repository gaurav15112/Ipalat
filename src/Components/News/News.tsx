import React from "react";
import styles from "./_News.module.scss";
import Image from "next/image";
const News = () => {
  return (
    <>
      <div className={styles.news}>
        <div className="news_">
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </>
  );
};

export default News;

const NewsCard = () => {
  return (
    <div className="news__">
      <div className="news__circle">
        <div className="news__circle__image">
          <Image
            width={358}
            height={358}
            src={"/assest/Ellipse.png"}
            alt="logo"
          />
        </div>
        <div className="news__circle__txt">
          <h3>Ossi comnimu scimodictus asperum et voloreic</h3>
        </div>
        <div className="news__circle__mehr">
          <h2>mehr...</h2>
        </div>
      </div>
    </div>
  );
};
