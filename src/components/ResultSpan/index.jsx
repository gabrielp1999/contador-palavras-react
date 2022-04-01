import React, { useState,useEffect } from "react";

function ResultSpan(props) {
  const [countWords, setCountWords] = useState(0);
  const [countLetters, setCountLetters] = useState(0);

  useEffect(() => {
    if(props.text !== ''){
      setCountWords(props.text.split(' ').length);
    }else{
      setCountWords(0);
    }
    setCountLetters(props.text.length);
  }, [props]);

  return(
    <div className="engloba"> 
    {props.marcadLetters && (
      <div className="card">
        <span id="numerosLetras">
          {countLetters} letras
        </span>
      </div>
    )}
    {props.marcadWords && (
      <div id="direita" className="card">
        <span id="numerosPalavras">
          {countWords} palavras
        </span>
      </div>
    )}
    </div>
  )
}

export default ResultSpan;