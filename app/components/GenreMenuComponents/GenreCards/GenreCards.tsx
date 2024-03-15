"use client";

import { useRouter } from "next/navigation";
import styles from "./genrecard.module.scss";
import Image, {StaticImageData} from 'next/image'


type Props = {
    key?: number;
    genre: string;
    onClick?: () => void;
    image: StaticImageData | string;
}



const GenreCards = ({genre, image, onClick}: Props) => {


    return (
        <>
            <div  className={styles.genreCards} onClick={onClick}>
            <div className={styles.overLay}>
            <p className={styles.genreText}>{genre}</p>
            <Image
             alt="image"
             src={image}
             height={500}
             width={undefined}
             className={styles.cardImage}
             objectFit="cover"
             />

            </div>
        </div>

    </>
    )
};

export default GenreCards;