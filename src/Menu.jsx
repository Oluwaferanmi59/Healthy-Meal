
// import Recipe from "./Recipe"
// function Menu({data}){
//     console.log(data)
//     return(
//         <div>
//             {
//                 (!data)?"Not Found":data.map(item=>{
//                     return(
//                         <div className="card grid gap-4 ml-[10rem] mt-[5rem]">
//                             <img className=" w-[13rem] h-[10rem] rounded-[15px]" src="https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg" alt="" />
//                             <h3>Spicy Arrabiata Penne</h3>
//                         </div>
//                     )
//                 })
//             }
            
//             <div className="container">
//                 <Recipe/>
//             </div>
//         </div>
//     )
// }

// export default Menu

// src/Menu.js

// function Menu({ data }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-[10rem] mt-[5rem]">
//       {!data || data.length === 0 ? (
//         'Not Found'
//       ) : (
//         data.map((item) => (
//           <div className="card" key={item.idMeal}>
//             <img className="w-[13rem] h-[10rem] rounded-[15px]" src={item.strMealThumb} alt={item.strMeal} />
//             <h3>{item.strMeal}</h3>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Menu;

// src/Menu.js
// import React from 'react';

// function Menu({ data }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 ml-[6rem] mt-[5rem]">
//       {!data || data.length === 0 ? (
//         'Not Found'
//       ) : (
//         data.map((item) => (
//           <div className="card" key={item.idMeal}>
//             <img className="w-[12rem] h-[10rem] rounded-[15px]" src={item.strMealThumb} alt={item.strMeal} />
//             <h3 className="text-center mt-2">{item.strMeal}</h3>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Menu;

// src/Menu.js
import React, { useState } from 'react';

function Menu({ data }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleMoreClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-[10rem] mt-[5rem]">
        {!data || data.length === 0 ? (
          'Not Found'
        ) : (
          data.map((item) => (
            <div className="card" key={item.uri}>
              <img className="w-full h-[10rem] rounded-[15px]" src={item.image} alt={item.label} />
              <h3 className="text-center mt-2">{item.label}</h3>
              <p className="text-center mt-2">Calories: {Math.round(item.calories)}</p>
              <button
                className="border rounded-md bg-blue-500 text-white w-full h-[2rem] text-sm mt-2"
                onClick={() => handleMoreClick(item)}
              >
                More
              </button>
            </div>
          ))
        )}
      </div>
      {selectedRecipe && (
        <div className="w-full mt-10 p-4 border rounded-lg bg-gray-100">
          <h3 className="text-center text-2xl mb-4">{selectedRecipe.label}</h3>
          <img className="w-full h-[10rem] rounded-[15px] mx-auto" src={selectedRecipe.image} alt={selectedRecipe.label} />
          <h4 className="mt-4">Ingredients:</h4>
          <ul className="list-disc list-inside">
            {selectedRecipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4 className="mt-4">How to Cook:</h4>
          <a href={selectedRecipe.url} target="_blank" rel="noopener noreferrer">
            Click here for cooking instructions
          </a>
        </div>
      )}
    </div>
  );
}

export default Menu;
