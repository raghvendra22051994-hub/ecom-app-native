import express from "express";
import { addToCart, clearCart, getCart, removeCartItem, updateCartItem } from "../controllers/cartController.js";
import { protect } from "../middleware/auth.js";

const cartRouter = express.Router();

// Get user cart
cartRouter.get("/", protect, getCart);

// Add item to cart
cartRouter.post("/add", protect, addToCart);

// Update cart item quantity
cartRouter.put("/item/:productId", protect, updateCartItem);

// Remove item from cart
cartRouter.delete("/item/:productId", protect, removeCartItem);

// Clear cart
cartRouter.delete("/", protect, clearCart);

export default cartRouter;