import React from "react";

function ResultSpan(props) {
  return(
    <div className="engloba"> 
      <div className="card">
            <span id="numerosLetras">{props.text}</span>
      </div>
      <div id="direita" className="card">
          <span id="numerosPalavras">0 palavras</span>
      </div>
    </div>
  )
}

export default ResultSpan;