import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';
import Landing from './components/Landing';

const App = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [colorPoints, setColorPoints] = useState({
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    purple: 0,
  });

  const handleStartQuiz = () => {
    setShowLanding(false);
    setShowQuiz(true);
  };

  const handleQuizEnd = (finalPoints) => {
    setColorPoints(finalPoints);
    setShowQuiz(false);
    setShowResult(true);
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      {showLanding && <Landing onStart={handleStartQuiz} />}
      {showQuiz && <Quiz onQuizEnd={handleQuizEnd} />}
      {showResult && <Result colorPoints={colorPoints} onReattempt={handleRestart} />}
    </div>
  );
};

export default App;
