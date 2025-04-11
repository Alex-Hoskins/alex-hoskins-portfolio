import React, { useState, useEffect, useRef } from 'react';
import About from './About';
import ProjectList from './ProjectsList';
import './Home.css';

const Home = () => {
  let title = '<Alex-Hoskins/>';
  const [yPos, setYPos] = useState(100);
  const [velocity, setVelocity] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [score, setScore] = useState(0); // <-- Score state added
  const [highScore, setHighScore] = useState(0);
  const [xPos, setXPos] = useState(0);
  const scoreRef = useRef(score);
  const isResettingRef = useRef(false);
  const [isHit, setIsHit] = useState(false);

  const handleCharacterClick = () => {
    setScore((prevScore) => prevScore + 1);
    setVelocity(-10);
    
    // Trigger flash effect
    setIsHit(true);
    setTimeout(() => setIsHit(false), 200); // Remove the class after 200ms
  };

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    let frameCount = 0;
  
    const interval = setInterval(() => {
      // Update position logic
      setXPos(prevX => {
        const newX = prevX + 1;
        if (newX >= window.innerWidth) {
          // Save high score before score gets reset
          setHighScore(prev => Math.max(prev, scoreRef.current));
          // Reset position and score IMMEDIATELY
          setScore(0);
          return 0;
        }
        return newX;
      });
      setYPos((prevY) => {
        const newY = prevY + velocity;
        if (newY >= 300) {
          setIsJumping(false);
          setVelocity(0);
          return 300;
        }
        return newY;
      });
  
      setVelocity((prevVel) => prevVel + 0.3);
  
      // Update score every 10 frames (~0.16s)
      frameCount++;
      if (!isResettingRef.current && frameCount % 2 === 0) {
        setScore(prevScore => prevScore + 1);
      }
    }, 16); // Run the interval every 16ms (~60fps)
  
    return () => {
      clearInterval(interval);
    };
  }, [velocity]);  // Keep `velocity` as the only dependency to avoid unnecessary rerenders
  

  return (
    <div>
      <div className="home">
        <div className="wrapper">
          <div className="static-txt"></div>
          <ul className="dynamic-txts">
            <li><span>Developer</span></li>
            <li><span>Leader</span></li>
            <li><span>Innovator</span></li>
            <li><span>Engineer</span></li>
            <li><span></span></li>
          </ul>
        </div>
        <h1>{title}</h1>
        <div className="score-board">
          Score: <span id="score">{score}</span> | High Score: <span>{highScore}</span>
        </div>
        <div className={`flying-character ${isHit ? 'hit' : ''}`} style={{ top: `${yPos}px`, left: `${xPos}px` }} onClick={handleCharacterClick}>
          <div className="character-silhouette" onClick={handleCharacterClick}></div>
        </div>
        <div className="city-silhouette">
        <div class="building">
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
          </div>
          <div class="building">
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
          </div>
          <div class="building">
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
          </div>
          <div class="building">
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
          </div>
          <div class="building">
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
          </div>
          <div class="building">
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
          </div>
          <div class="building">
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
          </div>
          <div class="building">
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
          </div>
          <div class="building">
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
          </div>
          <div class="building">
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
            <div class="window"></div><div class="window"></div><div class="window"></div>
          </div>
        </div>
      </div>
      <About />
      <ProjectList />
    </div>
  );
}

export default Home;

