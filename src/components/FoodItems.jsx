// FoodItem.js
// const FoodItem = ({ food, recipe, image }) => (
//   <li>
//     <h2>{food.label}</h2>
//     {image && (
//       <img
//         src={image}
//         alt={food.label}
//         style={{ maxWidth: "200px", maxHeight: "200px" }}
//       />
//     )}
//     <p>Category: {food.category}</p>
//     <p>Calories: {food.nutrients.ENERC_KCAL} kcal</p>
//     <h3>Recipe:</h3>
//     <ul>
//       {recipe?.ingredients?.map((ingredient, idx) => (
//         <li key={idx}>{ingredient.text}</li>
//       ))}
//     </ul>
//   </li>
// );

// export default FoodItem;

// FoodItem.js
const FoodItem = ({ food, recipe, image }) => (
  <li>
    <h2>{food.label}</h2>
    {image && (
      <img
        src={image}
        alt={food.label}
        style={{ maxWidth: "200px", maxHeight: "200px" }}
      />
    )}
    <p>Category: {food.category}</p>
    <p>Calories: {food.nutrients.ENERC_KCAL} kcal</p>
    <h3>Recipe:</h3>
    <ul>
      {recipe?.ingredients?.map((ingredient, idx) => (
        <li key={idx}>{ingredient.text}</li>
      ))}
    </ul>
  </li>
);

export default FoodItem;
