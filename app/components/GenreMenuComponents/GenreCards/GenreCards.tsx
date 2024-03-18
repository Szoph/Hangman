"use client";

import { useRouter } from "next/navigation";
import styles from "./genrecard.module.scss";
import Image, {StaticImageData} from 'next/image'
import {motion} from 'framer-motion';


type Props = {
    key?: number;
    genre: string;
    onClick?: () => void;
    image: StaticImageData | string;
}



const GenreCards = ({genre, image, onClick}: Props) => {


    return (
        <>
           
            <motion.div 
            className={styles.genreCards} 
            onClick={onClick}>
            
            <div className={styles.overLay}>
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

            </div>
        </motion.div>

    </>
    )
};

export default GenreCards;