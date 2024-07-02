// useFetchFoodDetails.js
// import { useState, useEffect } from "react";

// const app_id = "c66f301e";
// const app_key = "6a7e249154113d1ef4070198b9e64314";

// const fetchFoodDetails = async (query) => {
//   const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${encodeURIComponent(
//     query
//   )}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.parsed;
//   } catch (error) {
//     console.error("Error fetching food data: ", error);
//   }
// };

// export const useFetchFoodDetails = (query) => {
//   const [foodDetails, setFoodDetails] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const details = await fetchFoodDetails(query);
//       setFoodDetails(details);
//     };

//     fetchData();
//   }, [query]);

//   return { foodDetails };
// };

// const app_id = "c66f301e";
// const app_key = "6a7e249154113d1ef4070198b9e64314";

// export const fetchFoodDetails = async (query) => {
//   const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${encodeURIComponent(
//     query
//   )}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.parsed;
//   } catch (error) {
//     console.error("Error fetching food data: ", error);
//   }
// };

// useFetchFoodDetails.jsx

// const app_id = "c66f301e";
// const app_key = "6a7e249154113d1ef4070198b9e64314";

const app_id = "e0101d90";
const app_key = "ed82e8be9255f442be1f239342d39849";

export const fetchFoodDetails = async (query) => {
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        "Unauthorized app_id or app_key. Please check your credentials."
      );
    }
    const data = await response.json();
    console.log(data);
    return data.parsed;
  } catch (error) {
    console.error("Error fetching food data: ", error);
  }
};

export const fetchFoodRecipe = async (foodId) => {
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
