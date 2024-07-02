import KidFriendlyFoods from "./KidFriendlyFoods";
import AdultFriendlyFoods from "./AdultFriendlyFoods";
import DiabeticsFriendlyFoods from "./DiabeticsFriendlyFoods";
function DisplayAll() {
  // import React from "react";

  return (
    <div>
      <KidFriendlyFoods />
      <AdultFriendlyFoods />
      <DiabeticsFriendlyFoods />
    </div>
  );
}

export default DisplayAll;
