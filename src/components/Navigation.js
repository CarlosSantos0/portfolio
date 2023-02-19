import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <nav className="navigation">
      <a className="brand" href="/">
        CS
      </a>

      <ul className={`navigation-list ${openDrawer && "drawer"}`}>
        <li className="navigation-item selected">HOME</li>
        <li className="navigation-item">PROJECTS</li>
        <li className="navigation-item">SKILLS</li>
        <li className="navigation-item">CONTACT</li>
      </ul>

      <a className="navigation-action">BLOG</a>

      {openDrawer ? (
        <StaticImage
          onClick={() => setOpenDrawer(!openDrawer)}
          src="../images/close.png"
          alt=""
          className="navigation-close-button"
        />
      ) : (
        <StaticImage
          onClick={() => setOpenDrawer(!openDrawer)}
          src="../images/drawer.png"
          alt=""
          className="navigation-drawer-button"
        />
      )}
    </nav>
  );
};

export default Navigation;
