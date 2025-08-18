import React from 'react'
import Dashboard from './components/Dashboard'
import Header from './pages/Header'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Success from './pages/Success'

export default function Home() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout/">
                    <Route path="" element={<Checkout />} />
                    <Route path=':id' element={<Checkout />} />
                </Route>
                <Route path='/success' element={<Success />} />

            </Routes>
        </div>

    )
}
