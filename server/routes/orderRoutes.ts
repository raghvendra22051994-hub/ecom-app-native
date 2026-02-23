import express from "express";
import { authorized, protect } from "../middleware/auth.js";
import { createOrder, getAllOrders, getOrder, getOrders, updateOrderStatus } from "../controllers/ordersController.js";

const orderRouter = express.Router();

// Get user orders
orderRouter.get("/", protect, getOrders);

// Get single order
orderRouter.get("/:id", protect, getOrder);

// Create order from cart
orderRouter.post("/", protect, createOrder);

// Update order status (Admin only)
orderRouter.put("/", protect, authorized("admin"), updateOrderStatus);

// Get all orders (Admin only)
orderRouter.get("/admin/all", protect, authorized("admin"), getAllOrders);

export default orderRouter;