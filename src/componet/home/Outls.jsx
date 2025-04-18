import { Outlet } from "react-router-dom";
import Navbar from "./Navaer";


function Outls() {
   return (
      <>
         
         <Navbar />
         <Outlet />
         
      </>
   );
}

export default Outls;