"use client"; 
import UserAvatar from '../ProfileComponents/UserAvatar';
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./headerFooter.scss";

import {HomeIcon} from './imports'

const Header: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => prev);
    }

    const handleClickNav = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const menuItemText = event.currentTarget.textContent;
        switch (menuItemText) {
        case "Home": 
            router.push("/");
            break;
        case "Profile Settings":
            router.push("/profile");
            break;
        case "Genre Menu": 
            router.push("/genremenu");
            break; 
        default:
            break;
        }
        toggleMenu();
    }
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <a className="home-link" onClick={() => router.push("/")}><HomeIcon/></a>
            <a className="user-avatar-menu" onClick={() => setIsMenuOpen((prev) => !prev)}> <UserAvatar/> </a>
           {isMenuOpen && ( <div className="menu-container">
                <div className="menu-item-container">
                    <a className="menu-item" onClick={handleClickNav}>Profile Settings</a>
                    <span className="line"></span>
                    <a className="menu-item" onClick={handleClickNav}>Home</a>
                    <span className="line"></span>
                    <a className="menu-item" onClick={handleClickNav}>Genre Menu</a>
                </div>
            </div>)}
        </div>
    </nav>
  )
}

export default Header