import React from 'react'

export default function ProductListData(props) {
    return (
        <div className='flex items-center justify-center pt-10 gap-3 font-medium'>

            <img src={props.image} className=' md:h-25 md:w-23 h-52 w-47 rounded' />
            <div className='flex md:flex-row md:items-center flex-col gap-3'>
                <div className='flex md:flex-row flex-col gap-1 md:gap-2 items-start md:items-center md:ms-0 ms-5'>
                    <h1 className="md:ms-3 text-start text-lg w-48 truncate" title={props.name}>
                        {props.name}
                    </h1>
                    <h1>price: ${props.price}</h1>
                    <h1>Discount: {props.discountPercentage}%</h1>
                    <h1>Rating: {props.rating}</h1>
                </div>

                <div className='ms-5 flex md:flex-row flex-col items-start md:items-center gap-3'>
                    <div className='flex gap-2 items-center'>
                        <button onClick={props.increment} className='md:bg-red-500 bg-blue-700 py-1 px-2 text-white rounded'>+</button>
                        <h1 className='font-normal'>Qty: {props.quantity} </h1>
                        <button onClick={props.decrement} className='md:bg-red-500 bg-blue-700 py-1 px-2.5 text-white rounded'>-</button>
                    </div>

                    <button onClick={props.remove} className='bg-red-500 py-1 px-2 text-white rounded'>Remove</button>
                </div>
            </div>




        </div>
    )
}
