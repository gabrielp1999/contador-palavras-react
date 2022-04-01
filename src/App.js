import React, { useState } from 'react';
import './App.css';
import Area from './components/Area';
import Checkbox from './components/Checkbox';
import ResultSpan from './components/ResultSpan';

function App() {
  document.title = 'Contador Palavras React';

  const [marcadLetters, setMarcadLetters] = useState(false);
  const [marcadWords, setMarcadWords] = useState(false);
  const [text, setText] = useState('');

  
  const displayLetters = () => {
      setMarcadLetters({
        show: true
      });

      if(marcadLetters.show === true){
      setMarcadLetters(false)
    }
  }

  displayLetters.bind()

  const displayWords = () => {
    setMarcadWords({
      show2: true
    })
    if(marcadWords.show2 === true){
      setMarcadWords(false)
    }
  }

  const counter = e => {
    
    setText(e.target.value.length);
  }

  return (
    <div className="App">
      <Area counter={counter}/>
      {marcadLetters.show 
        && <ResultSpan/> ||
        marcadWords.show2
        &&<ResultSpan
        text={text}
      /> }
      <Checkbox
        displayLetters={displayLetters}
        marcadLetters={marcadLetters}
        displayWords={displayWords}
        marcadWords={marcadWords}
      />
    </div>
  );
}

export default App;
<ResultSpan />
