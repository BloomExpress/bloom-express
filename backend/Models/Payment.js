import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the user who made the payment
      ref: "user",
      required: true,
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the user's cart
      ref: "cart",
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
    transactionId: {
      type: String, // You can define the type accordingly (e.g., String, ObjectId)
    },
    gdpr: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
