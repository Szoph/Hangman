import React from 'react'
import './genretitle.scss'


const GenreTitle: React.FC = () => {
  const genre = "Horror";
  return (
    <div className="genre">
      <span className="genreText">{genre}</span>
    </div>
  )
}

export default GenreTitle