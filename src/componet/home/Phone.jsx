import PhoneItem from "./PhoneItem";

function Phone({ datas, handleLoadMore, isAllLoaded }) {
   return (
      <div className="container mx-auto py-20 px-4">
         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {datas.length > 0 ? (
               datas.map(item => <PhoneItem key={item.id} item={item} />)
            ) : (
               <p className="col-span-4 text-center text-red-500">No phones found!</p>
            )}
         </div>

         {!isAllLoaded && (
            <div className="flex justify-center mt-10">
               <button
                  onClick={handleLoadMore}
                  disabled={datas.length === 0}
                  className="py-3 px-6 bg-amber-600 disabled:bg-amber-400 text-white rounded-lg hover:bg-amber-700 transition"
               >
                  {datas.length === 0 ? "No Data" : "Load More"}
               </button>
            </div>
         )}
      </div>
   );
}

export default Phone;
