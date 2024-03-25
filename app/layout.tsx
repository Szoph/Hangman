import type { Metadata } from "next";
import { Inter, Gluten } from "next/font/google";
import {UserReduxProvider} from "../redux/provider";
import './globals.scss'

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
          <DynamicNav/>
          {children}
        </UserReduxProvider>
        </body>
    </html>
  );
}
