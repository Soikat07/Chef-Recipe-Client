import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCards from './RecipeCards';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const singleChef = useLoaderData();
  const { id, chef_image, chef_name, description, experience, num_recipes, likes } =
    singleChef;
  
  useEffect(() => {
    fetch(`https://chef-hunter-server-soikat07.vercel.app/recipes/${id}`)
      .then(res => res.json())
      .then(data => setRecipes(data));
    
  },[])
  
  return (
    <div className="min-h-[80vh]">
      <div className="my-10 w-[90vw] mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <LazyLoad threshold={0.95} onContentVisible={() =>{console.log('loaded!')}}>
              <img src={chef_image} alt="Movie" />
            </LazyLoad>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chef Name: {chef_name}</h2>
            <p className="lg:w-96 text-gray-600">
              <span className="font-semibold">Chef Bio</span>: {description}
            </p>
            <div>
              <p>Year Of Experience: {experience} Years</p>
              <p className="my-1">Total Recipes: {num_recipes}</p>
              <div className="flex items-center gap-x-1">
                <span className="text-red-600">
                  <FaHeart />
                </span>
                <p>{likes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-[86vw] mx-auto gap-y-6 lg:gap-x-10 mb-10">
        {recipes.map((recipe, index) => (
          <RecipeCards recipe={recipe} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;