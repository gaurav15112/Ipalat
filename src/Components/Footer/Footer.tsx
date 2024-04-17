import React from "react";
import styles from "./_Footer.module.scss";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className={styles.Footer}>
        <div className="Footer_cont">
          <div className="Footeritemonetitle">
            <p>Ein Produkt von</p>
            <div className="Footeritemonetitle_logo">
              <Image
                src="/assest/footertemp.png"
                width={300}
                height={300}
                alt="picture"
              />
            </div>
          </div>

          <div className="Footersocial">
            <div className="Footersocial_insta">
              <Image
                src="/assest/instagramlogo.png"
                width={100}
                height={100}
                alt="picture"
              />
            </div>
            <div className="Footersocial_linkd">
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
            {/* <div className='Footer_cont_phras_f'></div>
         <div className='Footer_cont_phras_s'></div>
         <div  className='Footer_cont_phras_t'></div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
