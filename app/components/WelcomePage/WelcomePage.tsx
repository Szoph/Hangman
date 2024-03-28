"use client"
import "./welcomepage.scss";
import Link from "next/link";
import Image from "next/image";

import {motion} from 'framer-motion'

import {WelcomeContainerVariants, iconVariants, titleVariants, buttonVariants} from './WelcomePageVariants'

const WelcomePage = () => {
  return (
    <main className="welcome-page">
      <div className="welcome-page__avatar">
        <motion.h2
        variants={titleVariants}
        initial="hidden"
        animate="visible">Hangman Game</motion.h2>
        <motion.div
        variants={iconVariants}
        initial="hidden"
        animate="visible">
        <Image
          className="welcome-page__monster"
          src="/gameImages/monster5.png"
          alt="Game Monster"
          width={300}
          height={300}
        />
        </motion.div>

      </div>
      <motion.div
      variants={WelcomeContainerVariants}
       initial="hidden"
       animate="visible"
      className="welcome-page__content">
        <h2 className="welcome-page__title">Welcome!</h2>
        <div className="welcome-page__navigation">
          <Link 

          href="/signin" className="welcome-page__link">
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
      </motion.div>
    </main>
  );
}

export default WelcomePage