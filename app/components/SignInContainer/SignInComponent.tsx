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
    <div className="sign-in-form">
      <div className="title">
        <h2>Hangman Game</h2>
      </div>

      <form onSubmit={handleSignIn} className="form-input">
        <h2>Welcome Back!</h2>
        {userSignedIn && <p className="signed-in-text">Signed In</p>}
        {error && <p className="signed-in-error-text">Failed to sign in</p>}
        {isAuth && <h3>Username: {userName}</h3>}
        <input
          type="text"
          placeholder="Username"
          value={userInput?.username || ""}
          name="username"
          onChange={(e) => handleInputChange(e, userInput, setUserInput)}
        />

        <input
          type="text"
          placeholder="Password"
          value={userInput?.password}
          name="password"
          onChange={(e) => handleInputChange(e, userInput, setUserInput)}
        />

        <button>Sign In</button>

        <p>Don't have an account? </p>
        <div className="extraButtons">
          <a href="/signup" className="signUpBtn">
            Sign Up
          </a>
          <a href="/genremenu" className="continueBtn">
            Continue As Guest
          </a>
        </div>

      </form>
    </div>
  );
};

export default SignInComponent;
