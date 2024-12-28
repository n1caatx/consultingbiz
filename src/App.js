import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Header from './Components/Header/Header';
import Wishlist from './Components/Wishlist/Wishlist';
import Basket from './Components/Basket/Basket';
import FirstSection from './Components/FirstSection/FirstSection'
import SecondSection from './Components/SecondSection/SecondSection';
import ThirdSection from './Components/ThirdSection/ThirdSection';
import FourthSection from './Components/FourthSection/FourthSection';
import FifthSection from './Components/FifthSection/FifthSection';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <Footer/>
      <Routes>  
        <Route path="/wishlist" element={<Wishlist />} /> 
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Router>
  );
};

export default App;
