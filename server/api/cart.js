const express = require("express")
const app = express.Router()
const { User } = require("../db")

/*** Cart for Users and Guests ***/

// Get the cart
app.get("/", async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const user = await User.findByToken(req.headers.authorization)
      res.send(await user.getCart()) // authenticated user
    } else {
      res.send(await User.getGuestCart(req.body.userId)) // guest user
    }
  } catch (ex) {
    next(ex)
  }
})

// Add an item to the cart
app.post("/", async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const user = await User.findByToken(req.headers.authorization)
      res.send(await user.addToCart(req.body)) // authenticated user
    } else {
      res.send(await User.addToGuestCart(req.body.userId, req.body)) // guest user
    }
  } catch (ex) {
    next(ex)
  }
})

// Remove an item from the cart
app.put("/", async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const user = await User.findByToken(req.headers.authorization)
      res.send(await user.removeFromCart(req.body)) // authenticated user
    } else {
      res.send(await User.removeFromGuestCart(req.body.userId, req.body)) //guest user
    }
  } catch (ex) {
    next(ex)
  }
})

module.exports = app
