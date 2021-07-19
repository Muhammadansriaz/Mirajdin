import React from "react";
import style from "./Footer.module.css";
import footerImage from "../../assests/logo.png";

function Footer() {
  return (
    <div className={style.footer}>
      <img width="50%" height="50%" src={footerImage} />
    </div>
  );
}

export default Footer;
