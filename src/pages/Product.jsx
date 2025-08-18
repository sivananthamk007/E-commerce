import { useNavigate, useParams } from "react-router-dom";
import products_datas from "../datas/product_datas";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../redux/reducer/cartSlice"; // ✅ correct import
import { useState } from "react";

export default function Product() {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const [alert, setAlert] = useState(false);

    const props = products_datas.find(
        (element) => element.id === parseInt(params.id)
    );
    const list = useSelector((state) => state.cart.list);
    console.log(list)
    const element = list.find((item) => item.id === props.id)

    console.log("element ", element);

    const AddtoCart = () => {
        setAlert(true);
        setTimeout(() => setAlert(false), 3000)
        dispatch(addtoCart(props)); // ✅ dispatch action
    };

    return (
        <div>
            <div className="flex flex-col items-center gap-3 mt-5">
                {alert && <span className="text-gray-500">Item added to cart</span>}
                <div>
                    <img
                        src={props.image}
                        alt={props.name}
                        className="h-70 w-70 rounded-lg"
                    />
                </div>
                <div className="text-sm text-center text-gray-700">
                    <h1 className="text-lg font-semibold text-gray-900">
                        {props.name}
                    </h1>
                    <h1 className="mt-1">price:${props.price}</h1>
                    <h1>discount:{props.discountPercentage}</h1>
                    <h1>rating:{props.rating}</h1>
                </div>
                <div className="mt-2">
                    {props.stock > 0 ? (
                        <div className="flex gap-3">
                            <button onClick={() => navigate(`/checkout/${props.id}`)} className="px-4 py-1 bg-green-600 rounded text-white">
                                Buy Now
                            </button>
                            {
                                element?.quantity > 0 ? (
                                    <button onClick={() => navigate("/cart")} className="px-2 py-1 bg-white border border-yellow-600 rounded">Go to Cart</button>
                                ) : (
                                    <button
                                        className="px-4 py-1 bg-orange-500 rounded text-white"
                                        onClick={AddtoCart}
                                    >
                                        Add to Cart
                                    </button>
                                )
                            }
                        </div>
                    ) : (
                        <button className="border border-red-500 px-3 py-1 rounded hover:bg-red-600 hover:text-white">
                            sold out
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
