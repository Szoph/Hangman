"use client"; 
import UserAvatar from './UserAvatar';
import { useState } from "react";
import { useRouter } from "next/navigation";
import '@/app/styles/HeaderFooter/headerFooter.css'


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
    <header className="header">
        <div className="header-container">
            <a className="home-link" onClick={() => router.push("/")}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 36 36"><path fill="currentColor" d="M33 19a1 1 0 0 1-.71-.29L18 4.41L3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19" class="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M18 7.79L6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z" className="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg></a>
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
    </header>
  )
}

export default Header