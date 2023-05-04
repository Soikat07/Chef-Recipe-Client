import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCards from './RecipeCards';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const singleChef = useLoaderData();
  const { id, chef_image, chef_name, description, experience, num_recipes, likes } =
    singleChef;
  
  useEffect(() => {
    fetch('https://chef-hunter-server-flame.vercel.app/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data));
    
  },[])
  
  return (
    <div className="min-h-[80vh]">
      <div className='my-10 w-[90vw] mx-auto'>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={chef_image}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {
          // recipes.filter(recipe => <RecipeCards recipe={recipe}/>)
        }
      </div>
    </div>
  );
};

export default Recipes;