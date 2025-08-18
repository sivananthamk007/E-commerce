import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProductListData from './ProductListData';
import products_datas from '../datas/product_datas';
import { decrementItem, incrementItem, removeitem } from '../redux/reducer/cartSlice';

export default function Checkout() {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.cart.list);
    const params = useParams();
    const navigate = useNavigate();
    const [local, setlocal] = useState();
    const [state, setstate] = useState(
        params.id ? [
            {
                ...products_datas.find(
                    (element) => element.id === parseInt(params.id)), quantity: 1
            }]
            :
            list
    );
    function incrementLocal(item) {
        const updated = state.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i

        );
        setstate(updated);
        console.log('increment')
    }
    function decrementLocal(item) {
        const updated = state.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity > 1 ? i.quantity - 1 : 1 } : i
        );
        setstate(updated);
        console.log('decrement')
    }
    function removeLocal(item) {
        const deleted = state.filter((i) => i.id !== item.id)
        setstate(deleted);
        console.log('removed')
    }
    return (
        <div className='text-center bg-amber-50 h-[100vh]'>
            {(params.id ? state.length : list.length) > 0 ? (
                <>
                    {params.id ?

                        state.map((item) => (
                            <ProductListData {...item} key={item.id}
                                remove={() => removeLocal(item)}
                                increment={() => incrementLocal(item)}
                                decrement={() => decrementLocal(item)}
                            />

                        ))
                        :
                        list.map((item) => (
                            <ProductListData {...item} key={item.id}
                                remove={() => dispatch(removeitem(item))}
                                increment={() => dispatch(incrementItem(item))}
                                decrement={() => dispatch(decrementItem(item))}
                            />

                        ))
                    }

                    <button onClick={() => navigate('/success')} className='px-2 py-1 rounded bg-green-500 text-white mt-10'>place order</button>


                </>
            ) : (
                <div className='pt-10'>
                    <h1>items not there</h1>
                </div>
            )
            }

        </div>
    )
}
