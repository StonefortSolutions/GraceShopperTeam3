import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, addToGuestCart } from "../store"

const AddToCartButton = (props) => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state)
  if (auth.id) {
    // for logged in users
    return (
      <div className="flex w-full flex-row-reverse p-2">
        <button
          onClick={() => dispatch(addToCart(props))}
          className="btn-secondary btn-sm btn text-base-300"
        >
          Add to Cart
        </button>
      </div>
    )
  } else {
    return (
      // for guest users
      <div className="flex w-full flex-row-reverse p-2">
        <button
          onClick={() => dispatch(addToGuestCart(props))}
          className="btn-secondary btn-sm btn text-base-300"
        >
          Add to Cart
        </button>
      </div>
    )
  }
}

export default AddToCartButton
