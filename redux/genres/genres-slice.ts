"use client";
import { Action, Adventure, Horror, Mystery, SciFi, Thriller, War} from "@/app/components/GenreMenuComponents/imports";
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
        image:Adventure
    },
    {
        name: "biography",
        image:Adventure  
    },
    {
        name: "comedy",
        image:Adventure
    },
    {
        name: "documentry",
        image:Adventure  
    },
    {
        name: "family",
        image:Adventure
    },
    {
        name: "fantasy",
        image:Adventure
    },
    {
        name: "film-noir",
        image:Adventure
    },
    {
        name: "history",
        image:Adventure
    },
    {
        name:"horror",
        image:Horror
    },
    {
        name: "music",
        image:Adventure
    },
    {
        name: "musical",
        image:Adventure
    },
    {
        name:"mystery",
        image:Mystery
    },
    {
        name:"romance",
        image:Adventure
    },
    {
        name:"sci-fi",
        image:SciFi
    },
    {
        name:"sport",
        image:Adventure
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
        image:Adventure
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