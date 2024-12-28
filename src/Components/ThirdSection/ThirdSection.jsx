import React from 'react'
import styles from './ThirdSection.module.css'

const ThirdSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.thirdimage}>
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png" alt="" />
        </div>
        <div className={styles.thirdtexts}>
            <p className={styles.ourtop}>Our Top Services</p>
            <h1 className={styles.ourbest}>Our Best Services</h1>
            <p className={styles.firstmollit}>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>
            <p className={styles.secondmollit}>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>
            <button>MORE ABOUT US</button>
        </div>
    </div>
  )
}

export default ThirdSection