import React from 'react';

function Recipe({ title, ingredients, instructions }) {
  return (
    <section className="recipe">
      <h2>{title}</h2>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {instructions.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

export default Recipe;
