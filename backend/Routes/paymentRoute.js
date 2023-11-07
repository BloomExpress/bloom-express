import express from "express";
import { createStripePayment } from "../Controllers/PaymentController.js";

const router = express.Router();

// route for creating new payment
router.post("/checkout", createStripePayment);

export default router;
