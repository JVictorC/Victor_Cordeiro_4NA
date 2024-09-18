import { Router } from "express";
import { getProducts, addProduct } from "../controllers/productsController";

const router = Router();

router.get("/products", getProducts);
router.post("/products", addProduct);

export default router;
