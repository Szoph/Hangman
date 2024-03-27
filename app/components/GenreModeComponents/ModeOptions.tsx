"use client";

import ModeCard from "./ModeCard";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import {setWord, easyMode, mediumMode, hardMode} from '@/redux/game/hangman-slice';
import { useRouter } from "next/navigation";

const ModeOptions = () => {
  const mode: string[] = ["Easy", "Medium", "Hard"];

  const router = useRouter()

  const dispatch = useDispatch<AppDispatch>();
  const movies = useAppSelector((state) =>  { return state.movieSlice});

  // // const movies = movieList[1] || []


  // console.log("This is the movie slice in mode options", movies)




  // const easyMode = () => {};

  // const mediumMode = () => {};

  // const hardMode = () => {};

  const handleMode = (modeIndex: number) => {
    switch (modeIndex) {
      case 0: // Handle Easy mode
        console.log("Easy Mode");
        dispatch(easyMode({ movies }))
        break;
      case 1: // Handle Medium mode
        console.log("Medium Mode");
        dispatch(mediumMode({ movies }))
        break;
      case 2: // Handle Hard mode
        console.log("Hard Mode");
        dispatch(hardMode({ movies }))
        break;
      default:
        dispatch(setWord(movies)); // Argument of type 'InitialState' is not assignable to parameter of type 'MoviesPayload'.Index signature for type 'string' is missing in type 'Movie[]'.ts(2345)
        break;
    }
 
    router.push("/game")
  };

  return (
    <div className="mode-options">
      {mode.map((modeOption: string, index: number) => (
       
        <ModeCard
          key={index}
          mode={modeOption}
          onClick={() => handleMode(index)}
        />
      ))}
    </div>
  );
};

export default ModeOptions;
