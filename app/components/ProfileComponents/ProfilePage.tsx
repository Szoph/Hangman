"use client";

import Link from "next/link";
import "./profile.scss";
import HangmanAvatar from "../../components/HangmanAvatar";
import EditProfile from "./EditProfile";
import AccountOptions from "./AccountOptions";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
// import { useDispatch } from "react-redux";

const ProfilePage = () => {
  const user = useAppSelector((state) => state.authentication.value);

  return (
    <div className="profile-page">
      <div className="profile-page__content">
        {/* Return Button */}
        <div className="profile-page__return-container">
          <Link href="/genremenu" className="profile-page__return-link">
            <p className="profile-page__return-button">Return to Genre</p>
          </Link>
        </div>

        {/* User Avatar */}
        <div className="profile-page__user-container">
          <img
            alt="avatar"
            src="/default-avatar.png"
            className="profile-page__user-avatar"
          />
          {user.isAuth && <p className="profile-page__username">{user.username}</p>}
        </div>

        {/* User Edit Form */}
        <EditProfile />

        <AccountOptions />
      </div>
    </div>
  );
};

export default ProfilePage;
