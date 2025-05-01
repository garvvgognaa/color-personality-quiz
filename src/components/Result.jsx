import React from 'react';

const colorTraits = {
  red: {
    name: "Red",
    traits: ["Passionate", "Confident", "Energetic", "Strong-willed"],
  },
  blue: {
    name: "Blue",
    traits: ["Calm", "Trustworthy", "Reliable", "Sensitive"],
  },
  green: {
    name: "Green",
    traits: ["Balanced", "Harmonious", "Growth-oriented", "Compassionate"],
  },
  yellow: {
    name: "Yellow",
    traits: ["Optimistic", "Creative", "Joyful", "Enthusiastic"],
  },
  purple: {
    name: "Purple",
    traits: ["Intuitive", "Inventive", "Mystical", "Unique"],
  },
};

const Result = ({ colorPoints, onReattempt }) => {
  const maxColor = Object.keys(colorPoints).reduce((a, b) =>
    colorPoints[a] > colorPoints[b] ? a : b
  );

  const { name, traits } = colorTraits[maxColor];

  return (
    <div className="result-page">
      <h1>Your Personality Color: {name}</h1>
      <div className={`color-swatch color-${maxColor}`}></div>
      <h3>Traits:</h3>
      <ul>
        {traits.map((trait, index) => (
          <li key={index}>{trait}</li>
        ))}
      </ul>
      <button className="restart-button" onClick={onReattempt}>Retake the Quiz</button>
    </div>
  );
};

export default Result;
