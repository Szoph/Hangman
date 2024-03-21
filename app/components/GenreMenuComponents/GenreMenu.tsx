"use client";

import "./genremenu.scss";
import GenreCards from "./GenreCards/GenreCards";
import SearchGenre from "./SearchGenre/SearchGenre";
import UserAvatar from "../ProfileComponents/UserAvatar";
import PopularGenre from "./PopularGenres/PopularGenres";

// import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/user/store";


const GenreMenu = () => {

  // const dispatch = useDispatch<AppDispatch>();

  const userName = useAppSelector((state) => state.authReducer.value.username);

  console.log(userName);


  return (
    <section className="genre-menu-container">

      <h1>{userName}</h1>

      <div className="popular-container">
        <div className="popular-genre-container">
          <PopularGenre/>
        </div>
      </div>

      <SearchGenre />
    </section>
  );
};

export default GenreMenu;
