"use client";

import { useState, useEffect } from "react";
import { handleInputChange } from "@/utils/handleInputChange";
// import { useDispatch } from "react-redux";
// import { AppDispatch, useAppSelector } from "@/redux/user/store";
// import { changePassword, changeUsername } from "@/redux/auth/auth-slice";


interface ProfileState {
  [key: string]: string;
}

const EditProfile = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const [profile, setProfile] = useState<ProfileState>({});
  const [changeType, setChangeType] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const checkBothInputs = (oldValue: string, newValue: string) => {
    return oldValue === undefined && newValue === undefined;
  };

  const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const oldValue: string =
      changeType === "username" ? "old_username" : "old_password";
    const newValue: string =
      changeType === "username" ? "new_username" : "new_password";

    const emptyCheck: boolean = checkBothInputs(
      profile[oldValue],
      profile[newValue]
    );

    if (emptyCheck) {
      setErrorMessage(
        `Please fill in both ${
          changeType == "username"
            ? "Old Username and New Username"
            : "Old Password and New Password"
        }`
      );
      setError(true);
      return;
    }

    if (changeType === "username") {
      console.log("Change username");
      // dispatch(changeUsername(profile["new_username"]));
    } else {
      console.log("Change Password");
      // dispatch(changePassword(profile["new_password"]));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setChangeType(null);
    }, 2000);
  }, [error, changeType]);

  return (
    <>
      <form onSubmit={handleForm} className="edit-form">
        {/* Change Username */}
        <div
          className="section"
          style={{ opacity: changeType === "username" ? "0.4" : "" }}
        >
          <p className="change-text">Change username</p>
          {error && changeType == "username" && (
            <p className="error-text">{errorMessage}</p>
          )}
          <div className="changing-section">
            <div className="change">
              <input
                name="old_username"
                value={profile["old_username"] || ""}
                placeholder="Enter old username"
                onChange={(e) => handleInputChange(e, setProfile, setProfile)}
                className="change-input"
              />
            </div>
            <div className="change">
              <input
                name="new_username"
                value={profile["new_username"] || ""}
                placeholder="Enter new username"
                onChange={(e) => handleInputChange(e, setProfile, setProfile)}
                className="change-input"
              />
            </div>

            <button
              onClick={() => setChangeType("username")}
              className="change-button"
              disabled={changeType === "username"}
            >
              Change
            </button>
          </div>
        </div>

        {/* Change Password */}
        <div
          className="section"
          style={{ opacity: changeType === "password" ? "0.4" : "" }}
        >
          <p className="change-text">Change Password</p>
          {error && changeType == "password" && (
            <p className="error-text">{errorMessage}</p>
          )}
          <div className="changing-section">
            <div className="change">
              <input
                type="password"
                name="old_password"
                value={profile["old_password"] || ""}
                placeholder="Enter old password"
                onChange={(e) => handleInputChange(e, setProfile, setProfile)}
                className="change-input"
              />
            </div>
            <div className="change">
              <input
                type="password"
                name="new_password"
                value={profile["new_password"] || ""}
                placeholder="Enter new password"
                onChange={(e) => handleInputChange(e, setProfile, setProfile)}
                className="change-input"
              />
            </div>

            <button
              onClick={() => setChangeType("password")}
              className="change-button"
              disabled={changeType === "password"}
            >
              Change
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
