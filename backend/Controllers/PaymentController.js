import Payment from "../Models/Payment.js";
import { StatusCodes } from "http-status-codes";
import { stripeInstance } from "../utils/stripeInstance.js";
import { calculateOrderAmount } from "../helpers/paymentHelper.js";

export const createPaymentIntent = async (req, res) => {
  const { userId, cartId } = req.body;

  try {
    const totalAmount = await calculateOrderAmount(req.body.cartItems);

    // Process a payment with Stripe
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: totalAmount,
      currency: "eur",
    });

    console.log("Generated clientSecret:", paymentIntent.client_secret);

    const newPayment = new Payment({
      userId,
      cartId,
      totalAmount,
    });

    const savedPayment = await newPayment.save();

    return res.status(StatusCodes.CREATED).json({
      payment: savedPayment,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "An error occurred while processing the payment." });
  }
};
