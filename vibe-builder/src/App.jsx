
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';

export default function App() {
  const [result, setResult] = useState(null);

  const handleFinish = (vibeResult) => {
    setResult(vibeResult);
  };

  const handleRestart = () => {
    setResult(null);
  };

  return (
    <div className="app">
      <h1>Vibe Check Quiz 2025</h1>
      {!result ? (
        <Quiz onFinish={handleFinish} />
      ) : (
        <>
          <Result result={result} />
          <button onClick={handleRestart}>Try Again</button>
        </>
      )}
    </div>
  );
}
