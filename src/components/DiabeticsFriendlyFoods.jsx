// import { useState, useEffect } from "react";
// import {
//   fetchFoodDetails,
//   fetchFoodRecipe,
// } from "../hooks/useFetchFoodDetails.jsx";

// const diabeticFriendlyFoods = [
//   "broccoli",
//   "lentils",
//   "spinach",
//   "cauliflower",
//   "chicken breast",
//   "tofu",
//   "blueberries",
//   "almonds",
//   "olive oil",
//   "yogurt",
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

// const ingredientsMapping = [
//   {
//     food: "broccoli",
//     ingredients: [
//       "2 cups broccoli florets",
//       "1 tbsp olive oil",
//       "2 cloves garlic, minced",
//       "Salt and pepper to taste",
//     ],
//   },
//   {
//     food: "lentils",
//     ingredients: [
//       "1 cup lentils",
//       "4 cups water",
//       "1 onion, chopped",
//       "2 cloves garlic, minced",
//       "1 tsp cumin",
//     ],
//   },
//   {
//     food: "spinach",
//     ingredients: [
//       "4 cups fresh spinach",
//       "1 tbsp olive oil",
//       "2 cloves garlic, minced",
//       "Salt and pepper to taste",
//     ],
//   },
//   {
//     food: "cauliflower",
//     ingredients: [
//       "1 head cauliflower, cut into florets",
//       "2 tbsp olive oil",
//       "1 tsp turmeric",
//       "Salt and pepper to taste",
//     ],
//   },
//   {
//     food: "chicken breast",
//     ingredients: [
//       "2 chicken breasts",
//       "1 tbsp olive oil",
//       "1 tsp paprika",
//       "1 tsp garlic powder",
//       "Salt and pepper to taste",
//     ],
//   },
//   {
//     food: "tofu",
//     ingredients: [
//       "1 block firm tofu",
//       "2 tbsp soy sauce",
//       "1 tbsp sesame oil",
//       "1 clove garlic, minced",
//       "1 tsp ginger, minced",
//     ],
//   },
//   {
//     food: "blueberries",
//     ingredients: [
//       "1 cup fresh blueberries",
//       "1 tbsp lemon juice",
//       "1 tbsp honey",
//       "1 tsp chia seeds",
//     ],
//   },
//   {
//     food: "almonds",
//     ingredients: [
//       "1 cup raw almonds",
//       "1 tsp olive oil",
//       "1/2 tsp sea salt",
//       "1/2 tsp smoked paprika",
//     ],
//   },
//   {
//     food: "olive oil",
//     ingredients: [
//       "1/4 cup extra virgin olive oil",
//       "1 tbsp balsamic vinegar",
//       "1 clove garlic, minced",
//       "Salt and pepper to taste",
//     ],
//   },
//   {
//     food: "yogurt",
//     ingredients: [
//       "1 cup plain Greek yogurt",
//       "1 tbsp honey",
//       "1/2 tsp vanilla extract",
//       "1/4 cup fresh berries",
//     ],
//   },
// ];
// const DiabeticsFriendlyFoods = () => {
//   const [foodsWithRecipes, setFoodsWithRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFoods = async () => {
//       const fetchedFoodsWithRecipes = [];

//       for (const food of diabeticFriendlyFoods) {
//         const foodDetails = await fetchFoodDetails(food);
//         if (foodDetails && foodDetails.length > 0) {
//           const foodId = foodDetails[0].food.foodId;
//           const recipeDetails = await fetchFoodRecipe(foodId);

//           fetchedFoodsWithRecipes.push({
//             food: foodDetails[0].food,
//             recipe: recipeDetails,
//             image: foodImages[food.toLowerCase()],
//             ingredients: ingredientsMapping[food.toLowerCase()] || [],
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
//         <div
//           key={index}
//           className="food-item grid grid-cols-3 m-4 p-4 bg-[#C4D600] rounded-md "
//         >
//           <h2 className="font-semibold text-2xl">{item.food.label}</h2>
//           {item.image && (
//             <img
//               src={item.image}
//               alt={item.food.label}
//               style={{ maxWidth: "200px", maxHeight: "200px" }}
//             />
//           )}
//           <div className="flex gap-6">
//             <p>Category: {item.food.category}</p>
//             <p>Calories: {item.food.nutrients.ENERC_KCAL} kcal</p>
//             <h3>Ingredients:</h3>
//           </div>

//           <ul>
//             {item.ingredients.map((ingredient, idx) => (
//               <li key={idx}>{ingredient}</li>
//             ))}
//           </ul>
//           {/* <h3>Instructions:</h3>
//             <p>{item.recipe.instructions || "No instructions available"}</p> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DiabeticsFriendlyFoods;

