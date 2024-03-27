"use client";

import ModeOptions from "./ModeOptions";
import "./genremode.scss";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { AppDispatch } from  "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { addMovies } from "@/redux/movies/movies-slice";
import GameClient from "@/utils/clients/gameClient";

type MoviesResponse = {
    movies: [
      {
        title: string;
        posterImage: string
      }
    ];
  }
  
  // const getMovies = async(selectedGenre: string) => {
  //     const options = {
  //         method: 'GET',
  //         url: 'https://moviesverse1.p.rapidapi.com/get-by-genre',
  //         params: {genre: selectedGenre},
  //         headers: {
  //           'X-RapidAPI-Key': '9d860e7eadmsh3c5c3008957e407p17047fjsn4a306dbb1903',
  //           'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
  //         }
  //       };
  //       try{
  //         const response = await axios.request<MoviesResponse>(options);
  //         return response.data;
  //       }catch(err){
  //         console.log(err)
  //       }  
  //     }

    const GenreMode = ({genre}: {genre: string}) => {

    const router = useRouter();
    const genres = useAppSelector((state) =>  { return state.genreSlice});
    const dispatch = useDispatch<AppDispatch>();
  
    const movies = useAppSelector((state) => state.movieSlice);
    useEffect(() => {
      const getData = async() => {
        const data = await GameClient.getMoviesByGenre(genre);
        console.log(data)
        console.log("The should be the data from the backend", data)
        if(data?.movies) {
          dispatch(addMovies(data.movies))
        }
      }
      getData()
  },[])

    return (
        <div className="genre-mode-container">

            <div className="mode-top-container">

                <div className="mode-header-container">
                    <p className="return-genre" onClick={() => router.push("/genremenu")}>Return to Genre</p>
                </div>

                <h1 className="genre-name">{genre}</h1>
            </div>

            <div className="mode-bottom-container">
                {movies.length !== 0 ? (<ModeOptions />):(<></>)}
                
            </div>
        </div>
    )
};

export default GenreMode;