import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { CiUser, CiShoppingCart, CiHeart } from "react-icons/ci";
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToWishlist = () => {
    navigate('/wishlist'); 
  };

  const goToBasket = () => {
    navigate('/basket');  
  };

  return (
    <div className={styles.container}>
      <div className={styles.topheader}>
        <div className={styles.firsttop}>
          <p id={styles.clock}><FaRegClock color='#e94d65' /> Mon - SAT: 6.00 am - 10.00 pm</p>
          <p id={styles.sun}> Sun: Closed</p>
        </div>
        <div className={styles.secondtop}>
          <ul>
            <li><a href="#"><FaFacebookF /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaLinkedinIn /></a></li>
            <li><a href="#"><IoLogoGoogleplus  /></a></li>
            <li><a href="#"><CiUser /></a></li>
            <li><a onClick={goToBasket}><CiShoppingCart /></a></li>  
            <li><a onClick={goToWishlist}><CiHeart /></a></li>  
          </ul>
        </div>
      </div>
      <div className={styles.headerbottom}>
        <div className={styles.logo}>
          <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png" alt="Logo" />
        </div>
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
