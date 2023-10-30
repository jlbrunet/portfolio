import React from "react";
import PotatoForm from "./Components/PotatoForm"

function App() {
  return (
    <div className="w-screen h-screen bg-green relative">
      <PotatoForm
        maxWidth="28"
        maxHeight="24"
        positionTop="10%"
        positionLeft="10%"
        borderRadius="30% 40% 60% 40% / 70% 50% 50% 30%"
        color="bg-lime"
      />
      <PotatoForm
        maxWidth="24"
        maxHeight="24"
        positionTop="30%"
        positionLeft="30%"
        borderRadius="40% 50% 70% 30% / 70% 60% 50% 30%"
        color="bg-purple"
      />
      <p>Salut, moi c'est Julie</p>
      <p>Développeuse Web Fullstack</p>
    </div>
  );
}

export default App;
