"use client";

import { useRouter } from "next/navigation";

type Props = {
    height: string;
    width: string;
    url?: string;
    genre: any;
}

const GenreCards = ({height, width, url, genre}: Props) => {
    // const router = useRouter();

    return (
        <div className="genre-cards" style={{height, width}}>
            <p className="genre-text">{genre}</p>
        </div>
    )
};

export default GenreCards;