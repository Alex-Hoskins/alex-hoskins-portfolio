import React, { useState, useEffect, useRef } from 'react';
import About from './About';
import ProjectList from './ProjectsList';
import './Home.css';
import Contact from './Contact';

const Home = () => {
  const [yPos, setYPos] = useState(100);
  const [velocity, setVelocity] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [xPos, setXPos] = useState(0);
  const [isHit, setIsHit] = useState(false);
  const [highlightScore, setHighlightScore] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const scoreRef = useRef(score);
  const isResettingRef = useRef(false);

  const handleCharacterClick = () => {
    setScore((prevScore) => prevScore + 1);
    setVelocity(-10);
    setIsHit(true);
    setTimeout(() => setIsHit(false), 200);
  };

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    let frameCount = 0;
  
    const interval = setInterval(() => {
      setXPos(prevX => {
        const newX = prevX + 1;
        if (newX >= window.innerWidth) {
          setHighScore(prev => {
            if (scoreRef.current > prev) {
              setHighlightScore(true);
              setTimeout(() => setHighlightScore(false), 1000);
              return scoreRef.current;
            }
            return prev;
          });
          setScore(0);
          return 0;
        }
        return newX;
      });

      setYPos((prevY) => {
        const newY = prevY + velocity;
        if (newY >= 300) {
          setVelocity(0);
          return 300;
        }
        return newY;
      });
  
      setVelocity((prevVel) => prevVel + 0.3);
  
      frameCount++;
      if (!isResettingRef.current && frameCount % 2 === 0) {
        setScore(prevScore => prevScore + 1);
      }
    }, 16);
  
    return () => clearInterval(interval);
  }, [velocity]);

  return (
    <div className="home-container">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <ProjectList />
      </section>
      <section id="home" className="hero-section">
        <div className="game-section">
          <div className="game-header">
            <div className="game-info">
              <h2 className="game-title">Cosmic Voyager</h2>
              <p className="game-subtitle">Navigate through the stars and test your reflexes</p>
            </div>

            <div className="score-board">
              <div className={`score ${highlightScore ? 'highlight' : ''}`}>
                High Score: {highScore}
              </div>
              <div className="current-score">
                Score: <span>{score}</span>
              </div>
            </div>

            <button 
              className="instructions-toggle"
              onClick={() => setShowInstructions(!showInstructions)}
            >
              {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
            </button>
          </div>

          {showInstructions && (
            <div className="game-instructions">
              <h3>How to Play</h3>
              <ul>
                <li>👾 Click the spaceship to score points</li>
                <li>🚀 Each click boosts the ship higher</li>
                <li>🎯 Try to beat your high score!</li>
              </ul>
            </div>
          )}

          <div className="game-container">
            <div className="stars-container">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="star" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }} />
              ))}
            </div>
            <div 
              className={`flying-character ${isHit ? 'hit' : ''}`} 
              style={{ top: `${yPos}px`, left: `${xPos}px` }} 
              onClick={handleCharacterClick}
            >
              <div className="character-silhouette" />
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

