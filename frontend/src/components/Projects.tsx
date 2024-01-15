import React from "react";
import "@/styles/projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="projects-area">
      <h1>Projects</h1>

      <div className="projects-list">
        <ProjectCard
          image="/wecome-banner.png"
          title="WeCome"
          description="RSVP Event Management Platform"
          url="https://il.wecome.co.il/"
        />

        <ProjectCard
          image="/israelTours-banner.png"
          title="Israel Tours"
          description="Website for israeli tour guides company"
          url="https://real-israel-tours.vercel.app/"
        />

        {/* <ProjectCard
          image="/meet4meet-banner.png"
          title="Meet4Meet"
          description="Appointment Scheduling Platform (Work In Progress)"
          url="https://go.meet4meet.com/"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
