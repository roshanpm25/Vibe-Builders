import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';

export default function App() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalResult, setFinalResult] = useState(null);
  const [score, setScore] = useState(null);

  const handleFinish = (result, scoreData) => {
    setFinalResult(result);
    setScore(scoreData);
    setQuizFinished(true);
  };

  return (
    <div className="App">
      {!quizFinished ? (
        <Quiz onFinish={handleFinish} />
      ) : (
        <Result result={finalResult} scores={score} />
      )}
    </div>
  );
}
