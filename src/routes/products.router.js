import { Router } from "express";
import {
  getAllProducts,
  getProductsById,
  createProducts,
  deleteProducts,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductsById);
router.post("/create", createProducts);
router.delete("/:id", deleteProducts);

export default router;
