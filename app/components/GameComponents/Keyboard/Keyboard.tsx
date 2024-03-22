import React from 'react'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch, useAppSelector} from "@/redux/game/store";
import { guessLetter, wrongLetter, trackAttempts, decrementAttempts } from '@/redux/game/hangman-slice';
import './keyboard.scss'


const Keyboard: React.FC = () => {
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);
  const [wrongGuess, setwrongGuess] = useState<string[]>([]);
  const [rightGuess, setRightGuess] = useState<string[]>([]);

  console.log("These are the letters stored in wrongGuess:", wrongGuess)
  

  const dispatch = useDispatch<AppDispatch>();

const word = useAppSelector((state) => state.hangmanGame.value.word); 
  // const guessedLetters = useAppSelector((state) => state.hangmanReducer.value.guessedLetters);
  const handleLetterClick = (letter: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (rightGuess.includes(letter)) {
      alert(`You have already correctly guessed the letter ${letter}. Please try again.`)
      return 
    } else if(wrongGuess.includes(letter)) {
      alert(`You have already wrongly guessed the letter ${letter}. Please try again.`)
      return 
    }
    if (word.includes(letter)) {
      setRightGuess([...rightGuess, letter]);
      setLettersGuessed([...lettersGuessed, letter]);
    } else {
      handleWrongGuess(letter)
    }
    handleColourChange(letter, event)
    dispatch(guessLetter(letter));

  
  }
  const handleColourChange = (letter: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(word.includes(letter)) {
      event.currentTarget.classList.remove("key")
      event.currentTarget.classList.add("right-guess")
     } else if (!word.includes(letter)) {
      event.currentTarget.classList.remove("key")
      event.currentTarget.classList.add("wrong-guess")
     } else {
      console.log(letter);
     }
  }


  


  const handleWrongGuess = (letter: string) => {
    console.log("These are the letters in handleWrongGuess: ", letter);
    // need to check if letter is already there, if not push to array
    setwrongGuess([...wrongGuess, letter]);
    setLettersGuessed([...lettersGuessed, letter]);
    dispatch(wrongLetter(letter));
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
                    <div className="key" key={index} onClick={(event) => handleLetterClick(letter, event)}>
                        {letter}
                    </div>
                ))}
            </div>
        ))}
    </div>

  )
}

export default Keyboard