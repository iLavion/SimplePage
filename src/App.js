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
      </main>
      <footer className="recipes-footer">
        <p>© 2025 Simple Recipes</p>
      </footer>
    </div>
  );
}

export default App;
