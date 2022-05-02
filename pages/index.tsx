import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import ThemeSelector from '../components/themeSelector/ThemeSelector'

import animoji from '../assets/animoji.png'

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
        <div className={styles.titleHr} />
        <div className={styles.title}>
          <span>My</span>
          <br />
          <span>portfolio</span>
        </div>
        <div className={styles.titleHr} />
      </div>

      <div className={styles.panelCont}>
        <div className={styles.panel}>
          <div className={styles.animoji}>
            {/* <Image
              // placeholder='blur'
              src={animoji}
              alt="animoji"
              width="100px"
              height="100px"
            /> */}
          </div>

          <span className={styles.big}>Hi, </span>
          <span className={styles.small}>
            my name is David. Do you want to see more about me and my work?
          </span>
        </div>

        <button className={styles.checkOutBtn}>
          <span>Check it out!</span>
        </button>
      </div>

      <div className={styles.wave}>
        {/* <Blobs /> */}
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="var(--blue2)" />
              <stop offset="90%" stopColor="var(--blue)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Home
