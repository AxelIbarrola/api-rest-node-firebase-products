import { Router } from "express";
import {
  getAllProducts,
  getProductsById,
  createProducts,
  deleteProducts,
  updateProducts,
} from "../controllers/products.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductsById);
router.post("/create", auth, createProducts);
router.delete("/:id", auth, deleteProducts);
router.put("/:id", auth, updateProducts);

export default router;
