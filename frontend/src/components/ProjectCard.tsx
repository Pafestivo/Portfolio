import Image from "next/image";
import React from "react";
import "@/styles/projectCard.css";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ image, title, description, url }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <Image
        src={image}
        alt="project-banner"
        fill
        style={{
          objectFit: "fill",
          objectPosition: "center",
        }}
      />
      <div className="project-desc">
        <p className="emphasized">{title}</p>
        <p>{description}</p>
        <a href={url} target="_blank">
          <p className="btn">View</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
