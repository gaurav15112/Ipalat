import React from "react";

import styles from "./Hero.module.scss";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className="hero__circleparent">
          <div className="hero__circleparent__child">
            <h4>Das Original. Seit 1937 in Apotheken.</h4>
            <h1>
              Das Mittel <br /> gegen den <br />
              rauen Ton.
            </h1>
          </div>
        </div>

        <div className="hero__imageparent">
          <div className="hero__imageparent__imagechild">
            <Image
              src="/assest/box.png"
              width={500}
              height={587}
              alt="Picture of the box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
