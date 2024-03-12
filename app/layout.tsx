import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/styles.css";
import {ReduxProvider } from "../redux/user/provider";

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
        <ReduxProvider>{children}</ReduxProvider>
        </body>
    </html>
  );
}
