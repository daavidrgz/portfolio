import styles from '../../styles/themeSelector.module.scss'
import { MdOutlinePalette } from 'react-icons/md'
import ThemeSelectorPopup from './ThemeSelectorPopup'
import { useState } from 'react'

export default function ThemeSelector() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className={styles.extCont}>
      <button className={styles.themeBtn} onClick={() => setShowPopup((v) => !v)}>
        <MdOutlinePalette />
        <span>Theme</span>
      </button>

      <ThemeSelectorPopup show={showPopup} />
    </div>
  )
}
