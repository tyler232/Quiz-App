import { useState } from 'react';
import '../Style/Score.css';

const Score = () => {
    return (
      <div>
        <div className="Score-title">
          MATH ARITHMETIC QUIZ
        </div>
        <button className="Back-button">
          Back
        </button>
        <div className="YourScore-text">
          YOUR SCORE:
        </div>
        <div className="Score">
          {/* You can dynamically fill in the score here */}
          {/* Example: */}
          100
        </div>
        <div className="BetterThan-text">
          Better Than:
        </div>
        <div className="BetterThan-percent">
          {/* You can dynamically fill in the better than percentage here */}
          {/* Example: */}
          90%
        </div>
        <div className="Leaderboard-icon"></div> {/* This div represents the leaderboard icon */}
        <div className="Leaderboard-test">
          Leaderboard
        </div>
        <button className="PlayAgain-button">
          Play Again
        </button>
        <button className="Exit-button">
          Exit
        </button>
      </div>
    );
  };
  
  export default Score;