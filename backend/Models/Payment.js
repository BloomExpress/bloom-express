import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the user who made the payment
      ref: "User",
      required: true,
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the user's cart
      ref: "Cart",
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ["credit card", "PayPal", "Visa", "MasterCard", "other"],
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("payment", paymentSchema);

export default Payment;
