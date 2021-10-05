import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Recipe from './Recipe';

function RecipePage({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe not found</h2>
        <Link to="/">Back to recipes</Link>
      </div>
    );
  }

  return (
    <div className="recipe-page">
      <Link to="/" className="back-link">← Back to recipes</Link>
      <img src={recipe.image} alt={recipe.title} className="recipe-page-img" />
      <Recipe {...recipe} />
    </div>
  );
}

export default RecipePage;
