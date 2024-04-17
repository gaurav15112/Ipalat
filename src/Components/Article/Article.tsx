import React from "react";
import styles from "./Article.module.scss";
import Image from "next/image";
const Article = () => {
  return (
    <>
      <div className={styles.timg}>

      <div className="timg__heading">
          <h2> In-Hals-Stoffe</h2>
        </div>

        

        
        <div className="timg__article"> 
          <div className="timg__article__image">
            <Image
              src="/assest/circles.png"
              width={1200}
              height={1200}
              alt="picture"
              />
          </div>


          <div className="timg__article__titlesecond">
           <p>Ein klares Nein: ipalat® ist und bleibt ein Klassiker, dessen
            natürliche Inhaltsstoffe und deren Zusammensetzung sich nicht
            verändert haben. Die Pastillen sind die gleichen, auch wenn sich das
            Aussehen der Verpackung geändert hat. <br /> <br />  Auch die Dosen tragen
            weiterhin den bewährten Plopp-Verschluss, der sich mit nur einer
            Hand öffnen lässt.</p> 
            
            <div className="timg__article__titlesecond__fourlogo">
              <div className="timg__article__titlesecond__fourlogo__fc">
                <div className="logoimage">
                  
                   <Image  width={100} height={100} src={'/assest/logo.png'} alt="logo"/>

                 <Image width={50} height={15} src={'/assest/zuckerfrei.png'} alt="logo"/> 
                </div>
                <div className="logoimage">
                    <Image width={100} height={100} src={'/assest/logo.png'} alt="logo"/>

                 <Image width={50} height={15} src={'/assest/classic.png'} alt="logo"/> 
                </div>
                <div className="logoimage">
                  <Image width={100} height={100} src={'/assest/logo.png'} alt="logo"/>

                 <Image width={50} height={15} src={'/assest/honigmild.png'} alt="logo"/> 
                </div>
                <div className="logoimage">
                  <Image  width={100} height={100} src={'/assest/ipalatlogo.png'} alt="logo"/>

                <Image width={50} height={15} src={'/assest/hydromed.png'} alt="logo"/> 
                </div>

              </div>
              
            </div>
          </div>

        </div>

       
              </div>
    
    </>
  );
};

export default Article;
