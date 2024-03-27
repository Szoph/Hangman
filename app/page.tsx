"use client";
import "./styles/WelcomeStyles/welcome.scss";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="welcome-page">
      <div className="welcome-page__avatar">
        <h2>Hangman Game</h2>
        <Image
          className="welcome-page__monster"
          src="/gameImages/monster5.png"
          alt="Game Monster"
          width={300}
          height={300}
        />
      </div>
      <div className="welcome-page__content">
        <h2 className="welcome-page__title">Welcome!</h2>
        <div className="welcome-page__navigation">
          <Link href="/signin" className="welcome-page__link">
            Sign in
          </Link>
          <Link href="/signup" className="welcome-page__link">
            Sign up
          </Link>
          <Link href="/help" className="welcome-page__link">
            How to play?
          </Link>
          <Link href="/genremenu" className="welcome-page__link">
            Play as a guest
          </Link>
        </div>
      </div>
    </main>
  );
}
