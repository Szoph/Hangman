"use client";

import { Action, Adventure, Horror, Mystery, SciFi, Thriller, War, Fantasy, Comedy, Western, Animation, Sports } from "@/app/components/GenreMenuComponents/imports";
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { StaticImageData } from "next/image";

export type Genre = {
    name: string,
    image: StaticImageData;
};

  type InitialState = Genre[];

  const initialState: InitialState  = [
    {
        name:"action",
        image:Action
    },
    {
        name:"adventure",
        image:Adventure
    },
    {
        name:"animation",
        image:Animation
    },

    {
        name: "comedy",
        image:Comedy
    },


    {
        name: "fantasy",
        image:Fantasy
    },


    {
        name:"horror",
        image:Horror
    },


    {
        name:"mystery",
        image:Mystery
    },

    {
        name:"sci-fi",
        image:SciFi
    },
    {
        name:"sport",
        image:Sports
    },
    {
        name:"thriller",
        image:Thriller
    },
    {
        name:"war",
        image:War
    },
    {
        name:"western",
        image:Western
    },
  ];

  export const genreSlice = createSlice({
    name: "genres",
    initialState, 
    reducers: {
        addGenres: (state, action: PayloadAction<Genre[]>) => {
            return action.payload;
        },
    }
}) 

export const { addGenres } = genreSlice.actions;
export default genreSlice.reducer;