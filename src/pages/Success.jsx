import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const navigate = useNavigate();
    const [count, setcount] = useState(15);

    useEffect(() => {
        setInterval(() => {
            setcount((count) => count - 1)
        }, 1000);
        setTimeout(() => navigate('/'), 15000);

    }, [])
    return (
        <div className='pt-5 text-center bg-green-200 h-[100vh] text-gray-700'>
            <h3>Your order have been placed successfully. You will redirected in <span className='text-yellow-700'>{count}</span> seconds</h3>
        </div>
    )
}
