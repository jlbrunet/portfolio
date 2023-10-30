import React from "react";
import Presentation from "./Components/Presentation/Presentation";
import Background from "./Components/Background";

function App() {
  return (
    <div className="w-full h-full font-karla">
      <Background />
      <div className="w-full h-full flex items-center justify-center">
        <Presentation />
      </div>
    </div>
  );
}

export default App;
