import React from "react";
import AboutMe from "../components/AboutMe";
import HeroPrincipal from "../components/HeroPrincipal";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import ProjectsFeatured from "../components/ProjectsFeatured";

const IndexPage = () => {
  return (
    <Layout>
      <Navigation />
      <HeroPrincipal />
      <ProjectsFeatured />
      <AboutMe />
    </Layout>
  );
};

export default IndexPage;
