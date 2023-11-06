import express from "express";
import { createPaymentIntent } from "../Controllers/PaymentController.js";
import { stripeInstance } from "../utils/stripeInstance.js";

const router = express.Router();

// route for creating new payment
router.post("/createPaymentIntent", createPaymentIntent);
router.post("/checkout", async (req, res) => {
  console.log(req.body);
  const lineItems = req.body.line_items;

  const session = await stripeInstance.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

export default router;
