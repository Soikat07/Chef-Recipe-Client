import React from 'react';
import Home from '../../pages/Home/Home';
import Header from '../../pages/Shared/Header/Header';
import Footer from '../../pages/Shared/Footer/Footer';

const MainLayOut = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;