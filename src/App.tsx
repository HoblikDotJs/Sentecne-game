import { QuestionArea } from './questionArea';
import { InputArea } from './inputArea';
import { SentenceArea } from './sentenceArea';
import { useSelector } from 'react-redux';
import { StateInterface } from './types';
import { Helmet } from 'react-helmet';

function App() {
  const { answer, index } = useSelector((state: StateInterface) => state)

  return (
    <>
      <Helmet>
        <title>Sentence game</title>
      </Helmet>
      <div className="app">
        <QuestionArea answer={answer} index={index} />
        <InputArea answer={answer} index={index} />
        <SentenceArea answer={answer} />
      </div>
    </>
  );
}


export default App;
