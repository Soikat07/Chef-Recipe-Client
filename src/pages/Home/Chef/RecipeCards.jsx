import React from 'react';
import { FaHeart,FaRegStar,FaStar } from 'react-icons/fa';

const RecipeCards = ({ recipe }) => {
  const { recipe_name, ingredients, method, ratings } = recipe;
  
  return (
    <>
      <div className="card h-[78vh] w-96 bg-slate-600 text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <div>
            <p>Ingredients:</p>
            {ingredients.map(ingredient => (
              <li>{ingredient}</li>
            ))}
          </div>
          <div>
            <p>Cooking Method:</p>
            {method.slice(0, 3).map(methods => (
              <p>{methods}</p>
            ))}
          </div>
          <div className="card-actions justify-end mt-auto">
            <p>Ratings:{ratings.average}</p>
            <button className="bg-lime-600 px-4 py-2 rounded-3xl flex items-center gap-x-1">
              Favorite
              <span>
                <FaHeart />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCards;