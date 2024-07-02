
// import Slider from "react-slick";
// import food1 from './food1.jpg'
// import food2 from './food2.jpg'
// // import food3 from './food3.jpg'
// import food4 from './food4.jpg'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Hero (){
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       };
//     return(
//         <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//             <img className=' container w-full h-[30rem] mx-[8rem] rounded-[40px]' src={food1} alt="" />
//         </div>
//         <div>
//             <img className=' container w-full h-[30rem] mx-[8rem] rounded-[40px]' src={food2} alt="" />
//         </div>
//         {/* <div>
//             <img className=' container w-full h-[30rem] mx-[8rem] rounded-[40px]' src={food3} alt="" />
//         </div> */}
//         <div>
//             <img className=' container w-full h-[30rem] mx-[8rem] rounded-[40px]' src={food4} alt="" />
//         </div>
//       </Slider>
//     </div>
       

//     )
// }

// export default Hero

// src/Hero.js

import Slider from 'react-slick';
import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="container w-full h-[35rem] mx-[8rem] rounded-[40px] object-cover" src={food1} alt="Food 1" />
        </div>
        <div>
          <img className="container w-full h-[30rem] mx-[8rem] rounded-[40px] object-cover" src={food2} alt="Food 2" />
        </div>
        <div>
          <img className="container w-full h-[30rem] mx-[8rem] rounded-[40px] object-cover" src={food3} alt="Food 4" />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
