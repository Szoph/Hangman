"use client";

import styles from "./genrecard.module.scss";
import Image, {StaticImageData} from 'next/image'
import {motion} from 'framer-motion';
import {WoodIcon} from '../imports'
import { useAppSelector, AppDispatch } from "@/redux/game/store";
import { useDispatch } from "react-redux";
import {setGenre} from '@/redux/game/hangman-slice';
import { useRouter } from "next/navigation";


type Props = {
    key?: number;
    genre: string;
    selectGenre?: () => void;
    image: StaticImageData | string;
}



const GenreCards = ({genre, image, selectGenre}: Props) => {

    const router = useRouter()

const dispatch = useDispatch<AppDispatch>();
    const handleGenreSelection = (genre: string) => {
        dispatch(setGenre(genre));
        router.push("/game")
        
      }
    
    return (
        <>
          
            <motion.div
            whileHover={{ 
                scale: 1.1,
            }}
            className={styles.genreCards} 
            onClick={() => handleGenreSelection(genre)}>
            <WoodIcon
             className={styles.woodIcon}
        
             />

            <motion.div

            initial= {{scale: 1}}
            whileHover={{
                
                scale: 1.5,
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
             objectFit="cover"
             
             />
            </div>

            </motion.div>
        </motion.div>

    </>
    )
};

export default GenreCards;