import { link } from "fs";
import React, { use, useState } from "react";
import Link from "next/link";
import styles  from './Header.module.scss'
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
          <img
            src="https://s3-alpha-sig.figma.com/img/f097/31f0/346fb2bea6c200db4ffd547ccfb32ced?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KaxdOocbqkXFV22vVIQS03uv3CD0WiiXCOJVwy8Ee4fjzwTJX5fwlFcR533OvUTjLMioJ1iUzPu1CPzYTpr~IVWkWN3RqJI0hDXMLnc2sZEv1sR-dgRdYAuxWnbRhzmo6XE-qWvwRvBbFRjYYV~ywj75b77-tpmc9QzL2yYflhlEih2yAHooNizX2ySkBjpgc-XXE64Hcw3qhDF2N6eGNjYQ6NsC6Ipg3PCjfEvWAy-HdgINW8OToVFoipqMA0aWeZsLu97SmAwjWxs6-0Q-SiWuJvIusEyY0SnfMMircJ08mjwnxrqztizUbuYjQ55B4JfmrxUMt6OEc5cpFplk3Q__"
            alt="img"
          />
        </div>

        
         <ul className={`navbar__item  ${isOpen ? 'navbar__open': ""} `}>
            <Link href="#"><li>Unsere Produkte</li></Link>
           <Link href="/"><li >Ratgeber und Hilfe</li></Link>
          <Link href="/"><li>Service</li></Link>
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
