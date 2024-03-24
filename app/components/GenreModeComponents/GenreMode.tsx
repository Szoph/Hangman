"use client";

import ModeOptions from "./ModeOptions";
import "./genremode.scss";
import { useRouter } from "next/navigation";

const GenreMode = ({genre}: {genre: string}) => {

    const router = useRouter();

    return (
        <div className="genre-mode-container">

            <div className="mode-top-container">

                <div className="mode-header-container">
                    <p className="return-genre" onClick={() => router.push("/genremenu")}>Return to Genre</p>
                </div>

                <h1 className="genre-name">{genre}</h1>
            </div>

            <div className="mode-bottom-container">
                <ModeOptions />
            </div>
        </div>
    )
};

export default GenreMode;