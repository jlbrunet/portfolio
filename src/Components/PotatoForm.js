import React, {useEffect, useState} from "react";

function PotatoForm(props) {
  const maxWidth = props.maxWidth
  const maxHeight = props.maxHeight

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
    borderRadius: props.borderRadius
  };

  return(
    <div style={{...formShapeOne, ...divSize}} className={`bg-lime absolute ${props.positionTop} ${props.positionLeft}`}></div>
  )
}

export default PotatoForm
