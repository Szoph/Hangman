"use client";


import "./searchgenre.scss"
import { useState } from "react";
import GenreCards from "../GenreCards/GenreCards";
import { handleInputChange } from "@/utils/handleInputChange";
import { Genre } from "@/redux/genres/genres-slice";
import { Movie } from "@/redux/movies/movies-slice";

interface SearchState {
  [key: string]: string;
}

const SearchGenre = ({genres}: {genres: Genre[]}, {movies}:{movies: Movie[]}) => {

  const [selectedGenre, setSelectedGenre] = useState("");

  const handleOnClickGenre = () => {
    
  }
  const handleScroll = () => {
    
  //   dispatchEvent(setGenre({genre}))
   }


  const randomMovie = (movie: string) => {

  }

  const [searchValue, setSearchValue] = useState<SearchState>({});

  const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>) => {

    const {value} = e.target;

    setSearchValue({ ...searchValue, search: value})
  }

  // Filter the genres based on the search input
  const filteredGenres = searchValue["search"]
    ? genres.filter((genre) =>
        genre.name.toLowerCase().includes(searchValue["search"]?.toLowerCase())
      )
    : genres;

  return (
    <section className="search-genre-container">
      <form className="search-bar-container">
        <label className="search-bar-text">Search Genres</label>
        <input
          type="text"
          name="search"
          value={searchValue["search"] || ""}
          onChange={handleInputChange}
          className="search-input"
        />
      </form>

      <div className="other-genre-container">
        {filteredGenres.length > 0 ? (
          filteredGenres.map((filteredGenre, index) => (
            
            <GenreCards
              key={index}
              genre={filteredGenre.name}
              image={filteredGenre.image}
              // selectGenre={handleGenreSelection}
            />
          ))
        ) : (
          <div className="no-genre">
            <p style={{ fontSize: "40px"}}>Genre doesn't exist!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchGenre;
