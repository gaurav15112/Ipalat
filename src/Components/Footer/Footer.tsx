import React from "react";
import styles from "./_Footer.module.scss";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className={styles.Footer}>
        <div className="Footer_cont">
    
          <div className="Footer_cont_itemonetitle">
            <p>Ein Produkt von</p>
            <div className="Footer_cont_itemonetitle_logo">
              <Image
                src="/assest/footertemp.png"
                width={300}
                height={300}
                alt="picture"
              />
            </div>
          </div>

          <div className="Footer_cont_social">
            <div className="Footer_cont_social_insta">
              <Image
                src="/assest/instagramlogo.png"
                width={100}
                height={100}
                alt="picture"
              />
            </div>
            <div className="Footer_cont_social_linkd">
              <Image
                src="/assest/linkd.png"
                width={100}
                height={100}
                alt="picture"
              />
            </div>
          </div>

          <div className="Footer_cont_link">
            <ul>
              <li className="Footer_cont_links">Kontakt</li>
              <li className="Footer_cont_links">Impressum</li>
              <li className="Footer_cont_links">Datenschutz</li>
            </ul>
         
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
