import { FaHeart, FaShoppingCart} from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, addToCart, getCart } from "./ulilites";
import { useContext } from "react";
import { CartContext } from "./provider/Contexts";

function DetlisPage() {
   const { id } = useParams();
   const data = useLoaderData();
   const { setCart } = useContext(CartContext);
   const dataDetls = data.find((dat) => dat.id === parseInt(id));


   if (!dataDetls) {
      return (
         <div className="text-center py-20 text-red-600 text-xl">
            Data not found for this ID.
         </div>
      );
   };

   const handleAdd = () => {
      addToCart(dataDetls)
      setCart(getCart())
   }




   const handleFavorite=() => {
      addFavorite(dataDetls)
   }



   const { brand, name, model, image, description, camera_info, storage, price } = dataDetls;

   return (
      <div className="container mx-auto py-14 px-4">
         <div className="flex flex-col gap-10 items-center justify-center">
            <img src={image} alt={name} className="w-[777px] rounded-2xl shadow-lg" />

            <div>
               <h2 className="text-3xl font-bold mb-4">{brand} - {model}</h2>
               <p className="text-gray-700 mb-4">{description}</p>

               <div className="mb-4">
                  <strong>Camera:</strong> {camera_info}
               </div>

               <div className="mb-4">
                  <strong>Storage Options:</strong>
                  <ul className="list-disc list-inside text-gray-800">
                     {storage.map((option, i) => (
                        <li key={i}>{option}</li>
                     ))}
                  </ul>
               </div>

               <div className="mb-6">
                  <strong>Price:</strong>
                  <ul className="text-green-700">
                     {Object.entries(price).map(([key, value]) => (
                        <li key={key}>
                           {key}: {value}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="flex gap-4 mt-4">
                  
                  <button onClick={handleFavorite} className="flex items-center gap-2 text-red-500 hover:text-red-600">
                     <FaHeart /> Favorite
                  </button>


                  <button onClick={handleAdd} className="flex items-center gap-2 text-green-600 hover:text-green-700">
                     <FaShoppingCart /> Add to Cart
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DetlisPage;
