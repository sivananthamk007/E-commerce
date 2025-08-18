import { useNavigate } from "react-router-dom";
import product_datas from "../datas/product_datas";

function Product_list({ product }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => {
      navigate(`/product/${product.id}`);
    }}
      className="px-5 py-3 border-1 rounded-lg border-gray-500"
    >
      <div id={product.id} className="text-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-35 w-40 rounded-xl"
        />

        <h1 className="text-gray-800 font-semibold">{product.name}</h1>
        <div className="text-sm flex flex-col gap-1">
          <h1>${product.price} </h1>
          <h1>Discount:{product.discountPercentage}</h1>
          <h1>Rating:{product.rating}</h1>
          <div className="mt-2">
            {product.stock > 0 ? (
              <button className="bg-green-600 rounded text-white px-2 py-1 ">
                available
              </button>
            ) : (
              <button
                className="bg-red-600 rounded text-white hover:text-black px-2 py-1 
                                hover:bg-transparent border border-transparent hover:border-red-500 "
              >
                sold out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product_list;
