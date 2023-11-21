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
