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
      <div className="text-center my-10">
        <h3 className="text-red-600 text-3xl">Our Menus</h3>
        <h4 className="text-black text-3xl tracking-wider font-bold">
          Menu Of The Day
        </h4>
      </div>
      <Menus></Menus>
      {/* BLog Post section */}
      <div className='text-center'>
        <h3 className="text-red-600 text-3xl">Blog Post</h3>
        <h4 className="text-black text-3xl tracking-wider font-bold">
          See Our Latest News
        </h4>
      </div>
      <BlogPost></BlogPost>
    </div>
  );
};

export default Home;
