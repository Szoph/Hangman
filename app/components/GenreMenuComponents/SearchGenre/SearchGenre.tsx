"use client";


import "./searchgenre.scss"
import { useState } from "react";
import GenreCards from "../GenreCards/GenreCards";
import { handleInputChange } from "@/utils/handleInputChange";
import { useAppSelector, AppDispatch } from "@/redux/game/store";
import { UseDispatch } from "react-redux";
import {setGenre} from '@/redux/game/hangman-slice';

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

  // const handleGenreSelection = () => {
    
  //   dispatchEvent(setGenre({genre}))
  // }



  const [searchValue, setSearchValue] = useState<SearchState>({});

  const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>) => {

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
