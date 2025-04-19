import React, { useState } from 'react';

function Banner({ handleSearch }) {
   const [search, setSearch] = useState("");

   return (
      <div className="container mx-auto py-24">
         <img className='w-[900px] h-auto mx-auto py-11' src="/banner.png" alt="" />

         <h3 className='text-[58px] font-mono text-center'>Browse, Search, View, Buy</h3>
         <p className='text-[18px] text-center font-extralight p-3'>
            Best place to browse, search, view details and purchase of top flagship phones<br />
            of the current time - FlagshipFaceOff
         </p>

         <div className="text-center py-10">
            <form
               onSubmit={(e) => {
                  handleSearch(e, search);
                  setSearch("");
               }}
            >

               <div className="flex justify-center items-center gap-5">
                  <input
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     type="text"
                     className="w-1/2 rounded-xl py-3 border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                     placeholder="Search Phone by Name"
                  />
                  <button
                     type="submit"
                     className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl transition duration-200"
                  >
                     Search
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Banner;
