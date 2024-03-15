"use client"; 
import UserAvatar from '../ProfileComponents/UserAvatar';
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./headerFooter.scss";
import Link from 'next/link'


const UnAuthNavBar: React.FC = () => {


  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link href="/">Home</Link>
            <Link href="/signin">Sign In</Link>
            <Link href="/signin">Sign Up</Link>
      

        </div>
    </nav>
  )
}

export default UnAuthNavBar;