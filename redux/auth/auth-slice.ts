import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// an action is an object with a type property.  

// an action creator is a function that returns an action

// reducers specify how the app's state changes in response to actions sent to the store. They accept state and action as arguments and return the next state of the application



// "type = InitialState" and "type = AuthState" are Typescript types that define the shape of the state. They add type safety, ensuring state and actions adhere to the defined structure.
type InitialState = {
    value: AuthState; 
}


type AuthState = { 
    isAuth: boolean; 
    username: string; 
    password: string;
    uid: string;
}

const initialState = {  // this variable provides the initial structure and default values for the state. 
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


export const { logIn, logOut, changePassword, changeUsername, deleteAccount } = auth.actions;

export default auth.reducer;
