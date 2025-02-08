import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import Body from "./Components/Body";
import Project from "./Components/Project";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Project />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
