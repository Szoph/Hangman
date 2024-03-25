"use client"
import Image from "next/image";
import handmanscreen from "../../../public/images/handmanscreen.png"
import "./help.scss";
import Link from "next/link";

import { useState } from "react";



const Help = () => {
  return (
    <main className="help">
      <div className="help__welcome">
        <div className="help__welcome-content">
          <h1 className="help__welcome-title">Welcome to Hangman Game! </h1>
          <svg fill="#000000" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
          <g>
            <g>
              <path d="M507.11,440.328l-61.893-61.893V100.174V16.696c0-9.22-7.475-16.696-16.696-16.696h-83.478H16.696
                C7.475,0,0,7.475,0,16.696v66.783c0,9.22,7.475,16.696,16.696,16.696h116.87v58.375l-52.762,78.955
                c-1.804,2.7-3.456,5.512-4.941,8.422c-5.806,11.373-9.08,24.254-9.08,37.9c0,46.104,37.374,83.478,83.478,83.478
                s83.478-37.374,83.478-83.478c0-13.646-3.273-26.527-9.079-37.901c-1.486-2.911-3.138-5.721-4.942-8.422l-52.762-78.954v-58.375
                h54.304l123.783,123.783v154.478l-61.893,61.893c-3.131,3.131-4.89,7.377-4.89,11.805v43.172c0,9.22,7.475,16.696,16.696,16.696
                h200.348c9.22,0,16.696-7.475,16.696-16.696v-43.172C512,447.705,510.241,443.459,507.11,440.328z M191.957,256.06
                c1.076,1.614,2.07,3.299,2.956,5.043c3.608,7.06,5.435,14.701,5.435,22.723c0,27.619-22.468,50.087-50.087,50.087
                c-27.619,0-50.087-22.468-50.087-50.087c0-8.022,1.826-15.663,5.429-22.712c0.892-1.755,1.885-3.44,2.967-5.06l41.69-62.392
                L191.957,256.06z M33.391,66.783V33.391h378.435v345.043h-33.391V83.478c0-9.22-7.475-16.696-16.696-16.696H33.391z
                M268.478,100.174h76.565v76.565L268.478,100.174z M478.609,478.609H311.652v-19.56l47.223-47.223h72.51l47.223,47.223V478.609z"
                />
            </g>
          </g>
          </svg>
        </div>
        <h3>Hangman is an old school favorite, a word game where the goal is simply to find the missing word or words.</h3>
        <p>Choose play as a guest to jump right into a game or create an account to have your scores stored.</p>
        <p><mark>Please note:</mark> If you don't have an account or are not logged in, your scores will not be saved.</p>
      </div>
      <div className="help__instructions">

        <div className="help__instructions-content">
          <div className="help__instructions-block">
            <Image src={handmanscreen} alt="" width={608} height={361} className="help__instructions-image"/>
          </div>
          <div className="help__instructions-block">
            <h3 className="help__instructions-title">Choose a Genre</h3>
            <p className="help__instructions-text">To start, select a genre for the movie titles you'll be guessing. Do you prefer action, romance, horror, or another genre? Pick your favorite, and let's begin!</p>
          </div>
        </div>

        <div className="help__instructions-content">
          <div className="help__instructions-block">
            <h3 className="help__instructions-title">Choose a Difficulty Level</h3>
            <ul className="help__instructions-explain">Now that you've picked your genre, it's time to select your challenge level. Hangman offers three difficulty options:
              <li className="help__instructions-text">
                <b>Easy:</b>&nbsp;Perfect for beginners. All movie titles are already chosen for you.
              </li>
              <li className="help__instructions-text"><b>Medium:</b>&nbsp;A mix of pre-selected and randomly generated movie titles.</li>
              <li className="help__instructions-text"><b>Hard:</b>&nbsp;All movie titles are randomly generated for the toughest challenge.</li>
            </ul>
          </div>
          <div className="help__instructions-block">
            <Image src={handmanscreen} alt="" width={608} height={361} className="help__instructions-image"/>
          </div>
        </div>

        <div className="help__instructions-content">
          <div className="help__instructions-block">
            <Image src={handmanscreen} alt="" width={608} height={361} className="help__instructions-image"/>
          </div>
          <div className="help__instructions-block">
            <h3 className="help__instructions-title"> How to Play</h3>
            <div className="help__instructions-explain">Now that you're ready, let's learn how to play Hangman:
            <div className="help__instructions-item">
              <svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="help__instructions-icon">
                  <title>noose</title>
                  <path d="M18.884 13.184c0.484-0.037 0.866-0.44 0.866-0.934v-5.625c0-0.518-0.42-0.937-0.937-0.937h-0.937v-3.751c0-0.518-0.42-0.937-0.937-0.937h-1.875c-0.518 0-0.937 0.42-0.937 0.937v3.751h-0.938c-0.518 0-0.937 0.42-0.937 0.937v5.625c0 0.494 0.382 0.897 0.866 0.934-3.217 5.633-6.491 7.233-6.491 9.379 0 5.625 4.552 8.438 9.375 8.438s9.375-2.813 9.375-8.438c0-2.145-3.273-3.745-6.491-9.379zM16 28.188c-2.815 0-5.625-2.813-5.625-5.625 0-0.938 4.688-5.625 5.625-8.438 0.937 2.813 5.625 7.5 5.625 8.438 0 2.813-2.815 5.625-5.625 5.625z"></path>
              </svg>
              <p className="help__instructions-text">You will be presented with a number of blank spaces representing the missing letters you need to find.
              </p>
            </div>

              <div className="help__instructions-item">
                <svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="help__instructions-icon">
                  <title>noose</title>
                  <path d="M18.884 13.184c0.484-0.037 0.866-0.44 0.866-0.934v-5.625c0-0.518-0.42-0.937-0.937-0.937h-0.937v-3.751c0-0.518-0.42-0.937-0.937-0.937h-1.875c-0.518 0-0.937 0.42-0.937 0.937v3.751h-0.938c-0.518 0-0.937 0.42-0.937 0.937v5.625c0 0.494 0.382 0.897 0.866 0.934-3.217 5.633-6.491 7.233-6.491 9.379 0 5.625 4.552 8.438 9.375 8.438s9.375-2.813 9.375-8.438c0-2.145-3.273-3.745-6.491-9.379zM16 28.188c-2.815 0-5.625-2.813-5.625-5.625 0-0.938 4.688-5.625 5.625-8.438 0.937 2.813 5.625 7.5 5.625 8.438 0 2.813-2.815 5.625-5.625 5.625z"></path>
                  </svg>
                <p className="help__instructions-text">Use your keyboard to guess letters.</p>
              </div>

              <div className="help__instructions-item">
                <svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="help__instructions-icon">
                <title>noose</title>
                <path d="M18.884 13.184c0.484-0.037 0.866-0.44 0.866-0.934v-5.625c0-0.518-0.42-0.937-0.937-0.937h-0.937v-3.751c0-0.518-0.42-0.937-0.937-0.937h-1.875c-0.518 0-0.937 0.42-0.937 0.937v3.751h-0.938c-0.518 0-0.937 0.42-0.937 0.937v5.625c0 0.494 0.382 0.897 0.866 0.934-3.217 5.633-6.491 7.233-6.491 9.379 0 5.625 4.552 8.438 9.375 8.438s9.375-2.813 9.375-8.438c0-2.145-3.273-3.745-6.491-9.379zM16 28.188c-2.815 0-5.625-2.813-5.625-5.625 0-0.938 4.688-5.625 5.625-8.438 0.937 2.813 5.625 7.5 5.625 8.438 0 2.813-2.815 5.625-5.625 5.625z"></path>
                </svg>
                <p className="help__instructions-text">You have a total of 6 wrong guesses allowed. If you exceed this limit without guessing the movie title, the game ends.</p>
              </div>

              <div className="help__instructions-item">
                <svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="help__instructions-icon">
                  <title>noose</title>
                  <path d="M18.884 13.184c0.484-0.037 0.866-0.44 0.866-0.934v-5.625c0-0.518-0.42-0.937-0.937-0.937h-0.937v-3.751c0-0.518-0.42-0.937-0.937-0.937h-1.875c-0.518 0-0.937 0.42-0.937 0.937v3.751h-0.938c-0.518 0-0.937 0.42-0.937 0.937v5.625c0 0.494 0.382 0.897 0.866 0.934-3.217 5.633-6.491 7.233-6.491 9.379 0 5.625 4.552 8.438 9.375 8.438s9.375-2.813 9.375-8.438c0-2.145-3.273-3.745-6.491-9.379zM16 28.188c-2.815 0-5.625-2.813-5.625-5.625 0-0.938 4.688-5.625 5.625-8.438 0.937 2.813 5.625 7.5 5.625 8.438 0 2.813-2.815 5.625-5.625 5.625z"></path>
                </svg>
                <p className="help__instructions-text">If you correctly guess the word, you'll move on to the next movie title.</p>
              </div>
            </div>
            {/* <br />
            <p>Get ready for a fun journey through movie titles with Hangman Game. Let's play!</p> */}
          </div>
        </div>

        <iframe width="800" height="450" src="https://www.youtube.com/embed/GMzKnxzBvNo?si=iRSKPxys7JjokUq-&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="help__instructions-video"></iframe>
        
         <div className="help__instructions-block">
          <h2>Get ready for a fun journey through movie titles with Hangman Game.</h2>
          <Link href={"/"} className="help__play">Let's play!</Link>
        </div>
     </div>
    </main>
  )
}

export default Help