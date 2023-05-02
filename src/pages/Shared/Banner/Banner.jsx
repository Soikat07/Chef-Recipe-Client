import React from 'react';
import img1 from '../../../assets/carousel1.jpg';
import img2 from '../../../assets/carousel2.jpg';
import img3 from '../../../assets/carousel3.jpg';

const Banner = () => {
  return (
    <>
       <div className="carousel w-full h-[90vh]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn border-none text-2xl bg-red-600">
                ❮
              </a>
              <a href="#slide2" className="btn border-none text-2xl bg-red-600">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn border-none text-2xl bg-red-600">
                ❮
              </a>
              <a href="#slide3" className="btn border-none text-2xl bg-red-600">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn border-none text-2xl bg-red-600">
                ❮
              </a>
              <a href="#slide4" className="btn border-none text-2xl bg-red-600">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* text div */}
        <div className="absolute right-1/4 top-1/2 text-white">
          <div>
            <h2 className="text-center text-6xl tracking-wider">
              Spicy & Tasty <br />
              Italian Delicious Food
            </h2>
            <div className="space-x-4 text-center mt-4">
              <button className="bg-red-600 border-none px-6 py-4 tracking-wider">
                ORDER NOW
              </button>
              <button className="border-2 bg-slate-900 border-red-600 px-6 py-4 tracking-wider">
                VIEW MENU
              </button>
            </div>
          </div>
        </div>
      </>
  );
};

export default Banner;