"use client";

import ModeOptions from "./ModeOptions";
import "./genremode.scss";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { addMovies } from "@/redux/movies/movies-slice";
import GameClient from "@/utils/clients/gameClient";

const GenreMode = ({ genre }: { genre: string }) => {
  const router = useRouter();
  const genres = useAppSelector((state) => {
    return state.genreSlice;
  });
  const dispatch = useDispatch<AppDispatch>();

  const movies = useAppSelector((state) => state.movieSlice);
  useEffect(() => {
    const getData = async () => {
      const data = await GameClient.getMoviesByGenre(genre);
      console.log(data);
      console.log("The should be the data from the backend", data);
      if (data?.movies) {
        dispatch(addMovies(data.movies));
      }
    };
    getData();
  }, []);

  return (
    <div className="genre-mode">
      <div className="genre-mode__top">
        <div className="genre-mode__header-container">
          <p
            className="genre-mode__return-genre"
            onClick={() => router.push("/genremenu")}
          >
            Return to Genre
          </p>
        </div>
        <h1 className="genre-mode__genre-title">Choose a Difficulty Level</h1>
        <h2 className="genre-mode__genre-name">Genre: {genre}</h2>
      </div>

      <div className="genre-mode__bottom-container">
        {movies.length !== 0 ? <ModeOptions /> : <></>}
      </div>
    </div>
  );
};

export default GenreMode;
