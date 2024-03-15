import "./populargenres.scss";
import GenreCards from "../GenreCards/GenreCards";
import SearchGenre from "../SearchGenre/SearchGenre";
import {Action, Thriller, Horror, Comedy } from '../imports'


const PopularGenre = () => {
//   const tempPop = ["Horror", "Romance", "Comedy", "Action"];

  const genreData = [

    {
        genre:"Horror",
        image:Horror
      },

    {
      genre:"Thriller",
      image:Thriller
    },

    {
      genre:"Comedy",
      image:Comedy
    },

    {
        genre:"Action",
        image:Action
      },
  ];

  return (
    <div className="genre-menu-container">

      <div className="popular-container">
        <div className="popular-text-container">
          <h1 className="popular-text">Popular Genres</h1>
        </div>

        <div className="popular-genre-container flex-row">
          {genreData.map((items, index) => (
            <GenreCards key={index}  
            image={items.image}
            genre={items.genre} />
          ))}
        </div>
      </div>


    </div>
  );
};

export default PopularGenre;
