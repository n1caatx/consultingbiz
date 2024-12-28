import React from 'react'
import styles from './FirstSection.module.css'
import image from '../../img/h1_hero.jpg'

const FirstSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <img src={image} alt="" />
        </div>
        <div className={styles.textandbutton}>
            <p className={styles.committed}>Committed to success</p>
            <p className={styles.title}>We help to grow your business</p>
            <p className={styles.mollit}>Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur.</p>
            <button>OUR SERVICES</button>
        </div>
    </div>
  )
}

export default FirstSection