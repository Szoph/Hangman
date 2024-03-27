'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {useState, useEffect} from 'react';
import { Movie } from "../movies/movies-slice"

// interface Movie {
//     length: any;
//     title: string,
//     posterImage: string;
// }

interface MoviesPayload {
    [key: string]: Movie[];
}

type InitialState = {
    value: HangmanState;
}

type HangmanState = {
    word: string;
    guessedLetters: string[]; 
    mode:'Easy' | 'Medium' | 'Hard' | '';
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
      },

    
      easyMode: (state, action: PayloadAction<MoviesPayload>) => {
        const {movies} = action.payload


        const movieList: ObjectType<Movie> = movies[1] || [];

        // first check if the title has any numbers in it. If so, exclude it from the filtered titles.
        // Ideally, would want to implement some function to convert the numbers to letters and special characters to strings when possible.
        // e.g '&' in a movie title would be changed to 'and'. Numbers '1', '2'... would be changed to 'one' and 'two' respectvely.
        const filteredMovies = movieList.map(movie => {

            if(/\d/.test(movie.title)) {
                return false
            }
            const modifiedTitle = movie.title.replace(/&/g, "and").replace(/[^a-zA-Z\s]/g, " ").trim()           
           
           return {...movie, title: modifiedTitle}

        }).filter(movie =>
                movie !== false && movie.title.length <= 8
            );
            
        console.log("These are the filteredMovies in easyMode", filteredMovies)
        if (filteredMovies.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredMovies.length)
            const randomMovie = filteredMovies[randomIndex]

            
            state.value.word = randomMovie.title.toUpperCase()
            state.value.mode= 'Easy'
        }
      },



      mediumMode: (state, action: PayloadAction<MoviesPayload>) => {
        const {movies} = action.payload

    

        const movieList: ObjectType<Movie> = movies[1] || [];
        console.log(movieList)
        const filteredMovies = movieList.map(movie => {

            if(/\d/.test(movie.title)) {
                return false
            }

            const modifiedTitle = movie.title.replace(/&/g, "and").replace(/[^a-zA-Z\s]/, " ").trim()

            return   { ...movie, title: modifiedTitle}
      }).filter(
        movie => movie !== false && movie.title.length >= 8 && movie.title.length <= 12 
        );
            
        console.log("These are the filteredMovies in mediumMode", filteredMovies)
        if (filteredMovies.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredMovies.length)
            const randomMovie = filteredMovies[randomIndex]

            
            state.value.word = randomMovie.title.toUpperCase()
            state.value.mode= 'Medium'
        }
      },

      hardMode: (state, action: PayloadAction<MoviesPayload>) => {
        const {movies} = action.payload

        console.log(movies)

        const movieList: ObjectType<Movie> = movies[1] || [];
        console.log(movieList)
        const filteredMovies = movieList.map(movie => {
          if(/\d/.test(movie.title)) {
            return false
          }

          const modifiedTitle = movie.title.replace(/&/g, "and").replace(/[^a-zA-Z\s]/).trim()

          return {...movie, title: modifiedTitle}
        
        }).filter(movie => movie !== false && movie.title.length >= 10 && movie.title.length <= 14);
            
        console.log("These are the filteredMovies in hardMode", filteredMovies)
        if (filteredMovies.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredMovies.length)
            const randomMovie = filteredMovies[randomIndex]

            
            state.value.word = randomMovie.title.toUpperCase()
            state.value.mode= 'Hard'
        }
      }

    }
}); 


export const { setWord, guessLetter, decrementAttempts, wrongLetter, trackAttempts, resetGame, rightLetter, checkGuessedLetters, easyMode, mediumMode, hardMode, setGenre } = hangman.actions
export default hangman.reducer;