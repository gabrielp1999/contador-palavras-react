import React from "react";

function ResultSpan(props) {
  let contWords = 0;
  if(props.text !== ''){
    contWords = props.text.split(' ').length;
  }

  return(
    <div className="engloba"> 
    {props.marcadLetters && (
      <div className="card">
        <span id="numerosLetras">
          {props.text.length} letras
        </span>
      </div>
    )}
    {props.marcadWords && (
      <div id="direita" className="card">
        <span id="numerosPalavras">
          {contWords} palavras
        </span>
      </div>
    )}
    </div>
  )
}

export default ResultSpan;