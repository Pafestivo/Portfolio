"use client";
import React from "react";
import "@/styles/header.css";
import { mergeOne } from "@/app/fonts";

const Header = () => {
  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`header-container ${mergeOne.className}`}>
      <div className="header-content-container">
        <p className="title">Or Rodrigez</p>
        <div className="nav">
          <p onClick={() => handleNavigation("home")}>Home</p>
          <p onClick={() => handleNavigation("about")}>About</p>
          <p onClick={() => handleNavigation("projects")}>Projects</p>
          <p onClick={() => handleNavigation("connect")}>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
