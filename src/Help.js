import React from 'react';

const Help = () => (
  <div className="justify-center">
    <h1>Instructions!</h1>
    <p>The game comprises of 8 pairs of cards (i.e 16 cards). The cards are arranged randomly and are faced down. 
        A user flips a card by clicking on it. If the two flipped cards are a match they will disappear from our game 
        board otherwise they will be flipped back. The game ends when all cards are successfully matched with their pairs</p>
    <button className="help-button" onClick={Help}>Help</button>
  </div>
);

export default Help;