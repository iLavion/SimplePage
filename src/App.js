import './App.css';

function App() {
  return (
    <div className="App">
      <header className="recipes-header">
        <h1>Simple Recipes</h1>
        <p>Delicious and easy-to-make dishes (metric units)</p>
      </header>
      <main className="recipes-main">
        <section className="recipe">
          <h2>Spaghetti Aglio e Olio</h2>
          <h3>Ingredients</h3>
          <ul>
            <li>200 g spaghetti</li>
            <li>2 cloves garlic, sliced</li>
            <li>60 ml olive oil</li>
            <li>1 g chili flakes</li>
            <li>Fresh parsley, chopped</li>
            <li>Salt, to taste</li>
          </ul>
          <h3>Instructions</h3>
          <ol>
            <li>Cook the spaghetti in a large pot of salted boiling water until al dente. Drain.</li>
            <li>In a pan, gently sauté the garlic in olive oil until fragrant. Add chili flakes.</li>
            <li>Add the drained spaghetti and toss with the oil and parsley. Serve immediately.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Caprese Salad</h2>
          <h3>Ingredients</h3>
          <ul>
            <li>2 tomatoes, sliced</li>
            <li>125 g fresh mozzarella, sliced</li>
            <li>Fresh basil leaves</li>
            <li>15 ml olive oil</li>
            <li>Salt and pepper, to taste</li>
          </ul>
          <h3>Instructions</h3>
          <ol>
            <li>Arrange tomato and mozzarella slices on a plate, alternating them.</li>
            <li>Place basil leaves between the slices.</li>
            <li>Drizzle with olive oil and season with salt and pepper. Serve fresh.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Banana Pancakes</h2>
          <h3>Ingredients</h3>
          <ul>
            <li>1 ripe banana</li>
            <li>2 eggs</li>
            <li>2 g baking powder</li>
            <li>Butter, for frying</li>
          </ul>
          <h3>Instructions</h3>
          <ol>
            <li>Mash the banana in a bowl. Add eggs and baking powder, and mix until smooth.</li>
            <li>Heat a little butter in a frying pan over medium heat. Pour in small amounts of batter.</li>
            <li>Cook until golden on both sides. Serve warm.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Swedish Meatballs (Köttbullar)</h2>
          <h3>Ingredients</h3>
          <ul>
            <li>500 g ground beef</li>
            <li>250 g ground pork</li>
            <li>1 small onion, finely chopped</li>
            <li>100 ml milk</li>
            <li>50 g breadcrumbs</li>
            <li>1 egg</li>
            <li>Salt and pepper, to taste</li>
            <li>Butter, for frying</li>
          </ul>
          <h3>Instructions</h3>
          <ol>
            <li>Soak the breadcrumbs in milk for 5 minutes.</li>
            <li>Combine all ingredients in a bowl and mix well. Shape into small balls.</li>
            <li>Fry the meatballs in butter over medium heat until browned and cooked through.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Gravlax (Cured Salmon)</h2>
          <h3>Ingredients</h3>
          <ul>
            <li>500 g salmon fillet, skin on</li>
            <li>30 g salt</li>
            <li>30 g sugar</li>
            <li>1 tsp crushed white pepper</li>
            <li>Fresh dill</li>
          </ul>
          <h3>Instructions</h3>
          <ol>
            <li>Mix salt, sugar, and pepper. Rub the mixture onto the salmon.</li>
            <li>Cover the salmon with plenty of dill, then wrap tightly in plastic wrap.</li>
            <li>Refrigerate for 48 hours, turning once halfway. Slice thinly to serve.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Swedish Cinnamon Buns (Kanelbullar)</h2>
          <h3>Ingredients</h3>
          <ul>
            <li>500 g flour</li>
            <li>75 g sugar</li>
            <li>7 g dry yeast (1 packet)</li>
            <li>250 ml milk</li>
            <li>75 g butter, melted</li>
            <li>1 egg</li>
            <li>1/2 tsp salt</li>
            <li>2 tsp ground cinnamon</li>
            <li>50 g soft butter (for filling)</li>
            <li>50 g sugar (for filling)</li>
          </ul>
          <h3>Instructions</h3>
          <ol>
            <li>Mix flour, sugar, yeast, salt, milk, melted butter, and egg. Knead into a smooth dough. Let rise for 1 hour.</li>
            <li>Roll out the dough into a rectangle. Spread with soft butter, then sprinkle with sugar and cinnamon.</li>
            <li>Roll up, slice into buns, and place on a baking tray. Let rise for 30 minutes.</li>
            <li>Bake at 220°C for 8–10 minutes, until golden brown.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Swedish Potato Pancakes (Raggmunk)</h2>
          <h3>Ingredients</h3>
          <ul>
            <li>500 g potatoes, peeled</li>
            <li>100 g flour</li>
            <li>300 ml milk</li>
            <li>1 egg</li>
            <li>1/2 tsp salt</li>
            <li>Butter, for frying</li>
          </ul>
          <h3>Instructions</h3>
          <ol>
            <li>Grate the potatoes and squeeze out excess liquid.</li>
            <li>Mix potatoes with flour, milk, egg, and salt to form a batter.</li>
            <li>Heat butter in a frying pan. Pour in batter to form thin pancakes and fry until golden on both sides.</li>
          </ol>
        </section>
      </main>
      <footer className="recipes-footer">
        <p>© 2025 Simple Recipes</p>
      </footer>
    </div>
  );
}

export default App;
