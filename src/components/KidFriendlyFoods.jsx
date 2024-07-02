// import { useState, useEffect } from "react";
// import { fetchFoodDetails } from "../hooks/useFetchFoodDetails.jsx";
// import { fetchFoodRecipe } from "../hooks/useFetchFoodRecipe.jsx";

// const kidFriendlyFoods = [
//   "apple",
//   "banana",
//   "chicken nuggets",
//   "macaroni and cheese",
//   "carrot sticks",
//   "yogurt",
//   "peanut butter sandwich",
//   "oatmeal",
//   "cheese sticks",
//   "pancakes",
// ];

// const foodImages = {
//   apple:
//     "https://upload.wikimedia.org/wikipedia/commons/0/07/Honeycrisp-Apple.jpg",
//   banana: "https://example.com/banana.jpg",
//   "chicken nuggets": "https://example.com/chicken-nuggets.jpg",
//   "macaroni and cheese": "https://example.com/macaroni-and-cheese.jpg",
//   "carrot sticks": "https://example.com/carrot-sticks.jpg",
//   yogurt: "https://example.com/yogurt.jpg",
//   "peanut butter sandwich": "https://example.com/peanut-butter-sandwich.jpg",
//   oatmeal: "https://example.com/oatmeal.jpg",
//   "cheese sticks": "https://example.com/cheese-sticks.jpg",
//   pancakes: "https://example.com/pancakes.jpg",
// };

// const KidFriendlyFoods = () => {
//   const [kidFriendlyFoodsWithRecipes, setKidFriendlyFoodsWithRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchKidFriendlyFoods = async () => {
//       const foodsWithRecipes = [];

//       for (const food of kidFriendlyFoods) {
//         const foodDetails = await fetchFoodDetails(food);
//         if (foodDetails && foodDetails.length > 0) {
//           const foodId = foodDetails[0].food.foodId;
//           const recipeDetails = await fetchFoodRecipe(foodId);

//           foodsWithRecipes.push({
//             food: foodDetails[0].food,
//             recipe: recipeDetails,
//             image: foodImages[food.toLowerCase()],
//           });
//         }
//       }

//       setKidFriendlyFoodsWithRecipes(foodsWithRecipes);
//       setLoading(false);
//     };

//     fetchKidFriendlyFoods();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="food-list">
//       {kidFriendlyFoodsWithRecipes.map((item, index) => (
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

// export default KidFriendlyFoods;

// KidFriendlyFoods.jsx

import { useState, useEffect } from "react";
import {
  fetchFoodDetails,
  fetchFoodRecipe,
} from "../hooks/useFetchFoodDetails.jsx";

// const kidFriendlyFoods = [
//   "apple",
//   "banana",
//   "chicken nuggets",
//   "macaroni and cheese",
//   "carrot sticks",
//   "yogurt",
//   "peanut butter sandwich",
//   "oatmeal",
//   "cheese sticks",
//   "pancakes",
// ];

// const foodImages = {
//   apple:
//     "https://upload.wikimedia.org/wikipedia/commons/0/07/Honeycrisp-Apple.jpg",
//   banana: "https://example.com/banana.jpg",
//   "chicken nuggets": "https://example.com/chicken-nuggets.jpg",
//   "macaroni and cheese": "https://example.com/macaroni-and-cheese.jpg",
//   "carrot sticks": "https://example.com/carrot-sticks.jpg",
//   yogurt: "https://example.com/yogurt.jpg",
//   "peanut butter sandwich": "https://example.com/peanut-butter-sandwich.jpg",
//   oatmeal: "https://example.com/oatmeal.jpg",
//   "cheese sticks": "https://example.com/cheese-sticks.jpg",
//   pancakes: "https://example.com/pancakes.jpg",
// };

// const KidFriendlyFoods = () => {
//   const [foodsWithRecipes, setFoodsWithRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFoods = async () => {
//       const fetchedFoodsWithRecipes = [];

//       for (const food of kidFriendlyFoods) {
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

// import { useState, useEffect } from "react";
// import { fetchFoodDetails, fetchFoodRecipe } from "./hooks";

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

