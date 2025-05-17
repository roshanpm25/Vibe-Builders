import React from 'react';

export default function QuestionCard({ questionData, onAnswer }) {
  if (!questionData) return null;

  const handleOptionClick = (vibe) => {
    onAnswer(vibe);
  };

  return (
    <div className="question-card">
      {/* Meme image, only show if meme URL exists */}
      {questionData.meme && (
        <img
          src={questionData.meme}
          alt="Question meme"
          style={{ maxWidth: '100%', marginBottom: '12px', borderRadius: '8px' }}
        />
      )}

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
