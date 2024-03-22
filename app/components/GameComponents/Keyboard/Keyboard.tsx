import React from 'react'
import {useDispatch} from 'react-redux';
import {AppDispatch, useAppSelector} from "@/redux/game/store";
import { guessLetter, rightLetter, wrongLetter, trackAttempts, decrementAttempts, checkGuessedLetters } from '@/redux/game/hangman-slice';
import './keyboard.scss'


const Keyboard: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const word = useAppSelector((state) => state.hangmanGame.value.word); 
 const rightGuess = useAppSelector((state) => state.hangmanGame.value.rightGuess);
  const wrongGuess = useAppSelector((state) => state.hangmanGame.value.wrongGuess);
  

const handleLetterClick = (letter: string) => {
    if (rightGuess.includes(letter)) {
      alert(`You have already correctly guessed the letter ${letter}. Please try again.`)
      return 
    } else if(wrongGuess.includes(letter)) {
      alert(`You have already wrongly guessed the letter ${letter}. Please try again.`)
      return 
    }
    
    if (word.includes(letter)) {
      dispatch(rightLetter(letter));
      dispatch(checkGuessedLetters());
    } else {
      handleWrongGuess(letter)
    }
    dispatch(guessLetter(letter));

  
  }


  


  const handleWrongGuess = (letter: string) => {
    dispatch(wrongLetter(letter));
    dispatch(guessLetter(letter));
    dispatch(trackAttempts());
    dispatch(decrementAttempts());

  }


    const qwertyLayout = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"],
    ]

  return (

    <div className="keyboard">
        {qwertyLayout

        .map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
                {row.map((letter, index) => (
                    <div className={`${rightGuess.includes(letter) ? "right-guess" : wrongGuess.includes(letter) ? "wrong-guess" : "key"}`} key={index} onClick={(event) => handleLetterClick(letter)}>
                        {letter}
                    </div>
                ))}
            </div>
        ))}
    </div>

  )
}

export default Keyboard