import { Router } from "express";
import {
  getAllProducts,
  getProductsById,
  createProducts,
  deleteProducts,
  updateProducts,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductsById);
router.post("/create", createProducts);
router.delete("/:id", deleteProducts);
router.put("/:id", updateProducts);

export default router;
