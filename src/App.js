import { useState } from 'react';
import './App.css';
import { questionsHTMLCSS } from './questions';
import Game from './Component/Game/Game';
import Result from './Component/Result/Result';

function App() {
  const [step, setStep] = useState(0);
  const question = questionsHTMLCSS[step];
  const [answerTrue, setAnswerTrue] = useState(0);

  const onClickVariant = index => {
    setStep(step + 1);
    if (index === question.correct) {
      setAnswerTrue(answerTrue + 1);
      console.log(answerTrue);
    }
  };
  return (
    <div className="App">
      {step !== questionsHTMLCSS.length ? (
        <Game onClickVariant={onClickVariant} step={step} question={question} />
      ) : (
        <Result answerTrue={answerTrue} />
      )}
    </div>
  );
}

export default App;
