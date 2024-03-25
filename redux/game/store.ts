import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import hangmanReducer from "./hangman-slice";
import authReducer from "../auth/auth-slice";
import { combineReducers } from 'redux';

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  hangmanGame: hangmanReducer,
  authentication: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
