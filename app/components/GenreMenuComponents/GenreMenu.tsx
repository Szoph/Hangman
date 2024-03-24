"use client"
import "./genremenu.scss";
import GenreCards from "./GenreCards/GenreCards";
import SearchGenre from "./SearchGenre/SearchGenre";
import UserAvatar from "../ProfileComponents/UserAvatar";
import PopularGenre from "./PopularGenres/PopularGenres";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { AppDispatch } from  "@/redux/user/store";
import { useAppSelector } from "@/redux/user/store";
import { addMovies } from "@/redux/movies/movies-slice";

type MoviesResponse = {
  movies: [
    {
      title: string;
      posterImage: string
    }
  ];
}

const getMovies = async() => {
    const options = {
        method: 'GET',
        url: 'https://moviesverse1.p.rapidapi.com/get-by-genre',
        params: {genre: 'sport'},
        headers: {
          'X-RapidAPI-Key': '9d860e7eadmsh3c5c3008957e407p17047fjsn4a306dbb1903',
          'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
        }
      };
      try{
        const response = await axios.request<MoviesResponse>(options);
        return response.data;
      }catch(err){
        console.log(err)
      }  
    }




const GenreMenu = () => {

  const genres = useAppSelector((state) => state.genreSlice);
  const dispatch = useDispatch<AppDispatch>();

  const movies = useAppSelector((state) => state.movieSlice);
  useEffect(() => {
    const getData = async() => {
      const data = await getMovies();
      console.log(data);
      if(data?.movies) {
        dispatch(addMovies(data.movies))
      }
    }
    getData()
},[])
  return (
    <section className="genre-menu-container">

      <div className="popular-container">
        <div className="popular-genre-container">
          <PopularGenre genres={genres}/>
        </div>
      </div>

      <SearchGenre genres={genres} movies={movies}/>
    </section>
  );
};

export default GenreMenu;
