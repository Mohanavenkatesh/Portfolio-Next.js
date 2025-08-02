'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex gap-5 justify-center items-center p-6  ' >
                <Link href='/'>Home</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </div>

        </>
    )
}

export default Navbar