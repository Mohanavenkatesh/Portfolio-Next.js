import React, { useEffect, useState } from 'react'

const ThemeContextfn = createContext();

export const ThemeContext = () => {

    const [theme, setTheme] = useState('light')

    useEffect(() => {

        const storingTheme = localStorage.getItem('theme');
        if (storingTheme) {
            setTheme(storingTheme)
            document.documentElement.classList.add(storingTheme)
        } else {
            document.documentElement.classList.add(storingTheme)
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
    }

    return (
        <div>

        </div>
    )
}
