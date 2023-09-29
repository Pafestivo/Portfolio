import React from "react";
import "@/styles/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <p>{`I dove into the world of web development with the enthusiasm of a child, and it turned out to be a life-changing decision for me. I've learned to think differently and had the chance to meet and work with the most incredible people.
      My time as a web developer has been packed with solving challenging tasks and getting hands-on experience with advanced technologies. This journey has brought me to a point where I truly believe there isn't a problem I can't solve.`}</p>
      <h2 className="second-section">Key Skills</h2>
      <div className="skills-container">
        <div>JavaScript</div>
        <div>TypeScript</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>Next.js</div>
        <div>React.js</div>
        <div>Express</div>
        <div>MySQL</div>
      </div>
    </div>
  );
};

export default AboutMe;
