import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Products from "../components/Dashboard";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-slate-500 py-3 text-center">
        <h1 className="font-semibold text-gray-900 text-lg">Tamil Skillhub</h1>
        <div className="flex gap-3 justify-center my-2">
          <button onClick={() => navigate("/")} className="bg-green-700 text-white px-2 py-1 rounded text-sm cursor-pointer">
            Home
          </button>
          <input
            type="text"
            placeholder="search..."
            className="bg-white w-[350px] rounded ps-3"
          />
          <button onClick={() => navigate("/cart")} className="bg-green-700 text-white px-2 py-1 rounded text-sm hover:cursor-pointer">
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
