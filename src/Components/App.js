import React, { useEffect } from "react"
import Home from "./Home"
import Login from "./Login"
import Cart from "./Cart"
import Products from "./Products"
import CreateAccount from "./CreateAccount"
import Users from "./Users"
import NotFound from "./NotFound"
import SingleProductView from "./SingleProductView"
import { useSelector, useDispatch } from "react-redux"
import { loginWithToken, fetchCart, fetchProducts } from "../store"
import { Link, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
const App = () => {
  const { auth } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loginWithToken())
    dispatch(fetchProducts());
  }, [])

  useEffect(() => {
    if (auth.id) {
      dispatch(fetchCart())
    }
  }, [auth])
  return (
    <>
      <Navbar auth={auth} />
      <div className="flex justify-center">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/account/create" element={<CreateAccount />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/products/:id" element={<SingleProductView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
