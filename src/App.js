import React from "react";
import Presentation from "./Components/Presentation";
import Background from "./Components/Background";

function App() {
  return (
    <div className="w-screen h-screen font-karla">
      <Background />
      <div className="w-full h-full flex items-center justify-center">
        <Presentation />
      </div>
    </div>
  );
}

export default App;
