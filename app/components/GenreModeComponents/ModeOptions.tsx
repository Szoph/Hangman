"use client";

import ModeCard from "./ModeCard";

const ModeOptions = () => {
  const mode: string[] = ["Easy", "Medium", "Hard"];

  const easyMode = () => {};

  const mediumMode = () => {};

  const hardMode = () => {};

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