const foodImages = {
  apple:
    "https://upload.wikimedia.org/wikipedia/commons/0/07/Honeycrisp-Apple.jpg",
  banana: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
  "chicken nuggets": "https://images.pexels.com/photos/11519282/pexels-photo-11519282.jpeg?auto=compress&cs=tinysrgb&w=600",
  "macaroni and cheese": "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600",
  "carrot sticks": "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
  yogurt: "https://images.pexels.com/photos/3212808/pexels-photo-3212808.jpeg?auto=compress&cs=tinysrgb&w=600",
  "peanut butter sandwich": "https://images.pexels.com/photos/4973825/pexels-photo-4973825.jpeg?auto=compress&cs=tinysrgb&w=600",
  oatmeal: "https://images.pexels.com/photos/3233281/pexels-photo-3233281.jpeg?auto=compress&cs=tinysrgb&w=600",
  "cheese sticks": "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=600",
  pancakes: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const kidsFriendlyFoodsWithIngredients = [
  {
    name: "apple",
  },
  {
    name: "banana",
  },
  {
    name: "chicken nuggets",
    ingredients: [
      "chicken breast",
      "breadcrumbs",
      "egg",
      "flour",
      "garlic powder",
      "paprika",
      "ketchup",
    ],
  },
  {
    name: "macaroni and cheese",
    ingredients: [
      "macaroni",
      "cheddar cheese",
      "milk",
      "butter",
      "flour",
      "mustard powder",
      "breadcrumbs",
    ],
  },
  {
    name: "carrot sticks",
    ingredients: [
      "carrots",
      "ranch dressing",
      "hummus",
      "celery sticks",
      "bell pepper",
      "cucumber",
      "cheese cubes",
    ],
  },
  {
    name: "yogurt",
    ingredients: [
      "yogurt",
      "granola",
      "honey",
      "berries",
      "nuts",
      "chocolate chips",
      "banana slices",
    ],
  },
  {
    name: "peanut butter sandwich",
    ingredients: [
      "bread",
      "peanut butter",
      "jelly",
      "banana slices",
      "honey",
      "marshmallow fluff",
      "apple slices",
    ],
  },
  {
    name: "oatmeal",
    ingredients: [
      "rolled oats",
      "milk",
      "brown sugar",
      "cinnamon",
      "berries",
      "nuts",
      "honey",
    ],
  },
  {
    name: "cheese sticks",
    ingredients: [
      "cheese sticks",
      "crackers",
      "grapes",
      "apple slices",
      "carrot sticks",
      "pretzels",
      "cucumber slices",
    ],
  },
  {
    name: "pancakes",
    ingredients: [
      "flour",
      "milk",
      "eggs",
      "baking powder",
      "maple syrup",
      "berries",
      "chocolate chips",
    ],
  },
];

const KidFriendlyFoods = () => {
  const [foodsWithRecipes, setFoodsWithRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      const fetchedFoodsWithRecipes = [];

      for (const food of kidFriendlyFoods) {
        const foodDetails = await fetchFoodDetails(food);
        if (foodDetails && foodDetails.length > 0) {
          const foodId = foodDetails[0].food.foodId;
          const recipeDetails = await fetchFoodRecipe(foodId);

          const foodWithIngredients = kidsFriendlyFoodsWithIngredients.find(
            (f) => f.name === food
          );

          fetchedFoodsWithRecipes.push({
            food: foodDetails[0].food,
            recipe: {
              ...recipeDetails,
              ingredients: foodWithIngredients
                ? foodWithIngredients.ingredients
                : [],
            },
            image: foodImages[food.toLowerCase()],
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
    <div className="food-list ">
      {foodsWithRecipes.map((item, index) => (
        <div
          key={index}
          className="food-item m-4 p-4 grid grid-cols-3 bg-[#C4D600] rounded-md "
        >
          <h2 className="font-semibold text-2xl">{item.food.label}</h2>
          {item.image && (
            <img
              src={item.image}
              alt={item.food.label}
              style={{ maxWidth: "100px", maxHeight: "200px" }}
            />
          )}
          <p>Category: {item.food.category}</p>
          <p>Calories: {item.food.nutrients.ENERC_KCAL} kcal</p>
          <h3>Ingredients:</h3>
          <ul className="relative right-[35rem] top-5">
            {item.recipe.ingredients?.map((ingredient, idx) => (
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

export default KidFriendlyFoods;

// export default KidFriendlyFoods;
