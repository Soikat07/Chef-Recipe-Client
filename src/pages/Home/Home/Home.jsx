import React from 'react';
import Banner from '../Banner/Banner';
import Menus from '../Menus/Menus';
import BlogPost from '../BlogPost/BlogPost';
const Home = () => {
  return (
    <div>
      {/* Banner section */}
      <Banner></Banner>
      {/* Chef section */}
      
      {/*Menus section */}
      <Menus></Menus>
      {/* BLog Post section */}
      <BlogPost></BlogPost>
    </div>
  );
};

export default Home;
