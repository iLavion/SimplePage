import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeGrid from './components/RecipeGrid';
import RecipePage from './components/RecipePage';

const recipes = [
	{
		id: 'spaghetti-aglio-e-olio',
		title: 'Spaghetti Aglio e Olio',
		image: '/images/spaghetti.png',
		ingredients: [
			'200 g spaghetti',
			'2 cloves garlic, sliced',
			'60 ml olive oil',
			'1 g chili flakes',
			'Fresh parsley, chopped',
			'Salt, to taste',
		],
		instructions: [
			'Cook the spaghetti in a large pot of salted boiling water until al dente. Drain.',
			'In a pan, gently sauté the garlic in olive oil until fragrant. Add chili flakes.',
			'Add the drained spaghetti and toss with the oil and parsley. Serve immediately.',
		],
	},
	{
		id: 'caprese-salad',
		title: 'Caprese Salad',
		image: '/images/caprese.png',
		ingredients: [
			'2 tomatoes, sliced',
			'125 g fresh mozzarella, sliced',
			'Fresh basil leaves',
			'15 ml olive oil',
			'Salt and pepper, to taste',
		],
		instructions: [
			'Arrange tomato and mozzarella slices on a plate, alternating them.',
			'Place basil leaves between the slices.',
			'Drizzle with olive oil and season with salt and pepper. Serve fresh.',
		],
	},
	{
		id: 'banana-pancakes',
		title: 'Banana Pancakes',
		image: '/images/banana-pancakes.png',
		ingredients: [
			'1 ripe banana',
			'2 eggs',
			'2 g baking powder',
			'Butter, for frying',
		],
		instructions: [
			'Mash the banana in a bowl. Add eggs and baking powder, and mix until smooth.',
			'Heat a little butter in a frying pan over medium heat. Pour in small amounts of batter.',
			'Cook until golden on both sides. Serve warm.',
		],
	},
	{
		id: 'swedish-meatballs',
		title: 'Swedish Meatballs (Köttbullar)',
		image: '/images/meatballs.png',
		ingredients: [
			'500 g ground beef',
			'250 g ground pork',
			'1 small onion, finely chopped',
			'100 ml milk',
			'50 g breadcrumbs',
			'1 egg',
			'Salt and pepper, to taste',
			'Butter, for frying',
		],
		instructions: [
			'Soak the breadcrumbs in milk for 5 minutes.',
			'Combine all ingredients in a bowl and mix well. Shape into small balls.',
			'Fry the meatballs in butter over medium heat until browned and cooked through.',
		],
	},
	{
		id: 'gravlax',
		title: 'Gravlax (Cured Salmon)',
		image: '/images/gravlax.png',
		ingredients: [
			'500 g salmon fillet, skin on',
			'30 g salt',
			'30 g sugar',
			'1 tsp crushed white pepper',
			'Fresh dill',
		],
		instructions: [
			'Mix salt, sugar, and pepper. Rub the mixture onto the salmon.',
			'Cover the salmon with plenty of dill, then wrap tightly in plastic wrap.',
			'Refrigerate for 48 hours, turning once halfway. Slice thinly to serve.',
		],
	},
	{
		id: 'kanelbullar',
		title: 'Swedish Cinnamon Buns (Kanelbullar)',
		image: '/images/kanelbullar.png',
		ingredients: [
			'500 g flour',
			'75 g sugar',
			'7 g dry yeast (1 packet)',
			'250 ml milk',
			'75 g butter, melted',
			'1 egg',
			'1/2 tsp salt',
			'2 tsp ground cinnamon',
			'50 g soft butter (for filling)',
			'50 g sugar (for filling)',
		],
		instructions: [
			'Mix flour, sugar, yeast, salt, milk, melted butter, and egg. Knead into a smooth dough. Let rise for 1 hour.',
			'Roll out the dough into a rectangle. Spread with soft butter, then sprinkle with sugar and cinnamon.',
			'Roll up, slice into buns, and place on a baking tray. Let rise for 30 minutes.',
			'Bake at 220°C for 8–10 minutes, until golden brown.',
		],
	},
	{
		id: 'raggmunk',
		title: 'Swedish Potato Pancakes (Raggmunk)',
		image: '/images/raggmunk.png',
		ingredients: [
			'500 g potatoes, peeled',
			'100 g flour',
			'300 ml milk',
			'1 egg',
			'1/2 tsp salt',
			'Butter, for frying',
		],
		instructions: [
			'Grate the potatoes and squeeze out excess liquid.',
			'Mix potatoes with flour, milk, egg, and salt to form a batter.',
			'Heat butter in a frying pan. Pour in batter to form thin pancakes and fry until golden on both sides.',
		],
	},
];

function App() {
	return (
		<Router>
			<div className="App">
				<header className="recipes-header">
					<h1>Simple Recipes</h1>
					<p>Delicious and easy-to-make dishes (metric units)</p>
				</header>
				<main className="recipes-main">
					<Routes>
						<Route path="/" element={<RecipeGrid recipes={recipes} />} />
						<Route path="/recipe/:id" element={<RecipePage recipes={recipes} />} />
					</Routes>
				</main>
				<footer className="recipes-footer">
					<p>© 2025 Simple Recipes</p>
				</footer>
			</div>
		</Router>
	);
}

export default App;
