"use client"; 
import UserAvatar from '../../ProfileComponents/UserAvatar';
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./authnavbar.module.scss";

import {HomeIcon} from '../imports'

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
    <nav className="navbar-auth">
        <div className="navbar-auth__container">
            <a className="navbar-auth__home-link" onClick={() => router.push("/")}><HomeIcon/></a>
            <a className="navbar-auth__user-avatar-menu" onClick={() => setIsMenuOpen((prev) => !prev)}> <UserAvatar/> </a>
           {isMenuOpen && ( <div className="navbar-auth__menu-container">
                <div className="navbar-auth__menu-item-container">
                    <a className="navbar-auth__menu-item" onClick={handleClickNav}>Profile Settings</a>
                    <span className="navbar-auth__line"></span>
                    <a className="navbar-auth__menu-item" onClick={handleClickNav}>Home</a>
                    <span className="navbar-auth__line"></span>
                    <a className="navbar-auth__menu-item" onClick={handleClickNav}>Genre Menu</a>
                </div>
            </div>)}
        </div>
    </nav>
  )
}

export default Header