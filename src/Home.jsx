// import { useEffect } from "react"
// import { useState } from "react"
// import Navbar from "./Navbar"
// import Hero from "./Hero"
// import Button from "./Button"
// import Menu from "./Menu"
// import Recipe from "./Recipe"

// function Home (){
//     const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a")
//     const [item,setItem]=useState()
//     const [show.setShow]=useState(false)
//     useEffect(()=>{
//         fetch(url).then(res=>res.json()).then(data=>{
//             console.log(data.meals)
//             setItem(data.meals)
//             setShow(true)
//         })
//     })
//     return(
//         <div className="w-full flex flex-col">
//             <Navbar/>
//             <Hero/>
//             <Button/>
//             {
//                 show ? <Menu data={item}/>:"Not found"
//             }
//             <Recipe/>
//         </div>
//     )
// }

// export default Home

// src/Home.js
// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import Hero from './Hero';
// import Button from './Button';
// import Menu from './Menu';
// import { fetchAllRecipes } from './api';

// function Home() {
//   const [items, setItems] = useState([]);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const getRecipes = async () => {
//       const results = await fetchAllRecipes();
//       setItems(results);
//       setShow(true);
//     };
//     getRecipes();
//   }, []);

//   return (
//     <div className="w-full flex flex-col">
//       <Navbar />
//       <Hero />
//       <Button />
//       {show ? <Menu data={items} /> : 'Not found'}
//     </div>
//   );
// }

// export default Home;

// src/Home.js
// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import Hero from './Hero';
// import Button from './Button';
// import Menu from './Menu';
// import { fetchAllRecipes } from './api';

// function Home() {
//   const [items, setItems] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const getRecipes = async () => {
//       const results = await fetchAllRecipes();
//       setItems(results);
//       setFilteredItems(results);  // Initially show all items
//       setShow(true);
//     };
//     getRecipes();
//   }, []);

//   const filterItems = (category) => {
//     if (category === 'all') {
//       setFilteredItems(items);
//     } else {
//       setFilteredItems(items.filter(item => item.category === category));
//     }
//   };

//   return (
//     <div className="w-full flex flex-col">
//       <Navbar />
//       <Hero />
//       <Button filterItems={filterItems} />
//       {show ? <Menu data={filteredItems} /> : 'Not found'}
//     </div>
//   );
// }

// export default Home;

/// src/Home.js
// import React, { useState, useEffect } from "react";

//////////////////////////////////////////////
// import Navbar from "./Navbar";
// import Hero from "./Hero";
// import { useState, useEffect } from "react";
// import { useFetchFoodDetails } from "./hooks/useFetchFoodDetails";
// import { useFetchFoodRecipe } from "./hooks/useFetchFoodRecipe";
// import FoodList from "./components/FoodList";
// // import Button from "./Button";
// // import Menu from "./Menu";
// // import { fetchRecipes } from './api';
// // import { App } from "./api";

// function Home() {
//   // const [items, setItems] = useState([]);
//   // const [filteredItems, setFilteredItems] = useState([]);
//   // const [show, setShow] = useState(false);

//   // useEffect(() => {
//   //   const getRecipes = async () => {
//   //     // const results = await fetchRecipes();
//   //     const results = await App();
//   //     setItems(results);
//   //     setFilteredItems(results); // Initially show all items
//   //     setShow(true);
//   //   };
//   //   getRecipes();
//   // }, []);

//   // const filterItems = (category) => {
//   //   if (category === "all") {
//   //     setFilteredItems(items);
//   //   } else {
//   //     setFilteredItems(
//   //       items.filter((item) => item.healthLabels.includes(category))
//   //     );
//   //   }
//   // };

//   const kidFriendlyFoods = [
//     "apple",
//     "banana",
//     "chicken nuggets",
//     "macaroni and cheese",
//     "carrot sticks",
//     "yogurt",
//     "peanut butter sandwich",
//     "oatmeal",
//     "cheese sticks",
//     "pancakes",
//   ];

//   const foodImages = {
//     apple:
//       "https://upload.wikimedia.org/wikipedia/commons/0/07/Honeycrisp-Apple.jpg",
//     banana: "https://example.com/banana.jpg",
//     "chicken nuggets": "https://example.com/chicken-nuggets.jpg",
//     "macaroni and cheese": "https://example.com/macaroni-and-cheese.jpg",
//     "carrot sticks": "https://example.com/carrot-sticks.jpg",
//     yogurt: "https://example.com/yogurt.jpg",
//     "peanut butter sandwich": "https://example.com/peanut-butter-sandwich.jpg",
//     oatmeal: "https://example.com/oatmeal.jpg",
//     "cheese sticks": "https://example.com/cheese-sticks.jpg",
//     pancakes: "https://example.com/pancakes.jpg",
//   };
//   const [kidFriendlyFoodsWithRecipes, setKidFriendlyFoodsWithRecipes] =
//     useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchKidFriendlyFoods = async () => {
//       const foodsWithRecipes = [];

//       for (const food of kidFriendlyFoods) {
//         const foodDetails = useFetchFoodDetails(food);
//         if (foodDetails && foodDetails.length > 0) {
//           const foodId = foodDetails[0].food.foodId;
//           const recipeDetails = useFetchFoodRecipe(foodId);

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

