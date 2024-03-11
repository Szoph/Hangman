"use client";

import { useRouter } from "next/navigation";
import "@/app/styles/profile.css";
import HangmanAvatar from "../components/HangmanAvatar";
import EditProfile from "../components/ProfileComponents/EditProfile";
import AccountOptions from "../components/ProfileComponents/AccountOptions";

const ProfilePage = () => {
    return (
        <div className="profile-background">
            <HangmanAvatar />

            <div className="profile-content">
                {/* Return Button */}
                <div className="return-container">
                    <p className="return-button">Return to Genre</p>
                </div>

                {/* User Avatar */}
                <div className="user-avatar-container flex-center">
                    <img alt="avatar" src="/default-avatar.png" className="flex-center user-avatar"/>
                    <p className="username flex-center">Tony</p>
                </div>

                {/* User Edit Form */}
                <EditProfile />

                <AccountOptions />
            </div>
        </div>
    )
};

export default ProfilePage;