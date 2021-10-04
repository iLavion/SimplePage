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
          <ul>
            <li>200 g spaghetti</li>
            <li>2 cloves garlic, sliced</li>
            <li>60 ml olive oil</li>
            <li>1 g chili flakes</li>
            <li>Fresh parsley, chopped</li>
            <li>Salt</li>
          </ul>
          <ol>
            <li>Cook spaghetti in salted boiling water.</li>
            <li>Sauté garlic in olive oil, add chili flakes.</li>
            <li>Toss spaghetti with oil and parsley.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Caprese Salad</h2>
          <ul>
            <li>2 tomatoes, sliced</li>
            <li>125 g fresh mozzarella, sliced</li>
            <li>Fresh basil leaves</li>
            <li>15 ml olive oil</li>
            <li>Salt & pepper</li>
          </ul>
          <ol>
            <li>Layer tomato and mozzarella slices.</li>
            <li>Add basil leaves between layers.</li>
            <li>Drizzle with olive oil, season to taste.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Banana Pancakes</h2>
          <ul>
            <li>1 ripe banana</li>
            <li>2 eggs</li>
            <li>2 g baking powder</li>
            <li>Butter for frying</li>
          </ul>
          <ol>
            <li>Mash banana, mix with eggs and baking powder.</li>
            <li>Pour batter onto buttered pan, cook both sides.</li>
            <li>Serve warm.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Swedish Meatballs (Köttbullar)</h2>
          <ul>
            <li>500 g ground beef</li>
            <li>250 g ground pork</li>
            <li>1 small onion, finely chopped</li>
            <li>100 ml milk</li>
            <li>50 g breadcrumbs</li>
            <li>1 egg</li>
            <li>Salt & pepper</li>
            <li>Butter for frying</li>
          </ul>
          <ol>
            <li>Soak breadcrumbs in milk for 5 minutes.</li>
            <li>Mix all ingredients, form small balls.</li>
            <li>Fry in butter until browned and cooked through.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Gravlax (Cured Salmon)</h2>
          <ul>
            <li>500 g salmon fillet, skin on</li>
            <li>30 g salt</li>
            <li>30 g sugar</li>
            <li>1 tsp crushed white pepper</li>
            <li>Fresh dill</li>
          </ul>
          <ol>
            <li>Mix salt, sugar, and pepper. Rub onto salmon.</li>
            <li>Cover with dill, wrap tightly in plastic.</li>
            <li>Refrigerate 48 hours, turning once. Slice thinly to serve.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Swedish Cinnamon Buns (Kanelbullar)</h2>
          <ul>
            <li>500 g flour</li>
            <li>75 g sugar</li>
            <li>1 packet (7 g) dry yeast</li>
            <li>250 ml milk</li>
            <li>75 g butter, melted</li>
            <li>1 egg</li>
            <li>1/2 tsp salt</li>
            <li>2 tsp ground cinnamon</li>
            <li>50 g soft butter (for filling)</li>
            <li>50 g sugar (for filling)</li>
          </ul>
          <ol>
            <li>Mix dough ingredients, knead, let rise 1 hour.</li>
            <li>Roll out, spread with soft butter, sprinkle with sugar and cinnamon.</li>
            <li>Roll up, slice, let rise 30 min. Bake at 220°C for 8–10 min.</li>
          </ol>
        </section>
        <section className="recipe">
          <h2>Swedish Potato Pancakes (Raggmunk)</h2>
          <ul>
            <li>500 g potatoes, peeled</li>
            <li>100 g flour</li>
            <li>300 ml milk</li>
            <li>1 egg</li>
            <li>1/2 tsp salt</li>
            <li>Butter for frying</li>
          </ul>
          <ol>
            <li>Grate potatoes, mix with flour, milk, egg, and salt.</li>
            <li>Fry thin pancakes in butter until golden on both sides.</li>
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
