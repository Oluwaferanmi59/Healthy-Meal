// function Button(){
//     return(
//         <div className="flex gap-[5rem] mt-8 ml-[10rem]">
//             <div>
//                 <button className="border rounded-md bg-[#F6784C] text-white w-[11rem] h-[4rem] text-sm">Recipes & Menu</button>
//             </div>
//             <div>
//                 <button className="border rounded-md bg-[#C4D600] text-white w-[11rem] h-[4rem] text-sm">Recipes for Kids</button>
//             </div>
//             <div>
//                 <button className="border rounded-md bg-[#EAAA00] text-white w-[11rem] h-[4rem] text-sm">Recipes for Adult</button>
//             </div>
//             <div>
//                 <button className="border rounded-md bg-[#ED8B00] text-white w-[11rem] h-[4rem] text-sm">Recipes for Diabetics</button>
//             </div>
//             <div>
//                 <button className="border rounded-md bg-[#84BD00] text-white w-[11rem] h-[4rem] text-sm">Meal Plan</button>
//             </div>
//         </div>
//     )
// }

import KidFriendlyFoods from "./components/KidFriendlyFoods";

// export default Button

// src/Button.js

// function Button() {
//   return (
//     <div className="flex gap-[5rem] mt-8 ml-[10rem]">
//       <div>
//         <button className="border rounded-md bg-[#F6784C] text-white w-[11rem] h-[4rem] text-sm">Recipes & Menu</button>
//       </div>
//       <div>
//         <button className="border rounded-md bg-[#C4D600] text-white w-[11rem] h-[4rem] text-sm">Recipes for Kids</button>
//       </div>
//       <div>
//         <button className="border rounded-md bg-[#EAAA00] text-white w-[11rem] h-[4rem] text-sm">Recipes for Adults</button>
//       </div>
//       <div>
//         <button className="border rounded-md bg-[#ED8B00] text-white w-[11rem] h-[4rem] text-sm">Recipes for Diabetics</button>
//       </div>
//       <div>
//         <button className="border rounded-md bg-[#84BD00] text-white w-[11rem] h-[4rem] text-sm">Meal Plan</button>
//       </div>
//     </div>
//   );
// }

// export default Button;

// src/Button.js

function Button({ filterItems }) {
  function handleKids() {
    <KidFriendlyFoods />;
    console.log("kids");
  }

  return (
    <div className="flex gap-[5rem] mt-8 ml-[10rem]">
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
          className="border rounded-md bg-[#C4D600] text-white w-[11rem] h-[4rem] text-sm"
          onClick={handleKids}
        >
          Recipes for Kids
        </button>
      </div>
      <div>
        <button
          className="border rounded-md bg-[#EAAA00] text-white w-[11rem] h-[4rem] text-sm"
          onClick={() => filterItems("High-Protein")}
        >
          Recipes for Adults
        </button>
      </div>
      <div>
        <button
          className="border rounded-md bg-[#ED8B00] text-white w-[11rem] h-[4rem] text-sm"
          onClick={() => filterItems("Low-Sugar")}
        >
          Recipes for Diabetics
        </button>
      </div>
    </div>
  );
}

export default Button;
