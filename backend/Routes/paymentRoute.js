import express from "express";
import {
  getPayments,
  createPayment,
} from "../Controllers/PaymentController.js";

const router = express.Router();

// route for creating new payment
router.post("/createPayment", createPayment);
router.get("/getPayments", getPayments);

export default router;
