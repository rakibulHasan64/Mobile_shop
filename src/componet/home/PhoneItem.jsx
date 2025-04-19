import { Link } from "react-router-dom";

function PhoneItem({ item }) {
  const {  name, model, image, description,  camera_info,id } = item;

  return (
    <div className="max-w-sm rounded-2xl shadow-lg border p-4 bg-white">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-xl mb-4" />

      <div className="text-xl font-semibold mb-1">{name} {model}</div>
      <div className="text-gray-600 mb-2">{description}</div>

      <div className="mb-2">
        <span className="font-medium">Camera:</span> {camera_info}
      </div>

      

      
        <Link to={`/Detlis/${id}`}>
           
           <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
              viws   Cart
           </button>
        
        </Link>
    </div>
  );
}

export default PhoneItem;
