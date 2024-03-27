"use client";
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export type Movie = {
    length: any;
    title: string | null,
    posterImage: string;
} | any;



  type InitialState = Movie[];

  const initialState: InitialState  = [];

  export const movieSlice = createSlice({
    name: "movies",
    initialState, 
    reducers: {
        addMovies: (state, action: PayloadAction<Movie[]>) => {
            return action.payload;
        },
    }
}) 

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;