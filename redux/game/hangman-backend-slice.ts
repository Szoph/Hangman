import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HangmanGameBackend = {
    game_id: number;
    username: string;
    genre_name: string;
    game_mode: number;
    points_earned: number;
    correct_answers: number;
    incorrect_answers: number;
    win: boolean;
};

const initialState: HangmanGameBackend = {
    game_id: 0,
    username: "",
    genre_name: "",
    game_mode: 0,
    points_earned: 0,
    correct_answers: 0,
    incorrect_answers: 0,
    win: false,
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
        setPointsEarned: (state, action: PayloadAction<number>) => {
            state.points_earned = action.payload;
        },
        incrementCorrectAnswers: (state) => {
            state.correct_answers++;
        },
        incrementIncorrectAnswers: (state) => {
            state.incorrect_answers++;
        },
        setUserSuccess: (state, action: PayloadAction<boolean>) => {
            state.win = action.payload;
        },
        resetHangmanGame: (state) => {
            state.genre_name = "";
            state.game_mode = 0;
            state.points_earned = 0;
            state.correct_answers = 0;
            state.incorrect_answers = 0;
            state.win = false;
        },
    }
})

export const {
    setUsername,
    setGenreName,
    setGameMode,
    setPointsEarned,
    incrementCorrectAnswers,
    incrementIncorrectAnswers,
    setUserSuccess,
    resetHangmanGame
} = hangmanBackend.actions;

export default hangmanBackend.reducer;
