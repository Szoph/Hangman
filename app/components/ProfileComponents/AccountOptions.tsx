"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from "@/redux/user/store";
import AuthClient from "@/utils/clients/authenticationClient";
import { logOut, deleteAccount } from "@/redux/auth/auth-slice";

const AccountOptions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector((state) => state.authReducer.value.username)
  const router = useRouter();

  const handleLogout = () => {
    console.log("Log out user");
    // dispatch(logOut())
    // router.push("/");
  };

  const handleDeleteAccount = async () => {
    console.log("Delete account")
    const deleteProcess = await AuthClient.deleteUser(user);
    if (!deleteProcess.success) {
      alert(deleteProcess.message);
      return;
    }

    dispatch(deleteAccount());
    router.push("/");
  };

  return (
    <div className="account-section">
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
  );
};

export default AccountOptions;
