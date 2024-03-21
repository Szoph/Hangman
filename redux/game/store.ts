import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import hangmanReducer from "./hangman-slice";
import authReducer from '../auth/auth-slice';

export const store = configureStore({
    reducer: {
       hangmanGame: hangmanReducer,
       authentication: authReducer,

    }
}); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector