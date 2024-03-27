"use client";
import Image from "next/image";
import handmanscreen from "../../../public/images/handmanscreen.png";
import genrescreen from "../../../public/images/genrescreen.png";
import modescreen from "../../../public/images/modescreen.png";
import gamescreen from "../../../public/images/gamescreen.png";
import "./help.scss";
import Link from "next/link";
import { WoodIcon } from "../GenreMenuComponents/imports";

const Help = () => {
  return (
    <main className="help">
      <div className="wrapper">
        <div className="help__welcome">
          <div className="help__welcome-content">
            <h1 className="help__welcome-title">Welcome to Hangman Game! </h1>
            <Image
              className="welcome-page__monster"
              src="/gameImages/monster5.png"
              alt="Game Monster"
              width={150}
              height={150}
            />
          </div>
          <div className="help__welcome-text">
            <h3>
              Hangman is an old school favorite, a word game where the goal is
              simply to find the missing word or words.
            </h3>
            <p>
              Choose play as a guest to jump right into a game or create an
              account to have your scores stored.
            </p>
            <p>
              <mark>Please note:</mark> If you don't have an account or are not
              logged in, your scores will not be saved.
            </p>
          </div>
        </div>
        <div className="help__instructions">
          <div className="help__instructions-content">
            <div className="help__instructions-block">
              <div className="help__instuctions-image-block">
                <Image
                  src={genrescreen}
                  alt=""
                  width={608}
                  height={361}
                  className="help__instructions-image"
                />
              </div>
            </div>
            <div className="help__instructions-block">
              <WoodIcon className="wood-icon" width={100} height={100} />
              <h3 className="help__instructions-title">Choose a Genre</h3>
              <p className="help__instructions-text">
                To start, select a genre for the movie titles you'll be
                guessing. Do you prefer action, romance, horror, or another
                genre? Pick your favorite, and let's begin!
              </p>
            </div>
          </div>

          <div className="help__instructions-content">
            <div className="help__instructions-block">
              <WoodIcon className="wood-icon" width={100} height={100} />
              <h3 className="help__instructions-title">
                Choose a Difficulty Level
              </h3>
              <ul className="help__instructions-explain">
                <p className="help__instructions-subtitle">
                  Now that you've picked your genre, it's time to select your
                  challenge level. Hangman offers three difficulty options:
                </p>
                <li className="help__instructions-text">
                  <b>Easy:</b>&nbsp;No timer. <br />
                  Perfect for beginners. All movie titles are already chosen for
                  you.
                </li>
                <li className="help__instructions-text">
                  <b>Medium:</b>&nbsp;1 min timer. <br />A mix of pre-selected
                  and randomly generated movie titles.
                </li>
                <li className="help__instructions-text">
                  <b>Hard:</b>&nbsp;45 sec timer. <br />
                  All movie titles are randomly generated for the toughest
                  challenge.
                </li>
              </ul>
            </div>
            <div className="help__instructions-block">
              <Image
                src={modescreen}
                alt=""
                width={608}
                height={361}
                className="help__instructions-image"
              />
            </div>
          </div>

          <div className="help__instructions-content">
            <div className="help__instructions-block">
              <Image
                src={gamescreen}
                alt=""
                width={608}
                height={361}
                className="help__instructions-image"
              />
            </div>
            <div className="help__instructions-block">
              <WoodIcon className="wood-icon" width={100} height={100} />
              <h3 className="help__instructions-title"> How to Play</h3>
              <ul className="help__instructions-explain">
                <p className="help__instructions-subtitle">
                  Now that you're ready, let's learn how to play Hangman:
                </p>
                <li className="help__instructions-text">
                  👾 You will be presented with a number of blank spaces
                  representing the missing letters you need to find.
                </li>
                <li className="help__instructions-text">
                  👾 Use your keyboard to guess letters.
                </li>
                <li className="help__instructions-text">
                  👾 You have a total of 6 wrong guesses allowed. If you exceed
                  this limit without guessing the movie title, the game ends.
                </li>
                <div className="help__instructions-text">
                  👾 If you correctly guess the word, you'll move on to the next
                  movie title.
                </div>
              </ul>
            </div>
          </div>

          <iframe
            className="help__instruction-video"
            src="https://www.youtube.com/embed/2nbxzGWYYxI?si=6AVTpT3XImVpUikF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="help__instructions-block">
            <h2>
              Get ready for a fun journey through movie titles with Hangman
              Game.
            </h2>
            <Link href={"/"} className="help__play">
              Let's play!
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Help;
