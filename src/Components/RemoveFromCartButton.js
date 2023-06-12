import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, removeFromGuestCart } from "../store"

const RemoveFromCartButton = (props) => {
  const dispatch = useDispatch()
  const { auth, cart } = useSelector((state) => state)
  const { product } = props

  const handleRemoveFromCart = () => {
    const quantityToRemove = 1

    // If the user is logged in and the product is in the cart, remove it
    if (
      auth.id &&
      cart.lineItems.find((item) => item.productId === product.id)
    ) {
      if (auth.isAuthenticated) {
        dispatch(removeFromCart({ product, quantityToRemove }))
      } else {
        dispatch(removeFromGuestCart({ product, quantityToRemove }))
      }
    }
  }

  // If the product is in the cart, show the remove button, otherwise do nothing
  const isInCart = cart.lineItems.find((item) => item.productId === product.id)
  if (isInCart) {
    return (
      <div className="flex w-full flex-row-reverse p-2">
        <button
          onClick={handleRemoveFromCart}
          className="btn-secondary btn-sm btn text-base-300"
        >
          Remove From Cart
        </button>
      </div>
    )
  }

  return null
}

export default RemoveFromCartButton
