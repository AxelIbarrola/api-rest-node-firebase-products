import { Router } from "express";
import { login } from "../controllers/aut.controller.js";

const router = Router();

router.post("/login", login);

export default router;
