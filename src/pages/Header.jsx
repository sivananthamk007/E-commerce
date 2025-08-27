import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Products from "../components/Dashboard";

function Header() {
  const navigate = useNavigate();
  return (

    <div className="bg-indigo-300 py-3 text-center">
      <h1 className="font-semibold text-gray-900 text-lg">Tamil Skillhub</h1>
      <div className="flex md:gap-3 gap-3 justify-center md:my-2 my-4">
        <button onClick={() => navigate("/")} className="bg-green-700 text-white px-2 py-1 rounded text-sm cursor-pointer">
          Home
        </button>
        <input
          type="text"
          placeholder="search..."
          className="bg-white md:w-[355px] w-[250px] rounded ps-3"
        />
        <button onClick={() => navigate("/cart")} className="bg-green-700 text-white px-2 py-1 rounded text-sm hover:cursor-pointer">
          Cart
        </button>
      </div>
    </div>
  );
}
export default Header;
