import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const AboutMe = () => {
  return (
    <section id="aboutme">
      <h2>About me</h2>
      <div className="skillsilustration">
        <StaticImage
          src="../images/javascript.png"
          alt=""
          className="skillsilustration-languageimage"
        />
        <StaticImage
          src="../images/javascript.png"
          alt=""
          className="skillsilustration-languageimage"
        />

        <StaticImage
          src="../images/meditation.png"
          alt=""
          className="skillsilustration-meditationimage"
        />
        <StaticImage
          src="../images/javascript.png"
          alt=""
          className="skillsilustration-languageimage"
        />
        <StaticImage
          src="../images/javascript.png"
          alt=""
          className="skillsilustration-languageimage"
        />
        <StaticImage
          src="../images/javascript.png"
          alt=""
          className="skillsilustration-languageimage"
        />
      </div>
    </section>
  );
};

export default AboutMe;
