/* eslint-disable no-undef */
import React from 'react';

const Landing = ({ onStart }) => {
    return (
        <div className="landing-page">
            <div className="landing-card">
                <div className="title-section">
                    <h1>Discover Your Personality Color</h1>
                </div>
                <div className="color-info">
                    <p>
                        Personality and colors are often closely linked in psychology and popular theories, as different colors can evoke specific emotions and behavioral traits. For example, people who prefer <strong className="blue">blue</strong> are often seen as calm, trustworthy, and dependable, while those drawn to <strong className="red">red</strong> may be perceived as energetic, passionate, and bold. These associations stem from both cultural meanings and emotional responses to color stimuli. Color psychology suggests that our favorite colors or the ones we respond to most can reflect underlying aspects of our personality, mood, or even decision-making style.
                    </p>
                </div>
                <p className="landing-subtitle">
                    Answer 10 tricky questions and reveal the color that defines YOU.
                </p>
                <div className="brain-image">
                    <img
                        src="https://t3.ftcdn.net/jpg/05/60/71/36/360_F_560713685_a8bg3Z1wDvLte5RMiJevURroZlHQaeX4.jpg"
                        alt="Colorful brain with butterflies"
                        className="rainbow-brain" />
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
                <div className="button-container">
                    <button className="start-button" onClick={onStart}>
                        Take the Test
                    </button>
                </div>
                <div className="footer">
                    Made with <span className="heart">❤️</span> for discovering yourself.
                </div>
            </div>
        </div>
    );
};

export default Landing;
