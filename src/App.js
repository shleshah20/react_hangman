import './App.css';
import React,{ useState,useEffect } from 'react';
import Header from './components/header';
import Figure from './components/figure';
import WrongLetter from './components/wrongLetter';
import Word from './components/word';
import Notification from './components/notification';
import Popup from './components/popup';
import {showNotification as show} from './helpers/helper';

const words=['application','programming','interface','wizard'];
let selectedWord=words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable,setPlayable] = useState(true);
  const [correctLetters,setCorrectLetters] =  useState([]);
  const [wrongLetters,setwrongLetters] =  useState([]);
  const [showNotification,setshowNotification] =  useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) 
          {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } 
          else 
          {
            show(setshowNotification);
          }
        } 
        else 
        {
          if (!wrongLetters.includes(letter)) 
          {
            setwrongLetters(wrongLetters => [...wrongLetters, letter]);
          } 
          else 
          {
            show(setshowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain(){
    setPlayable(true);

    //empty array

    setCorrectLetters([]);
    setwrongLetters([]);

    const random=Math.floor(Math.random() * words.length);
    selectedWord=words[random];
  }

  return (
    <div>
      <Header />
        <div className="game-container">
          <Figure WrongLetters={wrongLetters}/>
          <WrongLetter WrongLetters={wrongLetters}/>
          <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} 
      selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;
