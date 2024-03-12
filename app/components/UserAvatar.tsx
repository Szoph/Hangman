import React from "react";
import "@/app/styles/useravatar.css"

type Props = {
    className?: string;
    onClick?: () => void;
}

const UserAvatar = ({className, onClick}: Props) => {
    return (
        <div className={`user-avatar-container ${className}`} onClick={onClick}>
            <div className="user-avatar"></div>
        </div>
    );
};

export default UserAvatar;