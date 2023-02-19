import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ProjectsFeatured = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projectslist">
        <StaticImage
          src="../images/project1.png"
          alt=""
          className="projectslist-projectimage"
        />
        <StaticImage
          src="../images/project2.png"
          alt=""
          className="projectslist-projectimage"
        />
        <StaticImage
          src="../images/project3.svg"
          alt=""
          className="projectslist-projectimage"
        />
      </div>
    </section>
  );
};

export default ProjectsFeatured;
