import React from "react";
import "@/styles/header.css";
import { mergeOne } from "@/app/fonts";

const Header = () => {
  return (
    <div className={`header-container ${mergeOne.className}`}>
      <div className="header-content-container">
        <p className="title">Or Rodrigez</p>
        <div className="nav">
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
