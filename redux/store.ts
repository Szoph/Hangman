import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-slice"; // authReducer is a local variable name given to the auth.reducer exported from the auth-slice. It can be any name
import genreSlice from "./genres/genres-slice";
import movieSlice from "./movies/movies-slice";
import hangmanReducer from "./game/hangman-slice";
import hangmanBackendReducer from "./game/hangman-backend-slice";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["genreSlice"]
};

const rootReducer = combineReducers({
  authReducer,
  genreSlice,
  movieSlice,
  authentication: authReducer,
  hangmanGame: hangmanReducer,
  hangmanBackend: hangmanBackendReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store,{

});

// ReturnType is used to infer the state stucture
export type RootState = ReturnType<typeof store.getState>; // getState gives application access to the state it holds and RootState represents the entire state of the Redux Store

// AppDispatch represents the dispatch state from the store. It is used to type the useDispactch from react-redux, ensuring actions are dispatched correctly.
export type AppDispatch = typeof store.dispatch; // dispatch accepts an action as its parameter and allows updates to the application state.

// useAppSelector is a typed version of the useSelector hook, done by utilizing TypedUsedSelector.
// Specifying RootState as its type ensures that on use of useAppSelector, to select a part of the state, there is autocomplte and type checking fro the state stucture.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
