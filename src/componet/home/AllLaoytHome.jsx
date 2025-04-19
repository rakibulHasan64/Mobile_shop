// AllLaoytHome.jsx
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Banner from "./Banner";
import Phone from "./Phone";

const PAGE_SIZE = 4;

function AllLaoytHome() {
   const fullData = useLoaderData();
   const [displayed, setDisplayed] = useState(
      Array.isArray(fullData) ? fullData.slice(0, PAGE_SIZE) : []
   );
   const [searchActive, setSearchActive] = useState(false);

   const handleSearch = (e, text) => {
      e.preventDefault();
      const term = text.trim().toLowerCase();
      if (!term) {
         // reset to first page
         setDisplayed(fullData.slice(0, PAGE_SIZE));
         setSearchActive(false);
         return;
      }
      setSearchActive(true);
      const filtered = fullData.filter(
         (phone) =>
            phone.name.toLowerCase().includes(term) ||
            phone.brand.toLowerCase().includes(term)
      );
      setDisplayed(filtered);
   };

   const handleLoadMore = () => {
      const nextCount = displayed.length + PAGE_SIZE;
      setDisplayed(fullData.slice(0, nextCount));
   };

   const isAllLoaded = displayed.length >= fullData.length;

   return (
      <>
         <Banner handleSearch={handleSearch} />
         <Phone
            datas={displayed}
            handleLoadMore={handleLoadMore}
            isAllLoaded={isAllLoaded || searchActive}
         />
      </>
   );
}

export default AllLaoytHome;
