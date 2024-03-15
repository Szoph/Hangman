"use client";
import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import Image from "next/image";
import {AppDispatch, useAppSelector} from "@/redux/user/store";
import { logIn } from "@/redux/auth/auth-slice";
import "./signup.scss"


const SignUpComponent: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const userName = useAppSelector((state) => state.authReducer.value.username);
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const handleSignUp = () => {
    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    } else {
        dispatch(logIn(username));
    }
    
  }


  return (
    <div className="sign-up-form">
      <div className="title">
        <h2>Hangman Game</h2>
      </div>
      <div className="form-input">
      <h2>Welcome!</h2>
      {isAuth && <h3>Username: {userName}</h3>}
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="passwordCheck" placeholder="Re-type Password" />
      <button onClick={handleSignUp}>Sign Up</button>
      <p>Already have an account? </p>
      <div className="extraButtons">
        <a href="/signin" className="signInBtn">Sign In</a>
      <a href="/genremenu"className="continueBtn" >Continue As Guest</a>
      </div>
      
      </div>
      </div>
  )
}

export default SignUpComponent