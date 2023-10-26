import React, {useEffect, useState} from "react";

function App() {
  const maxWidth = 28
  const maxHeight = 24

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [divSize, setSize] = useState({width: `${maxWidth}rem`, height: `${maxHeight}rem`})

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  })

  useEffect(() => {
    const percentage = (windowWidth / 1500)
    const formSize = {width: `${percentage * maxWidth}rem`, height: `${percentage * maxHeight}rem`};
    setSize(formSize)
  }, [windowWidth])

  const formShapeOne = {
    borderRadius: "30% 40% 60% 40% / 70% 50% 50% 30%"
  };

  return (
    <div className="w-screen h-screen bg-green relative">
      <div style={{...formShapeOne, ...divSize}} className="bg-lime absolute top-1/4 left-1/4"></div>
    </div>
  );
}

export default App;
