import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
    </Head>
      <div className={styles.nav}>
        <h1 className={styles.ragamHeading}><a href="#">Ragam</a></h1>
        <h1 className={styles.ragamHeading}><a href="#">Login</a></h1>
    </div>
    <div className={styles.list}>
        <h2 className={styles.eventName}>Event Name</h2>
        <ul className={styles.navbarVertical}>
            <li className={styles.listItems}><a href="#">Info</a></li>
            <li className={styles.listItems}><a href="#">Rules</a></li>
            <li className={styles.listItems}><a href="#">Contact</a></li>
        </ul>
    </div>
    </>
  )
}
