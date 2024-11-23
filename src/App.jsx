import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Section2 from "./components/Section_2/Section2";
import Section3 from "./components/Section_3/Section3";
import Section44 from "./components/Section_4/Section4";
import Section5 from "./components/Section_5/Section5";
import Section6 from "./components/Section_6/Section6";
import Section7 from "./components/Section_7/Section7";
import Section8 from "./components/Section_8/Section8";
import Section9 from "./components/Section_9/Section9";
function App() {
  return (
    <>
      <Navbar />
      <Section />
      <Section2 />
      <Section3 />
      <Section44 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </>
  );
}

export default App;
