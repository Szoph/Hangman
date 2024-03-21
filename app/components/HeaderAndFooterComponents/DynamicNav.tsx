'use client'

import React from 'react';
import {useRouter, usePathname} from 'next/navigation';

import {AppDispatch, useAppSelector} from "@/redux/user/store";
import UnAuthNavBar from './UnAuthNavBar/unAuthNavBar';
import AuthNavBar from './AuthNavbar/AuthNavBar';
import './navbar.module.scss';

const DynamicNav: React.FC = () => {


    const isAuth = useAppSelector((state) => state.authentication.value.isAuth)

    // const router = useRouter()

    const pathname = usePathname()


    const noNavBarPaths = ['/signin', '/signup'] 
    
    return (
        
        !noNavBarPaths.includes(pathname) ? (
            isAuth ? <AuthNavBar/> : <UnAuthNavBar/>
        ) : null
    );
}

export default DynamicNav