import { useState, useEffect } from "react";
import {
  fetchFoodDetails,
  fetchFoodRecipe,
} from "../hooks/useFetchFoodDetails.jsx";

const diabeticFriendlyFoods = [
  "broccoli",
  "lentils",
  "spinach",
  "cauliflower",
  "chicken breast",
  "tofu",
  "blueberries",
  "almonds",
  "olive oil",
  "yogurt",
];

const foodImages = {
  salmon: "https://example.com/salmon.jpg",
  steak: "https://example.com/steak.jpg",
  "quinoa salad": "https://example.com/quinoa-salad.jpg",
  "avocado toast": "https://example.com/avocado-toast.jpg",
  sushi: "https://example.com/sushi.jpg",
  "caesar salad": "https://example.com/caesar-salad.jpg",
  "spaghetti bolognese": "https://example.com/spaghetti-bolognese.jpg",
  "grilled chicken": "https://example.com/grilled-chicken.jpg",
  "smoothie bowl": "https://example.com/smoothie-bowl.jpg",
  "baked salmon": "https://example.com/baked-salmon.jpg",
};

const ingredientsMapping = {
  broccoli: [
    "2 cups broccoli florets",
    "1 tbsp olive oil",
    "2 cloves garlic, minced",
    "Salt and pepper to taste",
  ],
  lentils: [
    "1 cup lentils",
    "4 cups water",
    "1 onion, chopped",
    "2 cloves garlic, minced",
    "1 tsp cumin",
  ],
  spinach: [
    "4 cups fresh spinach",
    "1 tbsp olive oil",
    "2 cloves garlic, minced",
    "Salt and pepper to taste",
  ],
  cauliflower: [
    "1 head cauliflower, cut into florets",
    "2 tbsp olive oil",
    "1 tsp turmeric",
    "Salt and pepper to taste",
  ],
  "chicken breast": [
    "2 chicken breasts",
    "1 tbsp olive oil",
    "1 tsp paprika",
    "1 tsp garlic powder",
    "Salt and pepper to taste",
  ],
  tofu: [
    "1 block firm tofu",
    "2 tbsp soy sauce",
    "1 tbsp sesame oil",
    "1 clove garlic, minced",
    "1 tsp ginger, minced",
  ],
  blueberries: [
    "1 cup fresh blueberries",
    "1 tbsp lemon juice",
    "1 tbsp honey",
    "1 tsp chia seeds",
  ],
  almonds: [
    "1 cup raw almonds",
    "1 tsp olive oil",
    "1/2 tsp sea salt",
    "1/2 tsp smoked paprika",
  ],
  "olive oil": [
    "1/4 cup extra virgin olive oil",
    "1 tbsp balsamic vinegar",
    "1 clove garlic, minced",
    "Salt and pepper to taste",
  ],
  yogurt: [
    "1 cup plain Greek yogurt",
    "1 tbsp honey",
    "1/2 tsp vanilla extract",
    "1/4 cup fresh berries",
  ],
};

const DiabeticsFriendlyFoods = () => {
  const [foodsWithRecipes, setFoodsWithRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      const fetchedFoodsWithRecipes = [];

      for (const food of diabeticFriendlyFoods) {
        const foodDetails = await fetchFoodDetails(food);
        if (foodDetails && foodDetails.length > 0) {
          const foodId = foodDetails[0].food.foodId;
          const recipeDetails = await fetchFoodRecipe(foodId);

          fetchedFoodsWithRecipes.push({
            food: foodDetails[0].food,
            recipe: recipeDetails,
            image: foodImages[food.toLowerCase()],
            ingredients: ingredientsMapping[food] || [], // Corrected here
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
        <img src="/public/spinner.gif" />
      </div>
    );
  }

  return (
    <div className="food-list">
      {foodsWithRecipes.map((item, index) => (
        <div
          key={index}
          className="food-item grid grid-cols-11 m-4 p-7 w-fit bg-[#ED8B00] rounded-md"
        >
          <h2 className="font-semibold text-2xl">{item.food.label}</h2>
          {item.image && (
            <img
              src={item.image}
              alt={item.food.label}
              style={{ maxWidth: "auto", maxHeight: "200px" }}
            />
          )}
          <div className="">
            <p className="relative left-[20rem]">Category: {item.food.category}</p>
            <p className=" relative left-[50rem] bottom-[2rem]">Calories: {item.food.nutrients.ENERC_KCAL} kcal</p>
            <h3 className="relative left-[80rem] bottom-[6rem]">Ingredients:</h3>
          </div>

          <ul className="relative left-[70rem]">
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

export default DiabeticsFriendlyFoods;
