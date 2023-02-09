import React from 'react';
import { Game } from './Game.jsx';
import { Result } from './Result';
import './index.scss';

function App() {
  const [questions, setQuestions] = React.useState({});
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const question = questions[step];

  React.useEffect(() => {
    fetch('./questions.json')
    .then((res) => res.json())
    .then((json) => {
      setQuestions(json.questions);
    })
    .catch((err) => {
      console.warn(err);
      alert('Ошибка при загрузке вопросов!');
    })
    .finally(() => setIsLoading(false));
  }, []);
  
  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct - 1) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {
        step !== questions.length 
        ? <Game isLoading={isLoading} step={step} question={question} questionsLength={questions.length} onClickVariant={onClickVariant}/>
        : <Result correct={correct} questionsLength={questions.length}/>
      }
    </div>
  );
}

export default App;
