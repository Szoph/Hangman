import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {useState} from 'react';



type InitialState = {
    value: HangmanState;
}

type HangmanState = {
    word: string;
    guessedLetters: string[]; 
    remainingAttempts: number;
    attemptsUsed: number;
    wrongGuess: string[];
    rightGuess: string[];
    won: boolean;
    lost: boolean;
}

const initialState = {
    value: {
        word: "TOY STORY", 
        guessedLetters: [],
        remainingAttempts: 4,
        attemptsUsed: 0, 
        wrongGuess: [],
        rightGuess: [],
        won: false,
        lost: false,
    } as HangmanState,
} as InitialState;

export const hangman = createSlice({ 
    name: "hangman",
    initialState,
    reducers: {

        setWord: (state, action: PayloadAction<string>) => {
                state.value.word = action.payload;
        }, 
      guessLetter: (state, action: PayloadAction<string>) => {
       state.value.guessedLetters.push(action.payload);
      },

      wrongLetter: (state, action: PayloadAction<string>) => {
        state.value.wrongGuess.push(action.payload);
    },

        rightLetter: (state, action: PayloadAction<string>) => {
            state.value.rightGuess.push(action.payload)
        },
      decrementAttempts: (state) => {
          state.value.remainingAttempts -= 1;
      }, 

      trackAttempts: (state) => {
        state.value.attemptsUsed += 1;
      },

      resetGame: (state) => {
          state.value = initialState.value;
      },

    }
}); 


export const { setWord, guessLetter, decrementAttempts, wrongLetter, trackAttempts, resetGame } = hangman.actions
export default hangman.reducer;