"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from "@/redux/store";
import AuthClient from "@/utils/clients/authenticationClient";
import { logOut, deleteAccount } from "@/redux/auth/auth-slice";

const AccountOptions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector((state) => state.authentication.value.username);
  const router = useRouter();
  const [process, setProcess] = useState<boolean>(false);
  const [processMessage, setProcessMessage] = useState<string>("Logging Out!");

  const handleLogout = () => {
    AuthClient.signOutUser();
    dispatch(logOut());

    setProcess(true);
    setProcessMessage("Logging out!");
  };

  const handleDeleteAccount = async () => {
    const deleteProcess = await AuthClient.deleteUser(user);
    if (!deleteProcess.success) {
      alert(deleteProcess.message);
      return;
    }

    dispatch(deleteAccount());
    setProcess(true);
    setProcessMessage("Account Deleted!");
  };

  useEffect(() => {
    if (process) {
      setTimeout(() => {
        setProcess(false);
        router.push("/");
      }, 1000);
    }
  }, [process]);

  return (
    <div className="account-section">
      {process && <p className="process-text">{processMessage}</p>}

      <div className="account-options">
        {/* Logout Account */}
        <div
          onClick={handleLogout}
          className="logout-button flex-center account-buttons"
        >
          <p>Logout</p>
        </div>

        {/* Delete Account */}
        <div
          onClick={handleDeleteAccount}
          className="delete-button flex-center account-buttons"
        >
          <p>Delete Account</p>
        </div>
      </div>
    </div>
  );
};

export default AccountOptions;
