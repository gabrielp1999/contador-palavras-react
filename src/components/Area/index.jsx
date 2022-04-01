import React from 'react';
function Area(props) {

  return(
    <>
      <h2>Contador De Palavras</h2>
      <textarea 
        id="area" 
        cols="30" 
        rows="10" 
        onKeyUp={props.counter}
      />
    </>
  )

}

export default Area;