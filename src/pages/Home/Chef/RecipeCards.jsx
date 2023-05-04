import React, { useState } from 'react';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { toast } from 'react-toastify';

const RecipeCards = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const { recipe_name, ingredients, method, ratings } = recipe;
  
  const handleToast = () => {
    toast('Recipe Added To Favorite')
    setFavorite(true);
  }
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
            <Rating
              className='text-yellow-400'
              placeholderRating={ratings.average}
              readonly
              emptySymbol={<FaRegStar/>}
              placeholderSymbol={<FaStar/>}
              fullSymbol={<FaStar/>}
            />
            <p>{ratings.average}</p>
            <button
              disabled={favorite}
              onClick={handleToast}
              className="bg-lime-600 hover:bg-lime-400 px-4 py-2 rounded-3xl flex items-center gap-x-1"
            >
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