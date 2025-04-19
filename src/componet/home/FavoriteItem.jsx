import { useEffect, useState } from "react";
import { getFavorite, removeFavorite } from "../ulilites";
import Favrite from "./Favrite";


function FavoriteItem() {

   const [data, setData] = useState([]);


   useEffect(() => {
      const saverd = getFavorite();

      setData(saverd)
      
   }, []);


   const handleDelte = (id) => {
      removeFavorite(id);
      setData(getFavorite())
   }
   return (
      <>

         <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
               {data.length > 0 ? (
                  data.map(item => <Favrite key={item.id} item={item} handleDelte={handleDelte} />)
               ) : (
                  <p className="col-span-4 text-center text-red-500">No phones found!</p>
               )}
            </div>
         </div>
         
      </>
   );
}

export default FavoriteItem;