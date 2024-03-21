"use client";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import {AppDispatch, useAppSelector} from "@/redux/game/store"; 
import './titlecomponent.scss'



const TitleComponent: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();


  const word = useAppSelector((state) => state.hangmanGame.value.word); 
  const guessedLetters = useAppSelector((state) => state.hangmanGame.value.guessedLetters); 
  const remainingAttempts = useAppSelector((state) => state.hangmanGame.value.remainingAttempts);
//  const gameWord = "TOY STORY";
//  const guessedLetters = new Set (['T', 'Y']);


  

  return (
    <div className="title">
     {word.split(' ').map((word: string, index: number) => (
      <span key={index} className="word">

        {word.split('').map((letter: string, index) => (
          <span key={index} className="letters">
            {guessedLetters.includes(letter) ? letter : "_"}
          </span>
        ))}
        

      </span>
     ))}
    </div>
  )
}

export default TitleComponent