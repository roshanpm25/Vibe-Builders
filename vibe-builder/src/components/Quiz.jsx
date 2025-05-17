import React, { useState } from 'react';
import questions from '../data/questions';
import QuestionCard from './QuestionCard';

export default function Quiz({ onFinish }) {
  const [currentQn, setCurrentQn] = useState(0);
  const [score, setScore] = useState({
    gremlin: 0,
    chaiCore: 0,
    desiSlayer: 0,
    calmKarma: 0,
  });

  const calculateResult = () => {
    let maxVibe = null;
    let maxScore = -1;
    for (const vibe in score) {
      if (score[vibe] > maxScore) {
        maxScore = score[vibe];
        maxVibe = vibe;
      }
    }
    return { vibe: maxVibe, score: maxScore };
  };

  const handleAnswer = (selectedVibe) => {
    setScore((prev) => ({
      ...prev,
      [selectedVibe]: (prev[selectedVibe] || 0) + 1,
    }));

    if (currentQn === questions.length - 1) {
      const result = calculateResult();
      onFinish(result, score);
    } else {
      setCurrentQn((prev) => prev + 1);
    }
  };

  const current = questions[currentQn];

  return <QuestionCard questionData={current} onAnswer={handleAnswer} />;
}
