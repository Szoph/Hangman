"use client";
import "./styles/WelcomeStyles/welcome.scss";
import Link from "next/link";
import "@/app/styles/ProfileStyles/profile.css";


export default function Home() {
  return (
    <main className="welcome-page">
      <div className="welcome-page__avatar">
        <h2>Hangman Game</h2>
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
          <Link href="/genremenu" className="welcome-page__link">
            Play as a guest
          </Link>
        </div>
      </div>
    </main>
  );
}
