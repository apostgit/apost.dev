import Head from 'next/head'
import SideBar from './SideBar/SideBar'
import styles from './Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />
        {/* <link rel='icon' type='image/png' href='/logo-white.jpg' /> */}
        {/* <link rel="apple-touch-icon" href="/logo-white.jpg" /> */}
        <title>Panagiotis Apostolidis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <div className={styles.main}>
        <SideBar />

        <div className={styles.right_container}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
