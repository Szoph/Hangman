import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HangmanGameBackend = {
    username: string;
    genre_name: string;
    game_mode: number;
    win: boolean;
    stored: boolean;
};

const initialState: HangmanGameBackend = {
    username: "",
    genre_name: "",
    game_mode: 0,
    win: false,
    stored: false,
};

export const hangmanBackend = createSlice({
    name: "hangmanBackend",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setGenreName: (state, action: PayloadAction<string>) => {
            state.genre_name = action.payload;
        },
        setGameMode: (state, action: PayloadAction<number>) => {
            state.game_mode = action.payload;
        },
        setUserSuccess: (state, action: PayloadAction<boolean>) => {
            state.win = action.payload;
        },
        setGameStored: (state, action: PayloadAction<boolean>) => {
            state.stored = action.payload;
        },
        resetHangmanGame: (state) => {
            state.genre_name = "";
            state.game_mode = 0;
            state.win = false;
        },
    }
});

export const {
    setUsername,
    setGenreName,
    setGameMode,
    setUserSuccess,
    setGameStored,
    resetHangmanGame
} = hangmanBackend.actions;

export default hangmanBackend.reducer;
