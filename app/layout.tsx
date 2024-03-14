import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ReduxProvider } from "../redux/user/provider";
import "@/app/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hangman",
  description: "A hangman game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer/>
          </ReduxProvider>
        </body>
    </html>
  );
}
