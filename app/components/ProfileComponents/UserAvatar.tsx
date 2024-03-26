import React from "react";

import Image from 'next/image'



type Props = {

    onClick?: () => void;
}

const UserAvatar = ({onClick}: Props) => {
    return (
        <div className="user-avatar-container" onClick={onClick}>
            <Image
            width={100}
            height={100}

            objectFit="cover"
            alt="avatar"
            src="/default-avatar.png"
            className="user-avatar"
          />
        </div>
    );
};

export default UserAvatar;