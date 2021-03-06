import React from 'react';

const GameOver = ({ restartGame }) => (
  <div className="justify-center">
    <h1>Game Over, You have Won!</h1>
    <h3>If you enjoyed playing this game, follow me on Twitter @MrNijimbere for more...</h3>
    <button className="restart-button" onClick={restartGame}>Restart Game</button>
  </div>
);

export default GameOver;