import React from "react";
import Presentation from "./Components/Presentation/Presentation";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex items-center justify-center">
        <Presentation />
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
