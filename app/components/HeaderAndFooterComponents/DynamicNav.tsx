'use client'

import React from 'react';
import {useRouter, usePathname} from 'next/navigation';

import {AppDispatch, useAppSelector} from "@/redux/user/store";
import UnAuthNavBar from './unAuthNavBar';
import AuthNavBar from './AuthNavBar';

const DynamicNav: React.FC = () => {


    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)

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