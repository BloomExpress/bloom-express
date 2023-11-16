import mongoose from "mongoose";

const paymentSessionSchema = new mongoose.Schema(
  {
    sessionId: String,
    email: String,
    name: String,
    payment_status: String,
    greetingCard: {
      enabled: { type: Boolean, default: false },
      message: String,
    },
  },
  { timestamps: true }
);

const PaymentSession = mongoose.model("PaymentSession", paymentSessionSchema);

export default PaymentSession;
// userId: {
//   type: mongoose.Schema.Types.ObjectId, // Reference to the user who made the payment
//   ref: "user",
//   required: true,
// },
// cartId: {
//   type: mongoose.Schema.Types.ObjectId, // Reference to the user's cart
//   ref: "cart",
//   required: true,
// },
// totalAmount: {
//   type: Number,
// },
// paymentMethod: {
//   type: String,
//   enum: ["credit card", "PayPal", "Visa", "MasterCard", "other"],
// },
// transactionId: {
//   type: String, // You can define the type accordingly (e.g., String, ObjectId)
// },
// gdpr: {
//   type: Boolean,
//   default: false,
// },
