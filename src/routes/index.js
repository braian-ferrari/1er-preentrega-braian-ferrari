const express = require("express");
const router = express.Router()

const productsRouter = require("./products")
const cartsRouter = require("./carts")

router.use("/api/carts", cartsRouter)
router.use("/api/carts/:cid", cartsRouter)
router.use("/api/products", productsRouter)
router.use("/api/products/:pid", productsRouter)

module.exports = router