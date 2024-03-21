"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/user/store";
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

  const userName = useAppSelector((state) => state.authReducer.value.username);
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

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
      <div className="title">
        <h2>Hangman Game</h2>
      </div>

      <form onSubmit={handleSignUp} className="form-input">
        <h2>Welcome!</h2>
        {userSignedUp && <p className="signed-up-text">Account Created!</p>}
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
          name="password"
          value={userInput?.password || ""}
          onChange={(e) => handleInputChange(e, userInput, setUserInput)}
        />
        <input
          type="text"
          placeholder="Re-type Password"
          name="repassword"
          value={userInput?.repassword || ""}
          onChange={(e) => handleInputChange(e, userInput, setUserInput)}
        />
        <button disabled={startSignupProcess} className={`${startSignupProcess && "disabled-sign-up"}`}>Sign Up</button>

        <>
          <p>Already have an account? </p>
          <div className="extraButtons">
            <a href="/signin" className="signInBtn">
              Sign In
            </a>
            <a href="/genremenu" className="continueBtn">
              Continue As Guest
            </a>
          </div>
        </>
      </form>
    </div>
  );
};

export default SignUpComponent;
