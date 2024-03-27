import React from 'react'
import './genretitle.scss'
import {useAppSelector} from "@/redux/store";

const GenreTitle: React.FC = () => {
 
  const genre = useAppSelector((state) => state.hangmanGame.value.genre)
  const state = useAppSelector((state) => state.hangmanGame.value);
  console.log(state)

  return (
    <div className="genre">
      <span className="genreText">{genre}</span>
    </div>
  )
}

export default GenreTitle