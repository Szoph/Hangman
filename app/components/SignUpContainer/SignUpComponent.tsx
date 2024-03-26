"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
// import { logIn } from "@/redux/auth/auth-slice";
import "./signup.scss";
import { useRouter } from "next/navigation";
import { handleInputChange } from "@/utils/handleInputChange";
import AuthClient from "@/utils/clients/authenticationClient";

interface UserInputState {
  [key: string]: string;
}

const SignUpComponent: React.FC = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState<UserInputState>({
    username: "",
    password: "",
    repassword: "",
  });
  // const [error, setError] = useState<boolean>(false); Future error messages
  const [userSignedUp, setUserSignedUp] = useState<boolean>(false)
  const [startSignupProcess, setStartSignupProcess] = useState<boolean>(false);
  // const dispatch = useDispatch<AppDispatch>();

  const userName = useAppSelector((state) => state.authentication.value.username);
  const isAuth = useAppSelector((state) => state.authentication.value.isAuth);

  const emptyInputCheck = () => {
    for (const key in userInput) {
      if (!userInput[key]) {
        return false;
      }
    }

    return true;
  };

  const usernameCheck = (): boolean => {
    return userInput.username.length > 3 && userInput.username.length < 24;
  };

  const samePasswordCheck = (): boolean => {
    return userInput.password === userInput.repassword;
  };

  // const passwordStrengthCheck = (): boolean => {
  //   const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

  //   return pattern.test(userInput.password);
  // };

  const checkUserInput = (): boolean => {
    if (!emptyInputCheck()) {
      alert("Please fill in all fields");
      return false;
    }

    if (!usernameCheck()) {
      alert("Ensure the username is between 3 and 24 letters!");
      return false;
    }

    if (!samePasswordCheck()) {
      alert("Passwords must match!");
      return false;
    }

    // if (!passwordStrengthCheck()) {
    //   alert(
    //     "Password must include: 8 Characters, 1 Capital Letter, 1 Number and 1 Special Character"
    //   );
    //   return;
    // }

    return true;
  };

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    setStartSignupProcess(true);

    if (!checkUserInput()) {
      setStartSignupProcess(false);
      return;
    }

    const userExists = await AuthClient.userExists(userInput.username);
    if (userExists.success) {
      alert(userExists.message);
      setStartSignupProcess(false);
      return;
    }

    const signupProcess = await AuthClient.signUpUser(userInput.username, userInput.password);
    if (!signupProcess.success) {
      alert(signupProcess.error);
      setStartSignupProcess(false);
      return;
    }

    setStartSignupProcess(false);
    setUserSignedUp(true);
    // dispatch(logIn(userInput.username));
  };

  useEffect(() => {
    if (userSignedUp) {
      setTimeout(() => {
        router.push("/signin");
      }, 1000);
    }
  }, [userSignedUp])

  return (
    <div className="sign-up-form">
      <div className="sign-up-form__title">
      <h2 className="sign-up-form__welcome">Welcome to</h2>
        <h2 className="sign-up-form__title-text">Hangman Game</h2>
      </div>

      <form onSubmit={handleSignUp} className="sign-up-form__form-input">
        
        {userSignedUp && <p className="sign-up-form__signed-up-text">Account Created!</p>}
        {isAuth && <h3 className="sign-up-form__user">Username: {userName}</h3>}
        <input
        className="sign-up-form__input-username"
          type="text"
          placeholder="Username"
          value={userInput?.username || ""}
          name="username"
          onChange={(e) => handleInputChange(e, userInput, setUserInput)}
        />
        <input
        className="sign-up-form__input-password"
          type="text"
          placeholder="Password"
          name="password"
          value={userInput?.password || ""}
          onChange={(e) => handleInputChange(e, userInput, setUserInput)}
        />
        <input
        className="sign-up-form__input-password"
          type="text"
          placeholder="Re-type Password"
          name="repassword"
          value={userInput?.repassword || ""}
          onChange={(e) => handleInputChange(e, userInput, setUserInput)}
        />
        <button disabled={startSignupProcess} className={`sign-up-form__btn ${startSignupProcess && "disabled-sign-up"} `}>Sign Up</button>

        <>
          <p className="sign-up-form__acc">Already have an account? </p>
          <div className="sign-up-form__extra-buttons">
            <a href="/signin" className="sign-up-form__sign-in-btn">
              Sign In
            </a>
            <a href="/genremenu" className="sign-up-form__continue-btn">
              Continue As Guest
            </a>
          </div>
        </>
      </form>
    </div>
  );
};

export default SignUpComponent;
