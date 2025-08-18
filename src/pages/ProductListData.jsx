import React from 'react'

export default function ProductListData(props) {
    return (
        <div className='flex items-center justify-center pt-10 gap-3 font-medium'>

            <img src={props.image} className=' h-25 w-23 rounded' />
            <h1 className="ms-3 text-lg w-48 truncate" title={props.name}>
                {props.name}
            </h1>
            <h1>price: ${props.price}</h1>
            <h1>Discount: {props.discountPercentage}%</h1>
            <h1>Rating: {props.rating}</h1>
            <div className='ms-2 flex items-center gap-3'>
                <button onClick={props.increment} className='bg-red-500 py-1 px-2 text-white rounded'>+</button>
                <h1 className='font-normal'>Quantity: {props.quantity} </h1>
                <button onClick={props.decrement} className='bg-red-500 py-1 px-2.5 text-white rounded'>-</button>
                <button onClick={props.remove} className='bg-red-500 py-1 px-2 text-white rounded'>Remove</button>
            </div>



        </div>
    )
}
