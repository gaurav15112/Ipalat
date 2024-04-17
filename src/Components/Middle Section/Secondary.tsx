import React from "react";
import Image from "next/image";
import styles from "./Secondary.module.scss";
const Secondary: React.FC = () => {
  return (
    <>
      <div className={styles.secondary}>
        <div className="secondary__title">
          <h2 >
            ipalat® <br/>
            Die Halspastille
          </h2>
          <br />
          <h3>
            
            Das Original. Bewährt bei <br />
            Heiserkeit & Hustenreiz
          </h3>
          <br />
          <h2 className="btn">mehr erfahren</h2>
        </div>
 
        <div className="secondary__second">
        <Image
            src="/assest/boxwithflow.png"
            width={1200}
            height={1200}
            alt="picture"
          />
        </div>  
      </div>
    </>
  );
};

export default Secondary;
