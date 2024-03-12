import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type InitialState = {
    value: AuthState; 
}


type AuthState = {
    isAuth: boolean; 
    username: string; 
    password: string;
    uid: string;
} 
const initialState = {
    value: {
        isAuth: false,
        username: "",
        password: "",
        uid: "",
    } as AuthState,
} as InitialState; 

export const auth = createSlice({
    name: "auth", 
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    ...state.value,
                    isAuth: true,
                    username: action.payload,
                    uid: 'user',
                }
            }
        },
        changeUsername: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                value: {
                    ...state.value,
                    username: action.payload,
                },
            };
        },
        changePassword: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                value: {
                    ...state.value,
                    password: action.payload,
                },
            };
        },
        deleteAccount: (state) => {
            return {
                ...state,
                value: {
                    isAuth: false,
                    username: '',
                    password: '',
                    uid: '',
                },
            };
        },
    },
}); 


export const { logIn, logOut, changePassword, changeUsername, deleteAccount } = auth.actions
export default auth.reducer;
