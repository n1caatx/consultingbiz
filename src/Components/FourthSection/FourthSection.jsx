import React from 'react'
import styles from './FourthSection.module.css'

const FourthSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.texts}>
            <p className={styles.ourprofessional}>Our Professional members</p>
            <p className={styles.ourteam}>Our Team Members</p>
        </div>
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png" alt="" />
                <p className={styles.ethan}>Ethan Welch</p>
                <p className={styles.ux}>UX Designer</p>
            </div>
            <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team3.png" alt="" />
                <p className={styles.ethan}>Ethan Welch</p>
                <p className={styles.ux}>UX Designer</p>
            </div>
            <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team1.png" alt="" />
                <p className={styles.ethan}>Ethan Welch</p>
                <p className={styles.ux}>UX Designer</p>
            </div>
        </div>
    </div>
  )
}

export default FourthSection