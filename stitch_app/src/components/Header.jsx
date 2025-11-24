import { useState, useEffect } from 'react'

export default function Header() {
    const [isDark, setIsDark] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (theme === 'dark' || (!theme && prefersDark)) {
            setIsDark(true)
            document.documentElement.classList.add('dark')
        } else {
            setIsDark(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setIsDark(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setIsDark(true)
        }
    }

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/80 dark:border-gray-800/80 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-4 sm:px-8 md:px-10 py-3">
            <a aria-label="Intelligent Solutions Home" className="flex items-center gap-4 text-gray-900 dark:text-white" href="#">
                <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Intelligent Solutions</h2>
            </a>
            <nav aria-label="Main navigation" className="hidden lg:flex flex-1 justify-end gap-8 items-center">
                <div className="flex items-center gap-9">
                    <a className="text-sm font-medium leading-normal text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors" href="#services">Services</a>
                    <a className="text-sm font-medium leading-normal text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors" href="#about">About Us</a>
                    <a className="text-sm font-medium leading-normal text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors" href="#resources">Resources</a>
                    <a className="text-sm font-medium leading-normal text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors" href="#contact">Contact</a>
                </div>
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                    className="flex items-center justify-center size-10 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                    <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
                </button>
                <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark" href="#contact">
                    <span className="truncate">Request a Demo</span>
                </a>
            </nav>
            <div className="flex items-center gap-2 lg:hidden">
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                    className="flex items-center justify-center size-10 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
                </button>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Open menu"
                    className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    )
}
