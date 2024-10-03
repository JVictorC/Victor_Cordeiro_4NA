import { Router } from "express";
import {
  getTransactions,
  addTransaction,
} from "../controllers/transactionController";

const router = Router();

router.get("/transaction", getTransactions);
router.post("/transaction", addTransaction);

export default router;
