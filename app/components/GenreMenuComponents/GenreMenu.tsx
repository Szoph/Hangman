"use client";
import "./genremenu.scss";
import GenreCards from "./GenreCards/GenreCards";
import SearchGenre from "./SearchGenre/SearchGenre";
import UserAvatar from "../ProfileComponents/UserAvatar";
import PopularGenre from "./PopularGenres/PopularGenres";
import { useAppSelector } from "@/redux/store";

const GenreMenu = () => {
  const genres = useAppSelector((state) => {
    return state.genreSlice;
  });

  return (
    <section className="genre-menu-container">
      <div className="popular-container">
        <div className="popular-genre-container">
          <h1 className="genre-menu-title">Choose A Movie Genre</h1>
          <PopularGenre genres={genres} />
        </div>
      </div>

      <SearchGenre genres={genres} />
    </section>
  );
};

export default GenreMenu;
