import React, { useEffect, useState } from 'react';
import { questionsList } from '../data/Questions.js/';

const Quiz = ({ onQuizEnd }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [skipsRemaining, setSkipsRemaining] = useState(3);
  const [colorPoints, setColorPoints] = useState({
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    purple: 0,
  });

  useEffect(() => {
    const shuffled = [...questionsList].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffled);
  }, []);

  const handleAnswer = (color) => {
    setColorPoints((prev) => ({
      ...prev,
      [color]: prev[color] + 1,
    }));

    if (currentQuestionIndex < 9) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onQuizEnd({ ...colorPoints, [color]: colorPoints[color] + 1 });
    }
  };

  const handleSkip = () => {
    if (skipsRemaining > 0) {
      setSkipsRemaining(skipsRemaining - 1);

      // Get a new question from the remaining pool
      const remainingQuestions = questionsList.filter(
        q => !questions.some(existingQ => existingQ.question === q.question)
      );

      if (remainingQuestions.length > 0) {
        const randomQuestion = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
        const newQuestions = [...questions];
        newQuestions[currentQuestionIndex] = randomQuestion;
        setQuestions(newQuestions);
      }
    }
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / 10) * 100;

  return (
    <div className="quiz-page">
      <div className="question-counter">
        Question {currentQuestionIndex + 1} of 10
        {skipsRemaining > 0 && (
          <span className="skips-remaining"> • {skipsRemaining} skip{skipsRemaining !== 1 ? 's' : ''} remaining</span>
        )}
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="quiz-card">
        <h2>{currentQuestion.question}</h2>
        <div className="options">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              className="option-button"
              onClick={() => handleAnswer(option.color)}
            >
              {option.text}
            </button>
          ))}
        </div>
        {skipsRemaining > 0 && (
          <button className="skip-button" onClick={handleSkip}>
            Skip Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
