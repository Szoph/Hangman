"use client";

import ModeCard from "./ModeCard";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import {resetGame, setWord} from '@/redux/game/hangman-slice';
import { useRouter } from "next/navigation";
import { setMode } from "@/redux/game/hangman-slice";
import { TimerMode } from "@/redux/game/hangman-slice";

const ModeOptions = () => {
  const mode: TimerMode[] = ["easy", "medium", "hard"];

  const router = useRouter()

  const dispatch = useDispatch<AppDispatch>();
  const movies = useAppSelector((state) =>  { return state.movieSlice});

  const handleMode = (modeIndex: number) => {
    switch (modeIndex) {
      case 0: // Handle Easy mode
        console.log("Easy Mode");
        break;
      case 1: // Handle Medium mode
        console.log("Medium Mode");
        break;
      case 2: // Handle Hard mode
        console.log("Hard Mode");
        break;
      default:
        break;
    }
    dispatch(resetGame())
    dispatch(setMode(mode[modeIndex]))
    dispatch(setWord(movies));
    router.push("/game")
  };

  return (
    <div className="genre-mode__mode-options">
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
