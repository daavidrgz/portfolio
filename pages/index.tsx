import Head from 'next/head'
import styles from '../styles/home.module.scss'
import ThemeSelector from '../components/themeSelector/ThemeSelector'

const Home = () => {
  return (
    <div className={styles.extCont}>
      <Head>
        <title>Portfolio - Entry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.right}>
          <ThemeSelector />
        </div>
      </nav>

      <div className={styles.titleCont}>
        <div className={styles.title}>
          <div className={styles.titleWord}>
            <span>M</span>
            <span>Y</span>
          </div>{' '}
          <div className={styles.titleWord}>
            <span>P</span>
            <span>O</span>
            <span>R</span>
            <span>T</span>
            <span>F</span>
            <span>O</span>
            <span>L</span>
            <span>I</span>
            <span>O</span>
          </div>
        </div>
      </div>

      <div className={styles.panelCont}>
        <div className={styles.panel}>
          <div className={styles.panelTop}>
            <span className={styles.big}>Hi, </span>
            <span className={styles.small}>
              my name is David. Do you want to see more about me and my work?
            </span>
          </div>
          <div className={styles.panelBottom}></div>
        </div>
      </div>
    </div>
  )
}

export default Home
