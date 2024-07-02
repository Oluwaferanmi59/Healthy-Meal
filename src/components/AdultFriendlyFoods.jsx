// import { useState, useEffect } from "react";
// import { fetchFoodDetails } from "../hooks/useFetchFoodDetails.jsx";
// import { fetchFoodRecipe } from "../hooks/useFetchFoodRecipe.jsx";

// const adultFriendlyFoods = [
//   "salmon",
//   "steak",
//   "quinoa salad",
//   "avocado toast",
//   "sushi",
//   "caesar salad",
//   "spaghetti bolognese",
//   "grilled chicken",
//   "smoothie bowl",
//   "baked salmon",
// ];

// const foodImages = {
//   salmon: "https://example.com/salmon.jpg",
//   steak: "https://example.com/steak.jpg",
//   "quinoa salad": "https://example.com/quinoa-salad.jpg",
//   "avocado toast": "https://example.com/avocado-toast.jpg",
//   sushi: "https://example.com/sushi.jpg",
//   "caesar salad": "https://example.com/caesar-salad.jpg",
//   "spaghetti bolognese": "https://example.com/spaghetti-bolognese.jpg",
//   "grilled chicken": "https://example.com/grilled-chicken.jpg",
//   "smoothie bowl": "https://example.com/smoothie-bowl.jpg",
//   "baked salmon": "https://example.com/baked-salmon.jpg",
// };

// const AdultFriendlyFoods = () => {
//   const [foodsWithRecipes, setFoodsWithRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFoods = async () => {
//       const fetchedFoodsWithRecipes = [];

//       for (const food of adultFriendlyFoods) {
//         const foodDetails = await fetchFoodDetails(food);
//         if (foodDetails && foodDetails.length > 0) {
//           const foodId = foodDetails[0].food.foodId;
//           const recipeDetails = await fetchFoodRecipe(foodId);

//           fetchedFoodsWithRecipes.push({
//             food: foodDetails[0].food,
//             recipe: recipeDetails,
//             image: foodImages[food.toLowerCase()],
//           });
//         }
//       }

//       setFoodsWithRecipes(fetchedFoodsWithRecipes);
//       setLoading(false);
//     };

//     fetchFoods();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="food-list">
//       {foodsWithRecipes.map((item, index) => (
//         <div key={index} className="food-item">
//           <h2>{item.food.label}</h2>
//           {item.image && (
//             <img
//               src={item.image}
//               alt={item.food.label}
//               style={{ maxWidth: "200px", maxHeight: "200px" }}
//             />
//           )}
//           <p>Category: {item.food.category}</p>
//           <p>Calories: {item.food.nutrients.ENERC_KCAL} kcal</p>
//           <h3>Recipe:</h3>
//           <ul>
//             {item.recipe.ingredients?.map((ingredient, idx) => (
//               <li key={idx}>{ingredient.text}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdultFriendlyFoods;

//////////////////////////////////////////////////////////////////////////////////

// import { useState, useEffect } from "react";
// import {
//   fetchFoodDetails,
//   fetchFoodRecipe,
// } from "../hooks/useFetchFoodDetails.jsx";

// const adultFriendlyFoods = [
//   "salmon",
//   "steak",
//   "quinoa salad",
//   "avocado toast",
//   "sushi",
//   "caesar salad",
//   "spaghetti bolognese",
//   "grilled chicken",
//   "smoothie bowl",
//   "baked salmon",
// ];

// const foodImages = {
//   salmon: "https://example.com/salmon.jpg",
//   steak: "https://example.com/steak.jpg",
//   "quinoa salad": "https://example.com/quinoa-salad.jpg",
//   "avocado toast": "https://example.com/avocado-toast.jpg",
//   sushi: "https://example.com/sushi.jpg",
//   "caesar salad": "https://example.com/caesar-salad.jpg",
//   "spaghetti bolognese": "https://example.com/spaghetti-bolognese.jpg",
//   "grilled chicken": "https://example.com/grilled-chicken.jpg",
//   "smoothie bowl": "https://example.com/smoothie-bowl.jpg",
//   "baked salmon": "https://example.com/baked-salmon.jpg",
// };

// const AdultFriendlyFoods = () => {
//   const [foodsWithRecipes, setFoodsWithRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFoods = async () => {
//       const fetchedFoodsWithRecipes = [];

//       for (const food of adultFriendlyFoods) {
//         const foodDetails = await fetchFoodDetails(food);
//         if (foodDetails && foodDetails.length > 0) {
//           const foodId = foodDetails[0].food.foodId;
//           const recipeDetails = await fetchFoodRecipe(foodId);

//           fetchedFoodsWithRecipes.push({
//             food: foodDetails[0].food,
//             recipe: recipeDetails,
//             image: foodImages[food.toLowerCase()],
//           });
//         }
//       }

//       setFoodsWithRecipes(fetchedFoodsWithRecipes);
//       setLoading(false);
//     };

