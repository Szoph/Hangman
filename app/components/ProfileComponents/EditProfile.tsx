"use client";

import { useState, useEffect } from "react";
import { handleInputChange } from "@/utils/handleInputChange";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { changeUsername } from "@/redux/auth/auth-slice";
import AuthClient from "@/utils/clients/authenticationClient";
interface ProfileState {
  [key: string]: string;
}

const EditProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector((state) => state.authentication.value);
  const [profile, setProfile] = useState<ProfileState>({});
  const [changeType, setChangeType] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const checkBothInputs = (oldValue: string, newValue: string) => {
    return oldValue === undefined && newValue === undefined;
  };

  const handleForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: string
  ) => {
    e.preventDefault();

    setChangeType(type);

    const oldValue: string =
      type === "username" ? "old_username" : "old_password";
    const newValue: string =
      type === "username" ? "new_username" : "new_password";

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

    if (
      type === "username" &&
      profile[oldValue].toLowerCase() !== user.username.toLowerCase()
    ) {
      setErrorMessage("Ensure you input your current username, for old username");
      setError(true);
      return;
    }

    if (profile[oldValue].toLowerCase() === profile[newValue].toLowerCase()) {
      setErrorMessage(`${type} mustn't be the same`);
      setError(true);
      return;
    }

    const updateProcess = await AuthClient.updateUser(user.username, type, profile[oldValue], profile[newValue]);
    if (!updateProcess.success) {
      setErrorMessage(
        updateProcess.error,
      );
      setError(true);
      return;
    }

    if (type == 'username') {
      dispatch(changeUsername(profile[newValue]));
    }
    setSuccessMessage(true);
    // Dispatch
  };



  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setChangeType(null);
      setSuccessMessage(false)
    }, 2000);
  }, [error, changeType, successMessage]);

  return (
    <>
      <form className="edit-form">
        {/* Change Username */}
        <div
          className="section"
          style={{ opacity: changeType === "username" ? "0.4" : "" }}
        >
          <p className="change-text">Change username</p>
          {/* Error Message */}
          {error && changeType == "username" && (
            <p className="error-text">{errorMessage}</p>
          )}
          {/* Success Message */}
          {successMessage && changeType == "username" && (
            <p className="success-text">Username has been changed</p>
          )}
          <div className="changing-section">
            <div className="change">
              <input
                name="old_username"
                value={profile["old_username"] || ""}
                placeholder="Enter old username"
                onChange={(e) => handleInputChange(e, profile, setProfile)}
                className="change-input"
              />
            </div>
            <div className="change">
              <input
                name="new_username"
                value={profile["new_username"] || ""}
                placeholder="Enter new username"
                onChange={(e) => handleInputChange(e, profile, setProfile)}
                className="change-input"
              />
            </div>

            <button
              onClick={(e) => handleForm(e, "username")}
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
          {/* Error Message */}
          {error && changeType == "password" && (
            <p className="error-text">{errorMessage}</p>
          )}
          {/* Succcess Message */}
          {successMessage && changeType == "password" && (
            <p className="success-text">Password has been changed</p>
          )}
          <div className="changing-section">
            <div className="change">
              <input
                type="text"
                name="old_password"
                value={profile["old_password"] || ""}
                placeholder="Enter old password"
                onChange={(e) => handleInputChange(e, setProfile, setProfile)}
                className="change-input"
              />
            </div>
            <div className="change">
              <input
                type="text"
                name="new_password"
                value={profile["new_password"] || ""}
                placeholder="Enter new password"
                onChange={(e) => handleInputChange(e, setProfile, setProfile)}
                className="change-input"
              />
            </div>

            <button
              onClick={(e) => handleForm(e, "password")}
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
