import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <Link href='/'>Home</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
        </>
    )
}

export default Navbar