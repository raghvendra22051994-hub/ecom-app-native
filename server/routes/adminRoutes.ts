import express from "express";
import { authorized, protect } from "../middleware/auth.js";
import { getDashboardStats } from "../controllers/adminController.js";

const adminRouter = express.Router();

// Get dashboard stats
adminRouter.get("/stats", protect, authorized("admin"), getDashboardStats);

export default adminRouter;