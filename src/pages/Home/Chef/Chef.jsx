import React from 'react';
import {FaThumbsUp} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Chef = ({chefs}) => {
  
  const { id, chef_image, chef_name, experience, num_recipes, likes } = chefs;
  
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <LazyLoad
          threshold={0.95}
          onContentVisible={() => {
            console.log('loaded!');
          }}
        >
          <img src={chef_image} alt="" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
        <div>
          <p>Total Recipes : {num_recipes}</p>
          <p>Years Of Experience: {experience} Years</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-1">
            <span className="text-blue-600">
              <FaThumbsUp />
            </span>
            <p>{likes}</p>
          </div>
          <button className="bg-red-600 hover:bg-red-700 px-4 text-white py-3 tracking-wider rounded-md">
            <Link to={`/chef/${id}`}>View Recipes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chef;