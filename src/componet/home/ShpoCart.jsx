import { useContext } from "react";
import { CartContext } from "../provider/Contexts";
import { removeCart } from "../ulilites";



function ShopCart() {
   const { cart } = useContext(CartContext);

   

   const handleDelet = (id) => {
      removeCart(id);
      
   }
   



   return (
      <div className="container mx-auto py-24 px-4">

         {cart?.map(item => {
            

            return (
               <div key={item.id} className="bg-gray-100 p-5 rounded-lg shadow-md mb-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center text-center">

                     {/* 🔸 Product Info */}
                     <div className="flex items-center gap-4 justify-center">
                         <img className="w-[55px] h-[55px] object-cover" src={item.image} alt='' /> 
                        <div>
                           <h3 className="text-lg font-semibold">{item.brand}</h3>
                           <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                     </div>

                     {/* 🔸 Price */}
                     <div>
                        <h3 className="text-lg font-semibold">{item.storage}</h3>
                     </div>

                     {/* 🔸 Quantity */}
                     <div className="flex items-center justify-center gap-3">
                        <button className="bg-gray-300 px-3 py-1 rounded-md text-lg font-bold">-</button>
                        <span className="text-lg font-semibold">4</span>
                        <button className="bg-gray-300 px-3 py-1 rounded-md text-lg font-bold">+</button>
                     </div>

                     {/* 🔸 Total Price per Item */}
                     <div className="flex items-center gap-5 ">
                        <div>
                           <h3 className="text-lg font-semibold">
                              $345
                           </h3>
                        </div>

                        <div>
                           <button onClick={()=> handleDelet(item.id)} className="text-lg font-semibold">
                              x
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            );
         })}

         {/* ✅ Bottom Section */}
         <div className="flex justify-between mt-5 items-center">
            <button className="py-3 px-5 border rounded-lg hover:bg-red-600 text-black hover:text-white">
               Return To Shop
            </button>

            <div className="text-lg font-semibold">
               Total: {cart.length === 0 ? "0" : "$456"} 
            </div>

            <button className="py-3 px-5 border rounded-lg hover:bg-red-600 text-black hover:text-white">
               Update Cart
            </button>
         </div>
      </div>
   );
}

export default ShopCart;





// brand
// :
// "Honor"
// camera_info
// :
// "Great main camera; ultrawide and telephoto are hit-or-miss."
// description
// :
// "Thinnest foldable with bright displays, durability, and premium experience."
// id
// :
// 3
// image
// :
// "https://fdn.gsmarena.com/imgroot/reviews/24/honor-magic-v3/-728x314/gsmarena_000.jpg"
// model
// :
// "Magic V3"
// name
// :
// "Magic V3"
// price
// :
// { 256GB: '$1,630', 512GB: '$1,590' }
// storage
// :
// (2)['256GB 12GB RAM', '512GB 12GB RAM']