//   return (
//     <div className="w-full flex flex-col">
//       <Navbar />
//       <Hero />
//       <h1>Kid-Friendly Foods with Recipes</h1>
//       {loading ? (
//         "Loading..."
//       ) : (
//         <FoodList foods={kidFriendlyFoodsWithRecipes} />
//       )}
//       {/* <Button filterItems={filterItems} />
//       {show ? <Menu data={filteredItems} /> : "Not found"} */}
//     </div>
//   );
// }

// export default Home;
/////////////////////////////////////////////////

// import Navbar from "./Navbar";
// import Hero from "./Hero";
// import { useState, useEffect } from "react";
// import FoodList from "./components/FoodList";
// import { fetchFoodDetails } from "./hooks/useFetchFoodDetails.jsx";
// import { fetchFoodRecipe } from "./hooks/useFetchFoodRecipe.jsx";
// import Button from "./Button.jsx";
// import Menu from "./Menu.jsx";
// function Home() {
//   const kidFriendlyFoods = [
//     "apple",
//     "banana",
//     "chicken nuggets",
//     "macaroni and cheese",
//     "carrot sticks",
//     "yogurt",
//     "peanut butter sandwich",
//     "oatmeal",
//     "cheese sticks",
//     "pancakes",
//   ];

//   const foodImages = {
//     apple:
//       "https://upload.wikimedia.org/wikipedia/commons/0/07/Honeycrisp-Apple.jpg",
//     banana: "https://example.com/banana.jpg",
//     "chicken nuggets": "https://example.com/chicken-nuggets.jpg",
//     "macaroni and cheese": "https://example.com/macaroni-and-cheese.jpg",
//     "carrot sticks": "https://example.com/carrot-sticks.jpg",
//     yogurt: "https://example.com/yogurt.jpg",
//     "peanut butter sandwich": "https://example.com/peanut-butter-sandwich.jpg",
//     oatmeal: "https://example.com/oatmeal.jpg",
//     "cheese sticks": "https://example.com/cheese-sticks.jpg",
//     pancakes: "https://example.com/pancakes.jpg",
//   };

//   const [kidFriendlyFoodsWithRecipes, setKidFriendlyFoodsWithRecipes] =
//     useState([]);
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

//   return (
//     <div className="w-full flex flex-col">
//       <Navbar />
//       <Hero />
//       <h1>Kid-Friendly Foods with Recipes</h1>
//       <FoodList foods={kidFriendlyFoodsWithRecipes} />

//       {/* <Button filterItems={filterItems} /> */}
//       {/* {show ? <Menu data={filteredItems} /> : "Not found"} */}
//       <Button />
//       {/* <Menu /> */}
//     </div>
//   );
// }

// export default Home;

// import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Add from "./Add.jsx"
import Footer from "./Footer.jsx";
// import FetchButton from "./components/FetchButton.jsx";
// import KidFriendlyFoods from "./components/KidFriendlyFoods.jsx";
// import Button from "./Button.jsx";
// import KidFriendlyFoods from "./components/KidFriendlyFoods.jsx";
// import AdultFriendlyFoods from "./components/AdultFriendlyFoods.jsx";
// import DiabeticsFriendlyFoods from "./components/DiabeticsFriendlyFoods.jsx";
// import DiabeticsFriendlyFoods from "./components/DiabeticFriendlyFoods.jsx

function Home() {
  // const [showKids, setShowKids] = useState(false);
  // const [showAdult, setShowAdult] = useState(false);
  // const [showDiabetics, setShowDiabetics] = useState(false);

  // const handleFetchKid = () => {
  //   setShowKids(true);
  //   setShowAdult(false);
  //   setShowDiabetics(false);
  // };
  // const handleFetchAdult = () => {
  //   setShowAdult(true);
  //   setShowKids(false);
  //   setShowDiabetics(false);
  // };
  // const handleFetchDiabetics = () => {
  //   setShowDiabetics(true);
  //   setShowKids(false);
  //   setShowAdult(false);
  // };

  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Hero />
      <Add/>
      <Footer/>

      {/* <Button /> */}
      {/* <h1>Kid-Friendly Foods with Recipes</h1>
      {!showFoods && <FetchButton onClick={handleFetchClick} />}
      {showFoods && <KidFriendlyFoods />} */}

      {/* <div className="flex gap-[5rem] mt-8 ml-[10rem]">
        <div>
          <button
            className="border rounded-md bg-[#F6784C] text-white w-[11rem] h-[4rem] text-sm"
            onClick={() => filterItems("all")}
          >
            All Recipes
          </button>
        </div>
        <div>
          <button
            onClick={handleFetchKid}
            className="border rounded-md bg-[#C4D600] text-white w-[11rem] h-[4rem] text-sm"
          >
            Recipes for Kids
          </button>
        </div>
        <div>
          <button
            className="border rounded-md bg-[#EAAA00] text-white w-[11rem] h-[4rem] text-sm"
            onClick={handleFetchAdult}
          >
            Recipes for Adults
          </button>
        </div>
        <div>
          <button
            className="border rounded-md bg-[#ED8B00] text-white w-[11rem] h-[4rem] text-sm"
            onClick={handleFetchDiabetics}
          >
            Recipes for Diabetics
          </button>
        </div>
      </div>

      {showKids && <KidFriendlyFoods />}
      {showAdult && <AdultFriendlyFoods />}
      {showDiabetics && <DiabeticsFriendlyFoods />} */}
    </div>
  );
}

export default Home;
