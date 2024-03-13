"use client";

import { useRouter } from "next/navigation";

type Props = {
    height: string;
    width: string;
    url?: string;
    genre: any;
    onClick?: () => void;
}

const GenreCards = ({height, width, url, genre, onClick}: Props) => {
    // const router = useRouter();

    return (
        <div className="genre-cards" style={{height, width}} onClick={onClick}>
            <p className="genre-text">{genre}</p>
        </div>
    )
};

export default GenreCards;