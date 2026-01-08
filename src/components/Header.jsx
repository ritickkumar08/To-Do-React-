import React from 'react'
import logoForLight from '../assets/logoForLight.png'


function Header() {
    return (
        <div>
            <div className='flex items-center justify-around bg-red-500 shadow-md shadow-red-300 h-30 w-[80vw] rounded-lg'>
                <img className='w-2xs p-0' src={logoForLight} alt="logo" />
                <p className='text-3xl'>keep your to do list</p>
            </div>
        </div>
    )
}

export default Header
