import { useState } from "react";
import { AiFillShopping, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {

   const [togle, setTogle] = useState(false);
   

   const handlclick=() => {
    

      setTogle((to) => !to);


   }

   return (
      <nav className="container mx-auto p-3 text-black  py-6 flex justify-between items-center">
         <h1 className="text-xl font-bold">FlagshipFaceOff</h1>
         <div className="hidden md:block">
            <ul className="flex flex-row space-x-6 text-xl ">
               <li>
                  <Link to="/" className="hover:text-gray-300">
                     Home
                  </Link>
               </li>
               <li>
                  <Link to="/about" className="hover:text-gray-300">
                     About
                  </Link>
               </li>
               <li>
                  <Link to="/contact" className="hover:text-gray-300">
                     Contact
                  </Link>
               </li>
            </ul>
         </div>
         {
            togle && (
               <>
                  
                  <div className={`bg-black/95 text-white w-60 h-screen fixed top-0 left-0 z-50 transition-transform duration-300 ${togle ? 'translate-x-0' : '-translate-x-full '}`}>
                     <ul className="flex flex-col p-7 space-x-6 text-xl hover:text-amber-300">
                        <li>
                           <Link to="/" className="hover:text-gray-300">
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link to="/about" className="hover:text-gray-300">
                              About
                           </Link>
                        </li>
                        <li>
                           <Link to="/contact" className="hover:text-gray-300">
                              Contact
                           </Link>
                        </li>
                     </ul>

                     <div className=" px-7 flex items-center justify-start gap-4 text-2xl">
                        <button><AiFillShopping /></button>
                        <button><MdOutlineFavorite /></button>
                     </div>

                  </div>

               </>
            )
            
            
         }

         <div className="hidden md:block">
            <div className=" flex items-center justify-center gap-4 text-2xl">
               <button><AiFillShopping /></button>
               <button><MdOutlineFavorite /></button>
            </div>
         </div>

         <AiOutlineMenu className="block md:hidden" onClick={handlclick} size={28} />
      </nav>
   );
}

export default Navbar;
