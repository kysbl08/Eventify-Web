import React from "react";
import imgLogo from "../../img/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="text-center py-6 dark:bg-slate-950 dark:text-white">
        <img src={imgLogo} alt="" />
      </footer>
    </>
  );
};

export default Footer;
