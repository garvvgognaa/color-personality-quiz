import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/quiz');
    };

    return (
        <div className="landing-page">
            <div className="landing-card">
                <h1>Color Personality Quiz</h1>
                <p className="landing-subtitle">
                    Answer 10 tricky questions and reveal the color that defines YOU.
                </p>

                <div className="brain-image">
                    <img
                        src="/colorful-brain.png"
                        alt="Colorful brain with butterflies"
                        className="rainbow-brain"
                    />
                </div>

                <div className="process-steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-text">Take the Quiz</div>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-text">Answer Honestly</div>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-text">Discover Your Color</div>
                    </div>
                </div>

                <button className="start-button" onClick={handleStart}>
                    Start Quiz
                </button>

                <div className="footer">
                    Made with <span className="heart">❤️</span> for discovering yourself.
                </div>
            </div>
        </div>
    );
};

export default Landing; 
