"use client";
import Image from "next/image";
import React from "react";
import "@/styles/pageCover.css";

const PageCover = () => {
  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    console.log("element", element);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="cover-page-container">
      <div className="cover-page-content-container">
        <div className="info">
          <div className="block">
            <h1 className="bold-accent">Hey!</h1>
            <h1>I am Or Rodrigez</h1>
          </div>
          <div className="block">
            <p>A Full-stack Web Developer,</p>
            <p>building complex web applications,</p>
            <p>and I love what I do.</p>
          </div>

          <div className="block">
            <p onClick={() => handleNavigation("projects")} className="btn">
              Projects
            </p>
          </div>
        </div>

        <div className="image-container">
          <div className="image">
            <Image src="/no-bg-headshot.png" alt="or's headshot" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
