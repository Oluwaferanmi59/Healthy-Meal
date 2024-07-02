// FoodList.js
// import FoodItem from "./FoodItems";

// const FoodList = ({ foods }) => (
//   <ul>
//     {foods?.map((item, index) => (
//       <FoodItem
//         key={index}
//         food={item.food}
//         recipe={item.recipe}
//         image={item.image}
//       />
//     ))}
//   </ul>
// );

// export default FoodList;

// FoodList.js
import FoodItem from "./FoodItems";

const FoodList = ({ foods }) => (
  <ul>
    {foods.map((item, index) => (
      <FoodItem
        key={index}
        food={item.food}
        recipe={item.recipe}
        image={item.image}
      />
    ))}
  </ul>
);

export default FoodList;
