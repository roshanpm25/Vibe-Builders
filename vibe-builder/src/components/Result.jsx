import React, { useState, useEffect } from 'react';

const vibeData = {
  chaosExplorer: {
    name: "Chaos Explorer",
    description: "You live life on the edge, always running wild and handling chaos like a boss! Spontaneous, loud, and full of energy.",
    meme: "https://th.bing.com/th/id/OIP.ymMJ2an3q2mbq-5qWBx-0wHaFj?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  ghostMode: {
    name: "Ghost Mode",
    description: "You’re a mystery wrapped in an enigma… basically, the human version of ‘seen but not replied’. Stealth level: expert.",
    meme: "https://snworksceo.imgix.net/dth/abb9c237-b4c7-4fa0-a05f-de5f9c080c18.sized-1000x1000.png?w=1000",
  },
  chillVibes: {
    name: "Chill Vibes",
    description: "Calm, cool, and collected — you handle everything with zen and a relaxed attitude. The chill guru of your squad.",
    meme: "https://originalmemesfinder.com/wp-content/uploads/2024/11/ezgif.com-optijpeg-29-1-1020x1024.jpg",
  },
  memeLegend: {
    name: "Meme Legend",
    description: "Meme master supreme. You always have the perfect reaction GIF, joke, or meme ready to lighten up any situation.",
    meme: "https://i.imgflip.com/4zd5e6.png",
  },
};

export default function Result({ result }) {
  const { vibe } = result;
  const data = vibeData[vibe];

  const [loading, setLoading] = useState(true);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const netlifyUrl = "https://vibe-builder.netlify.app"; // Replace with your actual Netlify URL
  const shareText = encodeURIComponent(
    `😂 I just found out I'm living in *${data.name}* mode!\nWanna know your vibe? Check this out 👇\n${netlifyUrl}`
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(netlifyUrl).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  const handleWhatsappShare = () => {
    const whatsappUrl = `https://wa.me/?text=${shareText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="result-container" style={{ textAlign: "center" }}>
      <h2>Your vibe is: {data.name}</h2>

      {loading ? (
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '20px' }}>
          Loading your epic meme... 😎
        </p>
      ) : (
        <img
          src={data.meme}
          alt={`${data.name} meme`}
          style={{ maxWidth: '300px', borderRadius: '8px' }}
        />
      )}

      <p style={{ maxWidth: "500px", margin: "20px auto" }}>{data.description}</p>

      <button
        onClick={() => setShowShare(!showShare)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#FF69B4",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {showShare ? "Hide Share Options" : "Share Your Vibe"}
      </button>

      {showShare && (
        <div style={{ marginTop: "15px" }}>
          <button
            onClick={handleCopy}
            style={{
              marginRight: "10px",
              padding: "8px 15px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Copy Link
          </button>

          <button
            onClick={handleWhatsappShare}
            style={{
              padding: "8px 15px",
              backgroundColor: "#25D366",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Share on WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
