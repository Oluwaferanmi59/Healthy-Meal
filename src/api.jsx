// // src/api.js
// const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

// export const fetchAllRecipes = async () => {
//   const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   const fetches = letters.map(letter => fetch(`${BASE_URL}${letter}`).then(response => response.json()));

//   const results = await Promise.all(fetches);
//   const allMeals = results.flatMap(result => result.meals).filter(Boolean);

//   return allMeals;
// };

// src/api.js
// const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

// const categories = {
//   kids: ['Spaghetti Bolognese', 'Chicken Nuggets'],
//   adults: ['Beef Wellington', 'Caesar Salad'],
//   diabetics: ['Grilled Chicken Salad', 'Vegetable Stir Fry']
// };

// const categorizeRecipes = (recipes) => {
//   return recipes.map(recipe => {
//     let category = '';
//     if (categories.kids.includes(recipe.strMeal)) {
//       category = 'kids';
//     } else if (categories.adults.includes(recipe.strMeal)) {
//       category = 'adults';
//     } else if (categories.diabetics.includes(recipe.strMeal)) {
//       category = 'diabetics';
//     }
//     return { ...recipe, category };
//   });
// };

// export const fetchAllRecipes = async () => {
//   const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   const fetches = letters.map(letter => fetch(`${BASE_URL}${letter}`).then(response => response.json()));

//   const results = await Promise.all(fetches);
//   const allMeals = results.flatMap(result => result.meals).filter(Boolean);

//   return categorizeRecipes(allMeals);
// };

// src/api.js
// const APP_ID = '1fe99adc';
// const APP_KEY = 'ccaeed8be17a828a8891ad38ad74b3e0';
// const BASE_URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;

// export const fetchRecipes = async (query = '') => {
//   const response = await fetch(`${BASE_URL}&q=${query}`);
//   const data = await response.json();
//   console.log(data)
//   return data.hits.map(hit => hit.recipe);
// };

import { useEffect, useState } from "react";

const app_id = "c66f301e";
const app_key = "6a7e249154113d1ef4070198b9e64314";
const kidFriendlyFoods = [
  "apple",
  "banana",
  "chicken nuggets",
  "macaroni and cheese",
  "carrot sticks",
  "yogurt",
  "peanut butter sandwich",
  "oatmeal",
  "cheese sticks",
  "pancakes",
];

const fetchFoodDetails = async (query) => {
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.parsed;
  } catch (error) {
    console.error("Error fetching food data: ", error);
  }
};

const fetchFoodRecipe = async (foodId) => {
  const url = `https://api.edamam.com/api/food-database/v2/nutrition-details?app_id=${app_id}&app_key=${app_key}`;

  const body = {
    ingredients: [
      {
        quantity: 1,
        measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
        foodId: foodId,
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipe data: ", error);
  }
};

const foodImages = {
  apple:
    "https://upload.wikimedia.org/wikipedia/commons/0/07/Honeycrisp-Apple.jpg",
  banana: "https://example.com/banana.jpg",
  "chicken nuggets": "https://example.com/chicken-nuggets.jpg",
  "macaroni and cheese": "https://example.com/macaroni-and-cheese.jpg",
  "carrot sticks": "https://example.com/carrot-sticks.jpg",
  yogurt: "https://example.com/yogurt.jpg",
  "peanut butter sandwich": "https://example.com/peanut-butter-sandwich.jpg",
  oatmeal: "https://example.com/oatmeal.jpg",
  "cheese sticks": "https://example.com/cheese-sticks.jpg",
  pancakes: "https://example.com/pancakes.jpg",
};

export default function App() {
  const [kidFriendlyFoodsWithRecipes, setKidFriendlyFoodsWithRecipes] =
    useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKidFriendlyFoods = async () => {
      const foodsWithRecipes = [];

      for (const food of kidFriendlyFoods) {
        const foodDetails = await fetchFoodDetails(food);
        if (foodDetails && foodDetails.length > 0) {
          const foodId = foodDetails[0].food.foodId;
          const recipeDetails = await fetchFoodRecipe(foodId);

          foodsWithRecipes.push({
            food: foodDetails[0].food,
            recipe: recipeDetails,
            image: foodImages[food.toLowerCase()],
          });
        }
      }

      setKidFriendlyFoodsWithRecipes(foodsWithRecipes);
      setLoading(false);
    };

    fetchKidFriendlyFoods();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Kid-Friendly Foods with Recipes</h1>
      <ul>
        {kidFriendlyFoodsWithRecipes.map((item, index) => (
          <li key={index}>
            <h2>{item.food.label}</h2>
            {item.image && (
              <img
                src={item.image}
                alt={item.food.label}
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            )}
            <p>Category: {item.food.category}</p>
            <p>Calories: {item.food.nutrients.ENERC_KCAL} kcal</p>
            <h3>Recipe:</h3>
            <ul>
              {item.recipe.ingredients?.map((ingredient, idx) => (
                <li key={idx}>{ingredient.text}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
