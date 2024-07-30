import React from 'react'
import logo from '../assets/kakao_logo.png'

const AuthLayout = ({children}) => {
    return (
        <>
            <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
                <img 
                    src={logo}
                    alt='로고입니다.'
                    width={180}
                    height={60}
                />
            </header>
            { children }
        </>
    )
}

export default AuthLayout