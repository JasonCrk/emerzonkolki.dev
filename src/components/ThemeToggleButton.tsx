import { type FC, useState, useEffect } from 'react'

import { IoSunny, IoMoonOutline } from 'react-icons/io5'

const ThemeToggleButton: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [theme, setTheme] = useState<string | undefined | null>(() => {
    if (import.meta.env.SSR) {
      return undefined
    }

    if (typeof localStorage !== undefined && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <button
      className={`p-[10px] transition-colors duration-200 rounded text-xl text-white ${theme === 'light' ? 'bg-blue-600 hover:bg-blue-400' : 'bg-purple-500 hover:bg-purple-200'}`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <IoMoonOutline /> : <IoSunny />}
    </button>
  ) : (
    <div />
  )
}

export default ThemeToggleButton
