"use client";


import "./searchgenre.scss"
import { useState } from "react";
import GenreCards from "../GenreCards/GenreCards";
import { handleInputChange } from "@/utils/handleInputChange";

import {Action, Thriller, War, SciFi, Adventure, Horror, Mystery } from '../imports'

interface SearchState {
  [key: string]: string;
}

const SearchGenre = () => {
  
  const genreData = [
    {
      genre:"Action",
      image:Action
    },
    {
      genre:"Thriller",
      image:Thriller
    },

    {
      genre:"War",
      image:War
    },

    {
      genre:"Science Fiction",
      image:SciFi
    },

    {
      genre:"Adventure",
      image:Adventure
    },

    
    {
      genre:"Horror",
      image:Horror
    },

    {
      genre:"Mystery",
      image:Mystery
    },

  ];

  const handleScroll = () => {
    
  }


  const [searchValue, setSearchValue] = useState<SearchState>({});

  const handleInputChange =(e: string) => {
    e.preventDefault()
    const {value} = e.target;

    setSearchValue({ ...searchValue, search: value})
  }

  // Filter the genres based on the search input
  const filteredGenres = searchValue["search"]
    ? genreData.filter((item) =>
        item.genre.toLowerCase().includes(searchValue["search"]?.toLowerCase())
      )
    : genreData;

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
              genre={filteredGenre.genre}
              image={filteredGenre.image}
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
