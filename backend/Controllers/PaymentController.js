import Payment from "../Models/Payment.js";
import { StatusCodes } from "http-status-codes";
import { stripeInstance } from "../utils/stripeInstance.js";
import { calculateOrderAmount } from "../helpers/paymentHelper.js";

export const createStripePayment = async (req, res) => {
  console.log(req.body);
  try {
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
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "An error occurred while processing the payment." });
  }
};
