import React, { useEffect } from 'react';
import { QuestionArea } from './questionArea';
import { InputArea } from './inputArea';
import { SentenceArea } from './sentenceArea';
import { useSelector } from 'react-redux';
import { stateInterface } from './types';


function App() {
  const { answer, index } = useSelector((state: stateInterface) => state)
  useEffect(() => {
    document.title = "Sentence game";
  }, []);

  return (
    <div className="app">
      <QuestionArea answer={answer} index={index} />
      <InputArea answer={answer} index={index} />
      <SentenceArea answer={answer} />
    </div>
  );
}


export default App;
