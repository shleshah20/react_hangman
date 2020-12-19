import React,{ useEffect } from 'react';
import {checkWin} from '../helpers/helper';
const Popup = ({correctLetters,wrongLetters,selectedWord,setPlayable,playAgain}) => {
	let finalMessage='';
	let finalMessageRevealWord='';
	let Playable=true;

	if(checkWin(correctLetters,wrongLetters,selectedWord)==='win')
	{
		finalMessage='woah!! you win!! ';
		Playable=false;
	}
	else{
		if(checkWin(correctLetters,wrongLetters,selectedWord)==='loss')
		{
			finalMessage='sorry!! you loss!!';
			finalMessageRevealWord=`... the word was : ${selectedWord}`;
			Playable=false;
		}
	}

	useEffect(() => setPlayable(Playable));

	return (
		<div className="popup-container"  style={finalMessage !== '' ? {display:'flex'} : {}}>
		    <div className="popup">
		    	<h2>{finalMessage}</h2>
		    	<h3>{finalMessageRevealWord}</h3>
		    	<button onClick={playAgain}>Play again</button>
		    </div>
		</div>
  );
}

export default Popup;