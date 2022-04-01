import React from 'react';

function Checkbox(props) {

  return(
      <div className="engloba"> 
        <div className="card">
            <input 
              type="checkbox" 
              value={props.marcadLetters}
              onChange={props.displayLetters}
            />  
            <label for="">exibir quantidade de letras</label>
        </div>
        <div className="card">
            <input 
              type="checkbox"
              value={props.marcadWords}
              onChange={props.displayWords}
            />
            <label for="">exibir quantidade de palavras</label>
        </div>
      </div>
  )
}

export default Checkbox;
