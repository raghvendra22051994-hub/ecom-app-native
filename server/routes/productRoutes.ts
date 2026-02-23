import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productController.js";
import upload from "../middleware/upload.js";
import { authorized, protect } from "../middleware/auth.js";

const productRouter = express.Router();

// Get all products
productRouter.get("/", getProducts);

// Get single product
productRouter.get("/:id", getProduct);

// Create product (Admin only)
productRouter.post("/", upload.array("images", 5), protect, authorized("admin"), createProduct);

// Update product (Admin only)
productRouter.post("/", upload.array("images", 5), protect, authorized("admin"), updateProduct);

// Update product (Admin only)
productRouter.delete("/:id", protect, authorized("admin"), deleteProduct);

export default productRouter;