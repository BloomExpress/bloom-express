import Payment from "../Models/Payment.js";
import { StatusCodes } from "http-status-codes";
import { stripeInstance } from "../utils/stripeInstance.js";

// Create a new payment
export const createPayment = async (req, res) => {
  const { userId, cartId, totalAmount, paymentMethod, transactionId, gdpr } =
    req.body;

  try {
    // Process a payment with Stripe
    const stripeResponse = await stripeInstance.paymentIntents.create({
      amount: totalAmount * 100, // Amount in cents
      currency: "eur",
    });

    // Extract the Stripe transaction ID
    const stripeTransactionId = stripeResponse.id;

    // Create a new payment record and store the Stripe transaction ID
    const newPayment = new Payment({
      userId,
      cartId,
      totalAmount,
      paymentMethod,
      transactionId: stripeTransactionId,
      gdpr,
    });

    // Save the payment record to your database
    const savedPayment = await newPayment.save();

    return res.status(StatusCodes.CREATED).json(savedPayment);
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "An error occurred while processing the payment." });
  }
};

// Retrieve a list of payments
export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({})
      .populate({
        path: "userId",
        select: "firstName lastName email",
      })
      .populate({
        path: "cartId",
        select: "cartItems",
      });

    res.status(StatusCodes.OK).json(payments);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "An error occurred while retrieving payments." });
  }
};
