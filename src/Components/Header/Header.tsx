import { link } from "fs";
import React, { use, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    console.log("clicked");

    setOpen(!isOpen);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className="navbar__img">
        <Image
            width={1000}
            height={1000}
            src={"/assest/ipalatlogo1.png"}
            alt="logo"
          />
        </div>

        <ul className={`navbar__item  ${isOpen ? "navbar__open" : ""} `}>
          <Link href="#">
            <li>Unsere Produkte</li>
          </Link>
          <Link href="/">
            <li>Ratgeber und Hilfe</li>
          </Link>
          <Link href="/">
            <li>Service</li>
          </Link>
        </ul>

        <div onClick={handleToggle} className="navbar__MenuButton ">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
