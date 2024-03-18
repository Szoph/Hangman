"use client"; 
import UserAvatar from '../../ProfileComponents/UserAvatar';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from './unauthnavbar.module.scss'
import Link from 'next/link'





import {HomeIcon} from '../imports'

const UnAuthNavBar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    const handleMenuState = () => {
      const screenSize = window.innerWidth
      console.log(screenSize)
      if (screenSize > 768) {
        setIsActive(false)
      }
    }
    window.addEventListener('resize', handleMenuState)

    handleMenuState()

    return () => window.removeEventListener('resize', handleMenuState)
  }, [])

  



  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
      <a className={styles.logo} onClick={() => router.push("/")}><HomeIcon/></a>
      </div>

      <div onClick={() => {setIsActive(!isActive)}} className={styles.burgerMenu}>
              <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </div>
        <div className={styles.navItems}>

          </div>
          <ul className={`${styles.navLinks} ${isActive ? styles.mobileLinks : ""}`}>
            <Link href="/">Home</Link>
            <Link href="/signin">Sign In</Link>
            <Link href="/signin">Sign Up</Link>
            </ul>


    </nav>
  )
}

export default UnAuthNavBar;