import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
        <p>Copyright ©2024 All rights reserved | This template is made with <span className={styles.heart}>♡</span> by <a href="https://preview.colorlib.com/theme/consultingbiz/#">Colorlib</a></p>
        </div>
    </div>
  )
}

export default Footer