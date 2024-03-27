"use client";

import styles from "./genrecard.module.scss";
import Image, {StaticImageData} from 'next/image'
import {motion} from 'framer-motion';
import Link from "next/link";
import {WoodIcon} from '../imports';
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setGenreName } from "@/redux/game/hangman-backend-slice";
import {setGenre, resetGame} from "@/redux/game/hangman-slice";


type Props = {
    key?: number;
    genre: string;
    selectGenre?: () => void;
    image: StaticImageData | string;
}

const GenreCards = ({genre, image, selectGenre}: Props) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleReduxGenreName = () => {
        dispatch(setGenreName(genre));
        dispatch(setGenre(genre));
    }

//   const handleGenre = (genre: string) => {
//         dispatch(setGenre(genre))
//         // dispatch(resetGame())
//     }

    return (
        <Link href={`/genremode/${genre}`} onClick={handleReduxGenreName}>
            <motion.div 
            className={styles.genreCards}>
            <WoodIcon
             className={styles.woodIcon}/>

            <motion.div
            initial= {{scale: 1}}
            whileHover={{
                scale: 1.2,
                transition: {
                    yoyo: 10,
                }
            }}
            className={styles.overLay}>
                
            <p className={styles.genreText}>{genre}</p>
            <div className={styles.imageWrapper}>  
            <Image
             alt="image"
            src={image}
             layout="responsive"
             height={500}
             width={undefined}
             className={styles.cardImage}
             objectFit="cover"/>
            </div>
            </motion.div>
        </motion.div>

    </Link>
    )
};

export default GenreCards;