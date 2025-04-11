import React, { useState, useEffect } from 'react';
import About from './About';
import ProjectList from './ProjectsList';
import './Home.css';

const Home = () => {
  let title = '<Alex-Hoskins/>';
  const [yPos, setYPos] = useState(100);
  const [velocity, setVelocity] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [score, setScore] = useState(0); // <-- Score state added

  const handleCharacterClick = () => {
    setScore((prevScore) => prevScore + 1);
    setVelocity(-10);
      // setIsJumping(true);
  };

  useEffect(() => {
    let frameCount = 0;

    const interval = setInterval(() => {
      setYPos((prevY) => {
        const newY = prevY + velocity;
        if (newY >= 300) {
          setIsJumping(false);
          setVelocity(0);
          return 300;
        }
        return newY;
      });

      setVelocity((prevVel) => prevVel + .3);

      // Update score every 10 frames (~0.16s)
      frameCount++;
      if (frameCount % 10 === 0) {
        setScore((prevScore) => prevScore + 1);
      }
    }, 16);


    return () => {
      clearInterval(interval);
    };
  }, [velocity]);

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
        <div className="score-board">Score: <span id="score">{score}</span></div>
        <div className="flying-character" style={{ top: `${yPos}px` }} onClick={handleCharacterClick}>
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

