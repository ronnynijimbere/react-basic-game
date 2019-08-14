import React from 'react';

const Header = ({ restartGame, Help }) => (
  <div className="grid-header-container">
    <div className="justify-left timer"></div>
    <div className="justify-center game-status-text"></div>
    <div className="justify-end">
      <button onClick={restartGame} className="restart-button">Restart Game</button>
      <button onClick={Help} className="help-button">Help</button>
    </div>
  </div>
);

export default Header;