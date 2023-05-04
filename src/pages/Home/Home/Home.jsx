import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Menus from '../Menus/Menus';
import BlogPost from '../BlogPost/BlogPost';
import Chef from '../Chef/Chef';

const Home = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch('https://chef-hunter-server-flame.vercel.app/chef')
      .then(res => res.json())
      .then(data => setChef(data))
      .catch(error => console.error(error));
    
  },[])

  return (
    <div>
      {/* Banner section */}
      <Banner></Banner>
      {/* Chef section */}
      <div className='text-center my-10 lg:my-16 lg:w-1/2 px-5 mx-auto'>
        <h2 className=' text-3xl lg:text-4xl text-red-600 mb-4 tracking-widest'>Our Chefs</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veniam non, rem dolorum vero itaque ex culpa aut blanditiis Lorem ipsum dolor sit. vel!</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:w-[90vw] lg:mx-auto ">
        {chef.map(chefs => (
          <Chef chefs={chefs} key={chefs.id} />
        ))}
      </div>
      {/*Menus section */}
      <div className="text-center my-10">
        <h3 className="text-red-600 text-3xl">Our Menus</h3>
        <h4 className="text-black text-3xl tracking-wider font-bold">
          Menu Of The Day
        </h4>
      </div>
      <Menus></Menus>
      {/* BLog Post section */}
      <div className="text-center mt-20 mb-5">
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
