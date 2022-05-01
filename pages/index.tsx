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
        <span className={styles.title}>My </span>
        <span className={styles.title}>portfolio</span>
      </div>

      <div className={styles.panelCont}>
        <div className={styles.panel}>
          <span className={styles.big}>Hi, </span>
          <span className={styles.small}>
            my name is David. Do you want to see more about me and my work?
          </span>
        </div>

        <button className={styles.checkOutBtn}>
          <span>Check it out!</span>
        </button>
      </div>
    </div>
  )
}

export default Home
