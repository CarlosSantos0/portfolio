import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroPrincipal = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <span>Hello, I'm </span>
        <h1 className="hero-title">Carlos Santos</h1>

        <div class="hero-animated-subtitle">
          <h3 className="hero-subtitle">Software Developer</h3>
          <h3 className="hero-subtitle">Full Stack Developer</h3>
          <h3 className="hero-subtitle">Web Developer</h3>
        </div>

        <a className="hero-actionbutton">SEE MY WORK</a>
        <div className="hero-social">
          <StaticImage
            src="../images/linkedin.png"
            alt=""
            className="hero-social-image"
          />
          <StaticImage
            src="../images/github.png"
            alt=""
            className="hero-social-image"
          />
          <StaticImage
            src="../images/gmail.png"
            className="hero-social-image"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPrincipal;
