import { useDispatch, useSelector } from 'react-redux'
import ProductListData from './ProductListData';
import { decrementItem, incrementItem, removeitem } from '../redux/reducer/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const list = useSelector((state) => state.cart.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className='text-center pb-10'>
            {
                list.length > 0 ? (
                    <>
                        {
                            list.map((item) => (
                                <ProductListData {...item} key={item.id}
                                    remove={() => dispatch(removeitem(item))}
                                    increment={() => dispatch(incrementItem(item))}
                                    decrement={() => dispatch(decrementItem(item))}
                                />

                            ))
                        }
                        <button onClick={() => navigate('/checkout')} className='px-2 py-1 rounded bg-green-500 text-white mt-10'>checkout page</button>
                    </>
                ) : (
                    <div className='pt-10'>
                        <h1>cart items not there</h1>
                        <span>    Go to                    < button onClick={() => navigate('/')} className='mt-5 text-sm text-blue-700 hover:cursor-pointer'> Home Page</button>
                        </span>
                    </div>
                )
            }
        </div>
    )
}
