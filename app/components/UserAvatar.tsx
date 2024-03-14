import React from "react";
import "@/app/styles/useravatar.css"

type Props = {
    className?: string;
    onClick?: () => void;
}

const UserAvatar = ({className, onClick}: Props) => {
    return (
        <div className={`user-avatar-container ${className}`} onClick={onClick}>
            <img
            alt="avatar"
            src="/default-avatar.png"
            className="flex-center user-avatar"
          />
        </div>
    );
};

export default UserAvatar;