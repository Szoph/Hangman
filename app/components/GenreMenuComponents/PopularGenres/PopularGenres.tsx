"use client"
import "./populargenres.scss";
import GenreCards from "../GenreCards/GenreCards";
import SearchGenre from "../SearchGenre/SearchGenre";
import { Genre } from "@/redux/genres/genres-slice";


const PopularGenre = ({genres}: {genres: Genre[]} ) => {
  console.log(genres)
//   const tempPop = ["Horror", "Romance", "Comedy", "Action"];

  // const genreData = [

  //   {
  //       genre:"Horror",
  //       image:Horror
  //     },

  //   {
  //     genre:"Thriller",
  //     image:Thriller
  //   },

  //   {
  //     genre:"Comedy",
  //     image:Comedy
  //   },

  //   {
  //       genre:"Action",
  //       image:Action
  //     },
  // ];

  return (
      <div className="popular-container">
        <div className="popular-text-container">
          <h1 className="popular-text">Popular Genres</h1>
        </div>

        <div className="popular-genre-container flex-row">
          {genres.slice(0,3).map((genre, index) => {
            return <GenreCards key={index}  
            image={genre.image}
            genre={genre.name} />
          })}
        </div>

      </div>


  );
};

export default PopularGenre;
