import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, removeFromGuestCart } from "../store"

const RemoveFromCartButton = (props) => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state)
  const handleClick = () => {
    if (auth.id) {
      dispatch(removeFromCart(props))
    } else {
      dispatch(removeFromGuestCart(props))
    }
  }
  return (
    <div className="flex w-full flex-row-reverse p-2">
      <button
        onClick={() => handleClick()}
        className="btn-error btn-sm btn text-base-300 hover:bg-red-400"
      >
        Remove From Cart
      </button>
    </div>
  )
}

export default RemoveFromCartButton

// dispatch(removeFromCart({product, quantityToRemove:1}))}
