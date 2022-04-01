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
      setMarcadLetters(!marcadLetters);
  }

  const displayWords = () => {
    setMarcadWords(!marcadWords);
  }

  const counter = e => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <Area counter={counter}/>
       <ResultSpan 
        marcadLetters={marcadLetters} 
        marcadWords={marcadWords} 
        text={text} />
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