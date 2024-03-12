"use client";
import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import Image from "next/image";
import {AppDispatch, useAppSelector} from "@/redux/user/store";
import { logIn } from "@/redux/auth/auth-slice";



const SignInComponent: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const userName = useAppSelector((state) => state.authReducer.value.username); 
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const handleSignIn = () => {
    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    } else {
        dispatch(logIn(username));
    }
    
  }


  return (
    <div className="sign-in-form">
      <div className="title">
        <h2>Hangman Game</h2>
      </div>
      <div className="form-input">
      <h2>Welcome Back!</h2>
      {isAuth && <h3>Username: {userName}</h3>}
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
      <p>Don't have an account? </p>
      <div className="extraButtons">
        <button className="signUpBtn">Sign Up</button>
      <button className="continueBtn">Continue As Guest</button>
      </div>
      
      </div>
      </div>
  )
}

export default SignInComponent