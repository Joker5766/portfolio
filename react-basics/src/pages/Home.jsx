// src/pages/Home.jsx

import PageWrapper from "../components/layout/PageWrapper";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import ProjectsPreview from "../components/home/ProjectsPreview";
import Philosophy from "../components/home/Philosophy";
import Contact from "../components/home/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Hero />
        <About />
        <Skills />
        <ProjectsPreview />
        <Philosophy />
        <Contact />
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Home;
