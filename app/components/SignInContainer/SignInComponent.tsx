"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./signin.scss";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { handleInputChange } from "@/utils/handleInputChange";
import AuthClient from "@/utils/clients/authenticationClient";
import { logIn } from "@/redux/auth/auth-slice";

interface UserInputState {
  [key: string]: string;
}

const SignInComponent: React.FC = () => {
  const router = useRouter()
  const [userInput, setUserInput] = useState<UserInputState>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [userSignedIn, setUserSignedIn] = useState<boolean>(false);
  const [signInProcess, setSignInProcess] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const userName = useAppSelector((state) => state.authentication.value.username); 
  const isAuth = useAppSelector((state) => state.authentication.value.isAuth);

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    if (userInput.username === "" || userInput.password === "") {
      alert("Please fill in all fields");
      return;
    } else {
      const userExists = await AuthClient.userExists(userInput.username);
      if (!userExists.success) {
        alert("User doesn't exists!");
        return;
      }

      const signinProcess = await AuthClient.signInUser(userInput.username, userInput.password);

      if (!signinProcess.success) {
        setError(true);
        return;
      }

      const checkAccessToken = await AuthClient.getUser(userInput.username);

      if (!checkAccessToken.success) {
        setError(false);
        alert(checkAccessToken.message);
        return;
      }

      dispatch(logIn(checkAccessToken.data.username));
      setUserSignedIn(true);
    }
  };
  
  useEffect(() => {
    setTimeout(() => {
      if (error) {
        setError(false);
      } else if (userSignedIn) {
        setUserSignedIn(false);
        router.push("/genremenu");
      }
  
    }, 1000)
  }, [error, userSignedIn])

  return (
    <div className="sign-in-page">
      <div className="sign-in-page__title-area">
        <h2 className="sign-in-page__text">Hangman Game</h2>
      </div>

      <form onSubmit={handleSignIn} className="sign-in-page__form-input">
        <h2 className="sign-in-page__welcome">Welcome Back!</h2>
        {userSignedIn && <p className="sign-in-page__signed-in-text">Signed In</p>}
        {error && <p className="sign-in-page__signed-in-error-text">Failed to sign in</p>}
        {isAuth && <h3 className="sign-in-page__username">Username: {userName}</h3>}
        <input
        className="sign-in-page__username-input"
          type="text"
          placeholder="Username"
          value={userInput?.username || ""}
          name="username"
          onChange={(e) => handleInputChange(e, userInput, setUserInput)}
        />

        <input
        className="sign-in-page__password-input"
          type="text"
          placeholder="Password"
          value={userInput?.password}
          name="password"
          onChange={(e) => handleInputChange(e, userInput, setUserInput)}
        />

        <button className="sign-in-page__button">Sign In</button>

        <p className="sign-in-page__acc-text">Don't have an account? </p>
        <div className="sign-in-page__extra-buttons">
          <a href="/signup" className="sign-in-page__sign-up-btn">
            Sign Up
          </a>
          <a href="/genremenu" className="sign-in-page__continue-btn">
            Continue As Guest
          </a>
        </div>

      </form>
    </div>
  );
};

export default SignInComponent;
