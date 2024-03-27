import React from 'react'
import './genretitle.scss'
import {useAppSelector} from "@/redux/store";

const GenreTitle: React.FC = () => {
 
  const genreName = useAppSelector((state) => state.hangmanBackend.genre_name)

  return (
    <div className="genre">
      <span className="genreText">{genreName}</span>
    </div>
  )
}

export default GenreTitle