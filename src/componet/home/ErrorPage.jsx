import { Link } from "react-router-dom";


function ErrorPage() {
   return (
      <>
         
         <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center bg-white p-8 rounded-lg py-10 flex flex-col gap-5">
               <h3 className="text-4xl font-semibold text-red-600">404</h3>
               <p className="text-lg text-gray-700 mt-4">Sorry, the page youre looking for could not be found.</p>

                <Link to={-1}
                  className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"

               >
                  Back to Home
               </Link> 
            </div>
         </div>
         
      </>
   );
}

export default ErrorPage;