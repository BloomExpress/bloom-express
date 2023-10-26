import Payment from "../Models/Payment.js";
import { StatusCodes } from "http-status-codes";

// Create a new payment
export const createPayment = async (req, res) => {
  const { userId, cartId, totalAmount, paymentMethod, transactionId, gdpr } =
    req.body;
  try {
    const newPayment = await Payment.create({
      userId,
      cartId,
      totalAmount,
      paymentMethod,
      transactionId, // You can include this if provided
      gdpr, // You can include this if provided
    });
    return res.status(201).json(newPayment);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the payment." });
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

    res.status(200).json(payments);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving payments." });
  }
};
