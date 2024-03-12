"use client";

import Link from "next/link";
import "@/app/styles/ProfileStyles/profile.css";
import HangmanAvatar from "../components/HangmanAvatar";
import EditProfile from "../components/ProfileComponents/EditProfile";
import AccountOptions from "../components/ProfileComponents/AccountOptions";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/user/store";

const ProfilePage = () => {
  const user = useAppSelector((state) => state.authReducer.value);

  return (
    <div className="profile-background">
      <HangmanAvatar />

      <div className="profile-content">
        {/* Return Button */}
        <div className="return-container">
          <Link href="/genremenu">
            <p className="return-button">Return to Genre</p>
          </Link>
        </div>

        {/* User Avatar */}
        <div className="user-avatar-container flex-center">
          <img
            alt="avatar"
            src="/default-avatar.png"
            className="flex-center user-avatar"
          />
          {user.isAuth && <p className="username flex-center">{user.username}</p>}
        </div>

        {/* User Edit Form */}
        <EditProfile />

        <AccountOptions />
      </div>
    </div>
  );
};

export default ProfilePage;
