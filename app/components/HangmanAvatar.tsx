import "@/app/styles/GameStyles/hangman.css";
import Link from "next/link";

const HangmanAvatar = () => {
  return (
    <div className="home-hangman">
      <Link href="/">
        <div className="temp-avatar"></div>
      </Link>
    </div>
  );
};

export default HangmanAvatar;
