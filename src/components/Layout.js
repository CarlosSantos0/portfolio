import React from "react";
import { Helmet } from "react-helmet";

import "../styles/main.css";

const Layout = ({ children, title = "Carlos Santos" }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main>{children}</main>
    </>
  );
};

export default Layout;
