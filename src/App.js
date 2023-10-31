import React from "react";
import Presentation from "./Components/Presentation/Presentation";
import About from "./Components/About";

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex items-center justify-center">
        <Presentation />
      </div>
      <About />
    </div>
  );
}

export default App;
