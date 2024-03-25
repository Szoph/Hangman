"use client";

import ModeCard from "./ModeCard";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setWord } from "@/redux/game/hangman-slice";
import { resetHangmanGame, setGameMode } from "@/redux/game/hangman-backend-slice";
import { useRouter } from "next/navigation";

const ModeOptions = () => {
  const mode: string[] = ["Easy", "Medium", "Hard"];

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const movies = useAppSelector((state) => {
    return state.movieSlice;
  });

  const handleMode = (modeIndex: number) => {
    switch (modeIndex) {
      case 0: // Handle Easy mode
        dispatch(setGameMode(1));
        break;
      case 1: // Handle Medium mode
        dispatch(setGameMode(2));
        break;
      case 2: // Handle Hard mode
        dispatch(setGameMode(3));
        break;
      default:
        dispatch(resetHangmanGame());
        break;
    }
    dispatch(setWord(movies));
    router.push("/game");
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
