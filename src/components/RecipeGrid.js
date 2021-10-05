import React from 'react';
import { Link } from 'react-router-dom';

function RecipeGrid({ recipes }) {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} className="recipe-card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} className="recipe-card-img" />
          <h2 className="recipe-card-title">{recipe.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default RecipeGrid;
