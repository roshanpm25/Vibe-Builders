import React from 'react';

export default function QuestionCard({ questionData, onAnswer }) {
  return (
    <div className="question-card">
      <h3>{questionData.question}</h3>
      {questionData.options.map((opt, idx) => (
        <button key={idx} onClick={() => onAnswer(opt.vibe)}>
          {opt.text}
        </button>
      ))}
    </div>
  );
}
