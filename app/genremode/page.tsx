"use client";

import ModeOptions from "../components/GenreModeComponents/ModeOptions";
import UserAvatar from "../components/UserAvatar";
import "@/app/styles/genremode.css";
import { useRouter } from "next/navigation";

const GenreMode = () => {
    const router = useRouter();

    return (
        <div className="genre-mode-container">

            <div className="mode-top-container">

                <div className="mode-header-container">
                    <p className="return-genre" onClick={() => router.push("/genremenu")}>Return to Genre</p>
                    <UserAvatar className="mode-avatar" onClick={() => router.push("/profile")} />
                </div>

                <h1 className="genre-name">Horror</h1>
            </div>

            <div className="mode-bottom-container">
                <ModeOptions />
            </div>
        </div>
    )
};

export default GenreMode;