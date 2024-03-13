"use client";

import { useState } from "react";
import GenreCards from "./GenreCards";
import { handleInputChange } from "@/utils/handleInputChange";

interface SearchState {
  [key: string]: string;
}

const SearchGenre = () => {
  const tempGenre = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Thriller",
    "Western",
    "Musical",
    "War",
  ];

  const [searchValue, setSearchValue] = useState<SearchState>({});

  // Filter the genres based on the search input
  const filteredGenres = searchValue["search"]
    ? tempGenre.filter((genre) =>
        genre.toLowerCase().includes(searchValue["search"]?.toLowerCase())
      )
    : tempGenre;

  return (
    <div className="search-genre-container">
      <form className="search-bar-container">
        <label className="search-bar-text">Search Genres</label>
        <input
          type="text"
          name="search"
          value={searchValue["search"] || ""}
          onChange={(e) => handleInputChange(e, searchValue, setSearchValue)}
          className="search-input"
        />
      </form>

      <div className="other-genre-container">
        {filteredGenres.length > 0 ? (
          filteredGenres.map((filteredGenre, index) => (
            <GenreCards
              key={index}
              height="14em"
              width="18em"
              genre={filteredGenre}
            />
          ))
        ) : (
          <div className="no-genre">
            <p style={{ fontSize: "40px"}}>Genre doesn't exist!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchGenre;
