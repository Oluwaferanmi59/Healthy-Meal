import { useState } from "react";
// import Hero from "../Hero";
import Navbar from "../Navbar";
import KidFriendlyFoods from "./KidFriendlyFoods";
import AdultFriendlyFoods from "./AdultFriendlyFoods";
import DiabeticsFriendlyFoods from "./DiabeticsFriendlyFoods";
import DisplayAll from "./DisplayAll";
import Footer from "../Footer"

function Help() {
  const [showAll, setShowAll] = useState(false);
  const [showKids, setShowKids] = useState(false);
  const [showAdult, setShowAdult] = useState(false);
  const [showDiabetics, setShowDiabetics] = useState(false);

  const handleFetchKid = () => {
    setShowKids(true);
    setShowAdult(false);
    setShowDiabetics(false);
  };
  const handleFetchAdult = () => {
    setShowAdult(true);
    setShowKids(false);
    setShowDiabetics(false);
  };
  const handleFetchDiabetics = () => {
    setShowDiabetics(true);
    setShowKids(false);
    setShowAdult(false);
  };
  const handleFetchAll = () => {
    setShowAll(true);
    setShowDiabetics(false);
    setShowKids(false);
    setShowAdult(false);
  };
  return (
    <div>
      <div>
      <Navbar />
      {/* <div>
        <h2 className="text-center font-bold text-3xl relative top-9">Nourish Nook</h2>
        <p className="container text-center font-medium text-xl relative top-[5rem] left-[10rem]">
        At NourishNook, we are dedicated to providing healthy and delicious food 
        options <br />tailored to meet the diverse dietary needs of kids, adults, and diabetics. 
        Our mission <br />is to make nutritious eating easy and enjoyable for everyone.
        </p>
      </div>
      <div className=" container relative top-[10rem] left-[15rem]">
      <div >
        <h2 className="font-bold text-2xl text-center">How NourishNook Helps Kids</h2>
        <h3 className="font-semibold text-xl">Balanced Nutrition:</h3>
        <p className="text-xl text-center">
        We offer a variety of kid-friendly foods that are both nutritious and delicious. 
        Our meals are designed to meet the <br />nutritional needs of growing children, ensuring they 
        get the right balance of vitamins, minerals, and macronutrients.
        </p>
        <h3 className="font-semibold text-xl">Fun and Engaging</h3>
        <p className="text-xl text-center">
        Our recipes are created with kids in mind, making healthy eating fun and engaging. 
        From colorful fruit <br />salads to creative veggie snacks, we make it easy for kids 
        to love eating healthy.
        </p>
        <h3 className="font-semibold text-xl">Educational Content:</h3>
        <p className="text-xl text-center">
        We provide resources and tips for parents to help educate their children <br />about 
        the importance of nutrition and healthy eating habits.
        </p>
      </div>
      <div className="relative top-[3rem]">
        <h2 className="font-bold text-2xl text-center">How NourishNook Helps Adults</h2>
        <h3 className="font-semibold text-xl">Wide Variety of Choices:</h3>
        <p className="text-xl text-center">
        For adults, we offer a diverse range of meal options that cater to different tastes 
        and dietary preferences. Whether you’re <br />looking for high-protein meals, low-carb 
        options, or plant-based dishes, we have something for everyone.
        </p>
        <h3 className="font-semibold text-xl">Convenient and Time-Saving:</h3>
        <p className="text-xl text-center">
          Our recipes are designed to be quick and easy to prepare, perfect for busy adults 
          <br />who want to eat healthy without spending hours in the kitchen.
        </p>
        <h3 className="font-semibold text-xl">Nutritional Information:</h3>
        <p className="text-xl text-center">
        Each recipe comes with detailed nutritional information, helping you make <br />informed 
        choices about your diet and manage your health effectively.
        </p>
      </div>
      <div className="relative top-[5rem]">
        <h2 className="font-bold text-2xl text-center">How NourishNook Helps Diabetics</h2>
        <h3 className="font-semibold text-xl">Diabetic-Friendly Recipes:</h3>
        <p className="text-xl text-center">
        We provide a variety of recipes specifically designed for individuals with diabetes. These 
        meals are low <br />in sugar and refined carbohydrates, helping to manage blood sugar levels effectively.
        </p>
        <h3 className="font-semibold text-xl">Balanced and Nutritious:</h3>
        <p className="text-xl text-center">
        Our diabetic-friendly meals are not only low in sugar but also rich in fiber, healthy fats, 
        <br />and essential nutrients, ensuring a balanced diet that supports overall health.
        </p>
        <h3 className="font-semibold text-xl">Expert Guidance:</h3>
        <p className="text-xl text-center">
        We offer expert tips and advice on managing diabetes through diet, <br />making it easier 
        for you to stay on track with your health goals.
        </p>
      </div>
      </div> */}
      <div className="flex gap-[5rem] relative left-[28rem] top-[0rem]">
        <div>
          <button
            className="border rounded-md bg-[#F6784C] text-white w-[11rem] h-[4rem] text-sm "
            onClick={handleFetchAll}
          >
            All Meals
          </button>
        </div>
        <div>
          <button
            onClick={handleFetchKid}
            className="border rounded-md bg-[#C4D600] text-white w-[11rem] h-[4rem] text-sm"
          >
            Meals for Kids
          </button>
        </div>
        <div>
          <button
            className="border rounded-md bg-[#EAAA00] text-white w-[11rem] h-[4rem] text-sm"
            onClick={handleFetchAdult}
          >
            Meals for Adults
          </button>
        </div>
        <div>
          <button
            className="border rounded-md bg-[#ED8B00] text-white w-[11rem] h-[4rem] text-sm"
            onClick={handleFetchDiabetics}
          >
            Meals for Diabetics
          </button>
        </div>
      </div>
      {showKids && <KidFriendlyFoods />}
      {showAdult && <AdultFriendlyFoods />}
      {showDiabetics && <DiabeticsFriendlyFoods />}
      {showAll && <DisplayAll />}{" "}
    </div>
    <Footer/> 
    </div>
  );
}

export default Help;
