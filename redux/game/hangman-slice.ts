'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {useState, useEffect} from 'react';
import { Movie } from "../movies/movies-slice"



interface MoviesPayload {
    [key: string]: Movie[];
}

export type TimerMode = 'easy' | 'medium' | 'hard';


type InitialState = {
    value: HangmanState;
}

type HangmanState = {
    word: string;
    guessedLetters: string[]; 

    mode:TimerMode;
    timeLeft: number;
    countDown: number;
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
        mode:"easy",
        timeLeft: 0,
        countDown: 4,
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

        setWord: (state, action: PayloadAction<MoviesPayload>) => {
            const movieList = action.payload
            console.log("This is the movieList in hangman Slice", movieList)
            const movies = movieList[1] || [];
            console.log("This is the first movie in the movies object", movies[1])
            let specialCharsMovies: Array<Movie> = [] // Type script is killing me....
            const filteredMovies = movies.filter(movie => {
                const moviesWithOutSpecialChars = /^[A-Za-z\s]+$/.test(movie.title)
             
                if (!moviesWithOutSpecialChars)
                    specialCharsMovies = [...specialCharsMovies, movie] // can someone make sense of this: Type 'string | Movie' is not assignable to type 'string'.Type 'Movie' is not assignable to type 'string'.
                else {
                    return moviesWithOutSpecialChars
                }
            })
            console.log("These are the movies with special characters", specialCharsMovies )
    
                if (filteredMovies.length > 0) {
                    console.log(filteredMovies.length)
         
                    const randomIndex = Math.floor(Math.random() * filteredMovies.length)
                    const randomMovie = filteredMovies[randomIndex]
        
                    console.log("This is the randomMovie", randomMovie)
                    console.log("This is the length of the randomMovie", randomMovie.title.length)
                    state.value.word = randomMovie.title.toUpperCase();
                } else {
                    console.log("No movies available to select a random movie from.")
                }
                
        },

        setGenre: (state, action: PayloadAction<string>) => {
            state.value.genre = action.payload
        },

      guessLetter: (state, action: PayloadAction<string>) => {
       state.value.guessedLetters.push(action.payload);
      },

      wrongLetter: (state, action: PayloadAction<string>) => {
        state.value.wrongGuess.push(action.payload);
        if(state.value.mode === "medium") {
            state.value.timeLeft -= 5
        }
        if(state.value.mode === "hard") {
            state.value.timeLeft -= 2
        }
    },

        rightLetter: (state, action: PayloadAction<string>) => {
            state.value.rightGuess.push(action.payload);
            if(state.value.mode === "medium") {
                state.value.timeLeft += 5
            }
            if(state.value.mode === "hard") {
                state.value.timeLeft += 2
            }
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
        console.log("123")
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
      },

    
      easyMode: (state, action: PayloadAction<MoviesPayload>) => {
        const {movies} = action.payload


        const movieList: Array<Movie> = movies[1] || [];
        console.log("Movies in hangman slice", movieList)

        // first check if the title has any numbers in it. If so, exclude it from the filtered titles.
        // Ideally, would want to implement some function to convert the numbers to letters and special characters to strings when possible.
        // e.g '&' in a movie title would be changed to 'and'. Numbers '1', '2'... would be changed to 'one' and 'two' respectvely.
        const filteredMovies = movieList.map(movie => {

            if(/\d/.test(movie.title)) {
                return null
            }
            const modifiedTitle = movie.title.replace(/&/g, "and").replace(/[^a-zA-Z\s]/g, " ").trim()           
           
           return {...movie, title: modifiedTitle}

        }).filter((movie: Movie) =>
                movie !== null && movie.title.length <= 8
            );
            
        console.log("These are the filteredMovies in easyMode", filteredMovies)
        if (filteredMovies.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredMovies.length)
            const randomMovie = filteredMovies[randomIndex]

            
            state.value.word = randomMovie.title.toUpperCase()
        }
      },



      mediumMode: (state, action: PayloadAction<MoviesPayload>) => {
        const {movies} = action.payload

    

        const movieList: Array<Movie> = movies[1] || [];
        console.log(movieList)
        const filteredMovies = movieList.map(movie => {

            if(/\d/.test(movie.title)) {
                return null
            }

            const modifiedTitle = movie.title.replace(/&/g, "and").replace(/[^a-zA-Z\s]/, " ").trim()

            return   { ...movie, title: modifiedTitle}
      }).filter(
        movie => movie !== null && movie.title.length >= 8 && movie.title.length <= 12 
        );
            
        console.log("These are the filteredMovies in mediumMode", filteredMovies)
        if (filteredMovies.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredMovies.length)
            const randomMovie = filteredMovies[randomIndex]

            
            state.value.word = randomMovie.title.toUpperCase()
        }
      },

      hardMode: (state, action: PayloadAction<MoviesPayload>) => {
        const {movies} = action.payload

        console.log(movies)

        const movieList: Array<Movie> = movies[1] || [];
        console.log(movieList)
        const filteredMovies = movieList.map(movie => {
          if(/\d/.test(movie.title)) {
            return null
          }

          const modifiedTitle = movie.title.replace(/&/g, "and").replace(/[^a-zA-Z\s]/, " ").trim()

          return {...movie, title: modifiedTitle}
        
        }).filter(movie => movie !== null && movie.title.length >= 10 && movie.title.length <= 14);
            
        console.log("These are the filteredMovies in hardMode", filteredMovies)
        if (filteredMovies.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredMovies.length)
            const randomMovie = filteredMovies[randomIndex]

            
            state.value.word = randomMovie.title.toUpperCase()
        }
      },

      setMode(state, action: PayloadAction<TimerMode>) {
        state.value.mode = action.payload;
        if(state.value.mode === "easy") {
            state.value.timeLeft = Infinity;
        }
        if(state.value.mode === "medium") {
            state.value.timeLeft = 60;
        }
        if(state.value.mode === "hard") {
            state.value.timeLeft = 45;
        }

      },
      setTimeLeft(state, action: PayloadAction<number>) {
        state.value.timeLeft = action.payload;

        if(state.value.timeLeft === 0) {
            state.value.remainingAttempts = 0;
            state.value.attemptsUsed = initialState.value.remainingAttempts;
        }
      },
      setCountDown(state, action: PayloadAction<number>) {
        state.value.countDown = action.payload;
      },


    }
}); 



export const { setWord, guessLetter, decrementAttempts, wrongLetter, trackAttempts, resetGame, rightLetter, checkGuessedLetters, setMode, setTimeLeft, setCountDown, easyMode, mediumMode, hardMode, setGenre } = hangman.actions

export default hangman.reducer;