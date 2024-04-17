import React from "react";
import Image from "next/image";
import style from "./_DieMarke.module.scss";
const DieMarke = () => {
  return (
    <>
      <div className={style.DieMarke}>
        <div className="DieMarke_con">
          <div className="DieMarke_con__imagecount">
            <div className="DieMarke_con__imagecount__title"> <h1>
            Die Marke ipalat® </h1></div>
            <div className="DieMarke_con__imagecount__description">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
            </div>
            <div className="DieMarke_con__imagecount__footer">
             
             <h2> weiter lesen</h2>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default DieMarke;
