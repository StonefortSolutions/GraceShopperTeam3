const express = require("express")
const app = express.Router()
const { User } = require("../db")

module.exports = app

// Create an order for Users and Guest Users
app.post("/", async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      // Authenticated User
      const user = await User.findByToken(req.headers.authorization)
      const order = await user.createOrder(req.body.data)
      res.send(order)
    } else {
      // Guest User
      const guestCart = await User.getGuestCart(req.body.userId) // Provide the userId here
      const order = await User.createGuestOrder(guestCart, req.body.data)
      res.send(order)
    }
  } catch (ex) {
    next(ex)
  }
})
