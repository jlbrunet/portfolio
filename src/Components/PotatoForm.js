import React, {useEffect, useState} from "react";

const PotatoForm = props => {
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
  }, [windowWidth, maxHeight, maxWidth])

  const formShape = {
    borderRadius: props.borderRadius,
  };

  return(
    <div style={{...formShape, ...divSize}} className={`${props.color}`}></div>
  )
}

export default PotatoForm
