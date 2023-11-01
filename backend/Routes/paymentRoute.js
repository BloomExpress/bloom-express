import express from "express";
import { createPaymentIntent } from "../Controllers/PaymentController.js";

const router = express.Router();

// route for creating new payment
router.post("/createPaymentIntent", createPaymentIntent);

export default router;
