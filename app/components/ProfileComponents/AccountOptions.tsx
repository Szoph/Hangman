"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
// import { AppDispatch, useAppSelector } from "@/redux/user/store";
// import { logOut, deleteAccount } from "@/redux/auth/auth-slice";

const AccountOptions = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogout = () => {
    console.log("Log out user");
    // dispatch(logOut())
    router.push("/");
  };

  const handleDeleteAccount = () => {
    console.log("Log out user");
    // dispatch(deleteAccount())
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
