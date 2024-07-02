// import nourish from './nourish.png';
// import { CiSearch } from "react-icons/ci";

// function Navbar (){
//     return(
//         <div className='flex'>
//             <div className='ml-[7rem]'>
//                 <img className='w-[10rem] mt-[20px]' src={nourish} alt="" />
//             </div>
//             <div className=''>
//                 <input className='bg-gray-100 ml-[9rem] mt-[20px] border rounded px-10 py-1 text-sm' type="text" placeholder='Search for recipe' />
//                 <div className='border rounded  bg-green-500 w-[25px] h-[30px] items-center relative left-[24rem] bottom-[30px] text-white'>
//                 <CiSearch className='text-center relative top-[5px] left-[5px]'/>
//                 </div>
//             </div>
//             <div className='flex'>
//                 <ul className='flex gap-6 relative left-[25rem] top-[20px]'>
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">Explore</a></li>
//                     <li><a href="#">Help</a></li>
//                 </ul>
//                 <button><a className='relative left-[27rem] bottom-[7px] border rounded-full bg-green-500 text-white px-6 py-2' href="#">Get Started</a></button>
//             </div>
//         </div>
//     )
// }

// export default Navbar

// src/Navbar.js

import { Link } from "react-router-dom";
import nourish from "./nourish.png";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="flex ">
      <div className="ml-[7rem]">
        <Link to="/">
          <img className="w-[10rem] mt-[20px]" src={nourish} alt="Nourish" />
        </Link>
      </div>
      <div>
        <input
          className="bg-gray-100 ml-[9rem] mt-[20px] border rounded px-10 py-1 text-sm"
          type="text"
          placeholder="Search for recipe"
        />
        <div className="border rounded bg-green-500 w-[25px] h-[30px] items-center relative left-[24rem] bottom-[30px] text-white">
          <CiSearch className="text-center relative top-[5px] left-[5px]" />
        </div>
      </div>
      <div className="flex">
        <ul className="flex gap-6 relative left-[25rem] top-[20px]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          {/* <li> */}
          <Link to="help"> Help</Link>
          {/* </li> */}
        </ul>
        <button>
          <a
            className="relative left-[27rem] bottom-[7px] border rounded-full bg-green-500 text-white px-6 py-2"
            href="#"
          >
            Get Started
          </a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
