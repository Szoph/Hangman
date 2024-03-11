"use client";

import { useRouter } from "next/navigation";

const AccountOptions = () => {
  const router = useRouter();

  const handleLogout = () => {
    console.log("Log out user");
    router.push("/")
  }

  const handleDeleteAccount = () => {
    console.log("Log out user");
    router.push("/")
  }

  return (
    <div className="account-section">
      {/* Logout Account */}
      <div onClick={handleLogout} className="logout-button flex-center account-buttons">
        <p>Logout</p>
      </div>

      {/* Delete Account */}
      <div onClick={handleDeleteAccount} className="delete-button flex-center account-buttons">
        <p>Delete Account</p>
      </div>
    </div>
  );
};

export default AccountOptions;
