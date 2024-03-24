import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {useState, useEffect} from 'react';
import { Movie } from "../movies/movies-slice"

type InitialState = {
    value: HangmanState;
}

type HangmanState = {
    word: string;
    guessedLetters: string[]; 
    mode:string;
    genre:string;
    remainingAttempts: number;
    attemptsUsed: number;
    wrongGuess: string[];
    rightGuess: string[];
    won: boolean;
    lost: boolean;
}

const initialState = {
    value: {
        word: "", 
        guessedLetters: [],
        mode:"",
        genre: "",
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

        setWord: (state, action: PayloadAction<Movie[]>) => {
            const movieList = action.payload
            const movies = movieList || [];
            console.log(movies, "hello")
                console.log("The movies in the clicked genre", movies)
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                state.value.word = randomMovie.title.toUpperCase();
                
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

        // gameWon: (state, action: PayloadAction<string>) => {
        //     if (word.length )
        // },
      decrementAttempts: (state) => {
          state.value.remainingAttempts -= 1;
      }, 

      trackAttempts: (state) => {
        state.value.attemptsUsed += 1;
      },

      resetGame: (state) => {
          state.value = initialState.value;
      },

      checkGuessedLetters: (state) => {
        const normalisedWord = state.value.word.toUpperCase().split(" ").join("")
        const wordSet = new Set(normalisedWord)
        const guessedSet = new Set(state.value.rightGuess.map(letter => letter.toUpperCase()))

        const intersection = new Set([...wordSet].filter(letter => guessedSet.has(letter)))

        if(intersection.size === wordSet.size) {
            state.value.won = true


            console.log(state.value.won)
            console.log("YOU WON")
        }
        
      }

    }
}); 


export const { setWord, guessLetter, decrementAttempts, wrongLetter, trackAttempts, resetGame, rightLetter, checkGuessedLetters, setGenre } = hangman.actions
export default hangman.reducer;