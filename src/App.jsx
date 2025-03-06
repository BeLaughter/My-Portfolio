import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import Body from "./Components/Body";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Project />
      <Skills />
      <Contact />
      <div className="b2top">
        <a href="#nav">^</a>
      </div>
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
