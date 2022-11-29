import React from "react";
import { NavBar } from "./components/header/NavBar";
import { Header } from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  );
};

export default App;
