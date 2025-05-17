import React from 'react';
import Chart from './Chart';


export default function Result({ result, scores }) {
    const handleShare = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  alert("Link copied! Share it with your friends ✨");
};


  return (
    <div className="result">
      <h2>Your Vibe is: {result.vibe} 🌀</h2>
      <p>Top Score: {result.score}</p>
      <Chart scores={scores} />
      <button onClick={() => window.location.reload()}>Try Again</button>
<button onClick={handleShare}>Share Your Vibe 🔗</button>

    </div>
  );
}
