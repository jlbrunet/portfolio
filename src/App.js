import React from "react";
import PotatoForm from "./Components/PotatoForm"

function App() {
  return (
    <div className="w-screen h-screen bg-green relative">
      <PotatoForm maxWidth="28" maxHeight="24" positionTop="top-1/4" positionLeft="left-1/4" borderRadius="30% 40% 60% 40% / 70% 50% 50% 30%"/>
    </div>
  );
}

export default App;
