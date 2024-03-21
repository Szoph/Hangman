import type { Metadata } from "next";
import { Inter, Gluten } from "next/font/google";
import {UserReduxProvider} from "../redux/user/provider";
import './globals.scss'

import {HangmanReduxProvider} from '../redux/game/provider';

import DynamicNav from "./components/HeaderAndFooterComponents/DynamicNav";
// import Footer from "./components/HeaderAndFooterComponents/Footer";


const inter = Inter({ subsets: ["latin"] });

const gluten = Gluten({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Hangman",
  description: "A hangman game",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={gluten.className}>
        <UserReduxProvider>
        <HangmanReduxProvider>
          <DynamicNav/>
          {children}
         </HangmanReduxProvider>
        </UserReduxProvider>
        </body>
    </html>
  );
}