//     fetchFoods();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="food-list">
//       {foodsWithRecipes.map((item, index) => (
//         <div key={index} className="food-item grid grid-cols-4">
//           <h2>{item.food.label}</h2>
//           {item.image && (
//             <img
//               src={item.image}
//               alt={item.food.label}
//               style={{ maxWidth: "200px", maxHeight: "200px" }}
//             />
//           )}
//           <p>Category: {item.food.category}</p>
//           <p>Calories: {item.food.nutrients.ENERC_KCAL} kcal</p>
//           <h3>Ingredients:</h3>
//           <ul>
//             {item.recipe.ingredients?.map((ingredient, idx) => (
//               <li key={idx}>{ingredient.text}</li>
//             ))}
//           </ul>
//           <h3>Instructions:</h3>
//           <p>{item.recipe.instructions || "No instructions available"}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdultFriendlyFoods;

import { useState, useEffect } from "react";
import {
  fetchFoodDetails,
  fetchFoodRecipe,
} from "../hooks/useFetchFoodDetails.jsx";

const adultFriendlyFoods = [
  "salmon",
  "steak",
  "quinoa salad",
  "avocado toast",
  "sushi",
  "caesar salad",
  "spaghetti bolognese",
  "grilled chicken",
  "smoothie bowl",
  "baked salmon",
];

const foodImages = {
  salmon: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600",
  steak: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=600",
  "quinoa salad": "https://images.pexels.com/photos/11115860/pexels-photo-11115860.jpeg?auto=compress&cs=tinysrgb&w=600",
  "avocado toast": "https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&w=600",
  sushi: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600",
  "caesar salad": "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
  "spaghetti bolognese": "https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=600",
  "grilled chicken": "https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg?auto=compress&cs=tinysrgb&w=600",
  "smoothie bowl": "https://images.pexels.com/photos/2173774/pexels-photo-2173774.jpeg?auto=compress&cs=tinysrgb&w=600",
  "baked salmon": "https://images.pexels.com/photos/6842096/pexels-photo-6842096.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const ingredientsMapping = {
  salmon: [
    "salmon fillet",
    "lemon",
    "olive oil",
    "salt",
    "pepper",
    "garlic",
    "parsley",
  ],
  steak: [
    "steak",
    "salt",
    "pepper",
    "garlic",
    "olive oil",
    "rosemary",
    "butter",
  ],
  "quinoa salad": [
    "quinoa",
    "tomato",
    "cucumber",
    "red onion",
    "olive oil",
    "lemon juice",
    "salt",
    "pepper",
  ],
  "avocado toast": [
    "avocado",
    "whole grain bread",
    "lemon",
    "salt",
    "pepper",
    "cherry tomatoes",
    "feta cheese",
  ],
  sushi: [
    "sushi rice",
    "nori seaweed",
    "salmon",
    "avocado",
    "cucumber",
    "soy sauce",
    "wasabi",
  ],
  "caesar salad": [
    "romaine lettuce",
    "croutons",
    "parmesan cheese",
    "caesar dressing",
    "lemon",
    "olive oil",
    "salt",
    "pepper",
  ],
  "spaghetti bolognese": [
    "spaghetti",
    "ground beef",
    "tomato sauce",
    "onion",
    "garlic",
    "basil",
    "oregano",
    "parmesan cheese",
  ],
  "grilled chicken": [
    "chicken breast",
    "salt",
    "pepper",
    "lemon juice",
    "garlic powder",
    "olive oil",
    "thyme",
  ],
  "smoothie bowl": [
    "banana",
    "spinach",
    "berries",
    "almond milk",
    "chia seeds",
    "honey",
    "granola",
  ],
  "baked salmon": [
    "salmon fillet",
    "lemon",
    "butter",
    "garlic",
    "dill",
    "salt",
    "pepper",
  ],
};

const AdultFriendlyFoods = () => {
  const [foodsWithRecipes, setFoodsWithRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      const fetchedFoodsWithRecipes = [];

      for (const food of adultFriendlyFoods) {
        const foodDetails = await fetchFoodDetails(food);
        if (foodDetails && foodDetails.length > 0) {
          const foodId = foodDetails[0].food.foodId;
          const recipeDetails = await fetchFoodRecipe(foodId);

          fetchedFoodsWithRecipes.push({
            food: foodDetails[0].food,
            recipe: recipeDetails,
            image: foodImages[food.toLowerCase()],
            ingredients: ingredientsMapping[food.toLowerCase()] || [],
          });
        }
      }

      setFoodsWithRecipes(fetchedFoodsWithRecipes);
      setLoading(false);
    };

    fetchFoods();
  }, []);

  if (loading) {
    return (
      <div>
        {" "}
        <img src="/public/spinner.gif" />
      </div>
    );
  }

  return (
    <div className="food-list">
      {foodsWithRecipes.map((item, index) => (
        <div
          key={index}
          className="food-item grid grid-cols-4 m-4 p-4 bg-[#EAAA00] rounded-md "
        >
          <h2 className="font-semibold text-2xl">{item.food.label}</h2>
          {item.image && (
            <img
              src={item.image}
              alt={item.food.label}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          )}
          <div className="flex gap-6">
            <p>Category: {item.food.category}</p>
            <p>Calories: {item.food.nutrients.ENERC_KCAL} kcal</p>
            <h3>Ingredients:</h3>
          </div>

          <ul className="relative right-[6rem] top-4">
            {item.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          {/* <h3>Instructions:</h3>
          <p>{item.recipe.instructions || "No instructions available"}</p> */}
        </div>
      ))}
    </div>
  );
};

export default AdultFriendlyFoods;
