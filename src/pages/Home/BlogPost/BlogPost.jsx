import React from 'react';
import blog1 from '../../../assets/blog1.jpg'
import blog2 from '../../../assets/blog2.jpg'
import blog3 from '../../../assets/blog3.jpg'
import person1 from '../../../assets/person1.png'
import person2 from '../../../assets/person2.png'
import person3 from '../../../assets/person3.png'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const BlogPost = () => {
  return (
    <div className="grid grid-cols-3 mb-16 px-5">
      <div className="card w-96 bg-base-100 shadow-xl text-gray-600">
        <figure className="px-10 pt-10">
          <img src={blog1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center relative">
          <div className="absolute -top-12">
            <img className="w-16" src={person1} alt="" />
          </div>
          <h2 className="card-title">Kelvin Clain</h2>
          <p>
            If a dog chews shoes whose shoes does he choose?Lorem ipsum dolor
            sit amet.
          </p>
        </div>
        <div className="flex justify-around py-4 mt-0">
          <div className="inline-flex items-center space-x-1">
            <span>
              <FaCalendarAlt />
            </span>
            <p>3 May 2023</p>
          </div>
          <div className='flex justify-center items-center tracking-wide'>
          <p className="link-hover hover:text-blue-600">Read More</p>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl text-gray-600">
        <figure className="px-10 pt-10">
          <img src={blog2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center relative">
          <div className="absolute -top-12">
            <img className="w-16" src={person2} alt="" />
          </div>
          <h2 className="card-title">John Henry</h2>
          <p>
            If a dog chews shoes whose shoes does he choose?Lorem ipsum dolor
            sit amet.
          </p>
        </div>
        <div className="flex justify-around py-4 mt-0">
          <div className="inline-flex items-center space-x-1">
            <span>
              <FaCalendarAlt />
            </span>
            <p>3 May 2023</p>
          </div>
          <div className='flex justify-center items-center tracking-wide'>
          <p className="link-hover hover:text-blue-600">Read More</p>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl text-gray-600">
        <figure className="px-10 pt-10">
          <img src={blog3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center relative">
          <div className="absolute -top-12">
            <img className="w-16" src={person3} alt="" />
          </div>
          <h2 className="card-title">John Belius</h2>
          <p>
            If a dog chews shoes whose shoes does he choose?Lorem ipsum dolor
            sit amet.
          </p>
        </div>
        <div className="flex justify-around py-4 mt-0">
          <div className="inline-flex items-center space-x-1">
            <span>
              <FaCalendarAlt />
            </span>
            <p>3 May 2023</p>
          </div>
          <div className='flex justify-center items-center tracking-wide'>
          <p className="link-hover hover:text-blue-600">Read More</p>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;