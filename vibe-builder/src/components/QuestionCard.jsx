import React from 'react';

export default function QuestionCard({ questionData, onAnswer }) {
  if (!questionData) return null;

  const handleOptionClick = (vibe) => {
    onAnswer(vibe);
  };

  return (
    <div className="question-card">

      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.options.map(({ answer, vibe }, idx) => (
          <div
            key={idx}
            className="option"
            onClick={() => handleOptionClick(vibe)}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
}
