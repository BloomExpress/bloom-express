import express from "express";
import {
  createStripePayment,
  retrieveSession,
  updateGreetingCard,
} from "../Controllers/PaymentController.js";

const router = express.Router();

// route for creating new payment
router.post("/checkout", createStripePayment);

//http://localhost:5000/api/payments/success?session_id=cs_test_a1YUXzgAfEwgZ3gGqKPQzd4b0E094U26vaQpw7PmwmWu7CCbL6IxaslJOj (SessionId)
router.get("/success", retrieveSession);

//http://localhost:5000/api/payments/greetingCard/manoloscipi@gmail.com
router.put("/greetingCard/:email", updateGreetingCard);

export default router;
