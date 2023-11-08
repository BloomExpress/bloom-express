import express from "express";
import {
  createStripePayment,
  retrieveSession,
} from "../Controllers/PaymentController.js";

const router = express.Router();

// route for creating new payment
router.post("/checkout", createStripePayment);
router.get("/success", retrieveSession);

export default router;
