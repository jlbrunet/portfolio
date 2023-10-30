import React from "react";
import Presentation from "./Components/Presentation/Presentation";
import Background from "./Components/Background";
import About from "./Components/About";

function App() {
  return (
    <div className="w-full h-full font-karla">
      <Background />
      <div className="w-full h-full flex items-center justify-center">
        <Presentation />
      </div>
      <About />
    </div>
  );
}

export default App;
