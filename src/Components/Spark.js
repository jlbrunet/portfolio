import React from 'react';

const Spark = (props) => {
  const { rotate } = props

  return (
<div className={`w-10 h-2 after:bg-lime after:rounded-custom4 ${rotate} after:w-2 after:h-2 after:animate-spark after:block after:content-[""]`}></div>
  );
}

export default Spark;


// w-10 h-2 after:w-2 after:bg-lime after:rounded-custom4 after:animate-spark after:block after:content-none
