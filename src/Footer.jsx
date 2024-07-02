// import nourish from "./nourish.png";

// function Footer(){
//     return(
//         <div>
//             <div>
//                 <div className="relative left-[10rem]">
//                     <img className="w-[7rem] mt-[20px]" src={nourish} alt="Nourish" />
//                     <p className="relative top-7">
//                     NourishNook is a platform that <br />provides a wide variety of healthy <br />recipes for different 
//                     dietary needs, <br />including kid-friendly, adult gourmet, <br />and diabetic-friendly options.
//                     </p>
//                 </div>
//                 <div className="relative bottom-[9rem] left-[30rem]">
//                     <h3 className="font-bold">Company</h3>
//                     <ul className="mt-4">
//                         <li><a href="#">Home</a></li>
//                         <li><a href="">Explore</a></li>
//                         <li><a href="">Help</a></li>
//                         <li><a href="">Get Started</a></li>
//                     </ul>
//                 </div>
//                 <div className="relative bottom-[17.5rem] left-[50rem]">
//                     <h3 className="font-bold">Resources</h3>
//                     <ul className="mt-4">
//                         <li><a href="">Blog</a></li>
//                         <li><a href="">User Cases</a></li>
//                         <li><a href=""></a>Testimonials</li>
//                         <li><a href=""></a>Insight</li>
//                     </ul>
//                 </div>
//                 <div className="relative bottom-[25rem] left-[70rem]">
//                     <img className="w-[7rem]" src={nourish} alt="Nourish" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import nourish from "./nourish.png";

const Footer = () => {
  return (
    <footer className="bg-green-200 p-8 relative top-[10rem]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
            <img className="w-[7rem] mb-4" src={nourish} alt="Nourish" />  
            <p className="">
                NourishNook is a platform that <br />provides a wide variety of healthy <br />recipes for different 
                dietary needs, <br />including kid-friendly, adult gourmet, <br />and diabetic-friendly options.
            </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <ul className="list-none">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Explore</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Get Started</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Resources</h2>
          <ul className="list-none">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">User Cases</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
            <li><a href="#" className="hover:underline">Insights</a></li>
          </ul>
        </div>
        <div>
            <img className="w-[7rem] mb-4" src={nourish} alt="Nourish" />
            <p>
            A digital platform dedicated to promoting healthy eating habits 
            through curated recipes and nutritional guidance.
            </p>
        </div>
        <div className="flex justify-center mt-8 ml-[50rem]">
        <a href="https://www.facebook.com" className="mx-4">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com" className="mx-4">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.twitter.com" className="mx-4">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
