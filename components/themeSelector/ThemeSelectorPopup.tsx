import styles from '../../styles/themeSelector.module.scss'
import { THEMES } from '../../constants/themes'
import { useEffect, useRef, useState } from 'react'
import { FaHandPointLeft, FaArrowDown } from 'react-icons/fa'
import Scrollbar from 'react-scrollbars-custom'

interface Props {
  show: boolean
}

export default function ThemeSelectorPopup({ show }: Props) {
  const [currentTheme, setCurrentTheme] = useState('')

  useEffect(() => {
    let theme = window.localStorage.getItem('colorTheme') ?? ''
    setCurrentTheme(theme)
  }, [])

  const changeTheme = (theme: string) => {
    window.localStorage.setItem('colorTheme', theme)
    document.documentElement.className = theme
    setCurrentTheme(theme)
  }

  const ThemeItem = (name: string) => {
    return (
      <li
        key={name}
        onClick={() => changeTheme(name)}
        className={`${styles.popupElement} ${
          currentTheme === name && styles.elementActive
        }`}
      >
        <span>{name.substring(0, 1).toUpperCase() + name.substring(1)}</span>
        {/* <FaHandPointLeft className={styles.pointer}/> */}
        <div
          className={`${styles.background} ${
            currentTheme === name && styles.elementActive
          }`}
        ></div>
      </li>
    )
  }

  return (
    <div className={`${styles.popupCont} ${show && styles.showPopup}`}>
      <Scrollbar className='scrollbar'>
        <ul>{THEMES.map((theme) => ThemeItem(theme))}</ul>
      </Scrollbar>
    </div>
  )
}
