import React, { useState } from 'react';
import './Game.css';

const choices = ['rock', 'paper', 'scissors'];

const images = {

  rock: 'https://th.bing.com/th/id/OIP.kc_xaWhrSUrXjFZA_9Gw8AHaHa?rs=1&pid=ImgDetMain',
  paper: 'https://th.bing.com/th/id/OIP.sNM9xrYXL2u5re-wJJCmJwHaIt?rs=1&pid=ImgDetMain',
  scissors: 'https://static.vecteezy.com/system/resources/previews/005/393/716/original/the-scissors-in-doodle-style-scissors-for-seamstresses-and-hairdressers-black-and-white-image-monochrome-tools-made-of-metal-illustration-vector.jpg'
}

function Game() {

  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  const play = (choice) => {

    const compChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    const win = (choice === 'rock' && compChoice === 'scissors') ||
      (choice === 'paper' && compChoice === 'rock') ||
      (choice === 'scissors' && compChoice === 'paper');

    if (choice === compChoice) {
      setResult('Draw!');

    } else if (win) {
      setResult('You Win!');
      setScore(score + 1);

    } else {
      setResult('You Lose!');
    }
  };

  const reset = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
    setScore(0);
  };

  return (
    <div className='game-container text-dark'>
      <h2>Rock Paper Scissors</h2>
      <h3>Score: {score}</h3>

      <div className='choices'>
        {choices.map(choice => (
          <button key={choice} onClick={() => play(choice)}>
            <img src={images[choice]} alt={choice} />
            <span>{choice}</span>
          </button>
        ))}
      </div>

      {playerChoice && (
        <div className='results'>
          <div>
            <h4>You</h4>
            <img src={images[playerChoice]} alt={playerChoice} />
          </div>
          <div>
            <h4>Computer</h4>
            <img src={images[computerChoice]} alt={computerChoice} />
          </div>
        </div>
      )}

      <h3>{result}</h3>
      <button className='reset-btn' onClick={reset}>Reset Game</button>
    </div>
  );
}

export default Game;
