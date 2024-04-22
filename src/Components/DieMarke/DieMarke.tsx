import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./_DieMarke.module.scss";
import { describe } from "node:test";

const DieMarke = () => {
  const descData =
    "  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor";

  const [desclength, setDesclength] = useState(false);
  useEffect(() => {
    function truncateText() {
      if (window.innerWidth > 768) {
        setDesclength(true);
      } else {
        setDesclength(false);
      }
    }
    truncateText();
    window.addEventListener("resize", truncateText);
    return () => {
      window.removeEventListener("resize", truncateText);
    };
  }, []);

  return (
    <>
      <div className={style.DieMarke}>
        <div className="DieMarke_con">
          <div className="DieMarke_con__imagecount">
            <div className="DieMarke_con__imagecount__title">
              {" "}
              <h1>Die Marke ipalat® </h1>
            </div>
            <div className="DieMarke_con__imagecount__description">
              <p id="description">
                {desclength ? descData.slice(0, 100) : descData}
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
