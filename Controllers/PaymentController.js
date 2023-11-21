import PaymentSession from "../Models/PaymentSession.js";
import { StatusCodes } from "http-status-codes";
import { stripeInstance } from "../utils/stripeInstance.js";
import dotenv from "dotenv";

dotenv.config();

export const createStripePayment = async (req, res) => {
  console.log(req.body);
  try {
    const lineItems = req.body.line_items;

    const session = await stripeInstance.checkout.sessions.create({
      line_items: lineItems,
      automatic_tax: {
        enabled: true,
      },
      mode: "payment",
      success_url:
        "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/cancel",
    });
    return res.send(
      JSON.stringify({
        url: session.url,
      })
    );
  } catch (error) {
    console.error(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "An error occurred while processing the payment." });
  }
};

export const retrieveSession = async (req, res) => {
  const sessionId = req.query.session_id;
  try {
    const existingSession = await PaymentSession.findOne({ sessionId });
    if (existingSession) {
      const { sessionId, email, name, payment_status } = existingSession;
      return res.send(
        JSON.stringify({
          paymentSessionId: existingSession._id,
          sessionId,
          email,
          name,
          payment_status,
        })
      );
    }

    const session = await stripeInstance.checkout.sessions.retrieve(sessionId);

    const email = session.customer_details.email;
    const name = session.customer_details.name;
    const payment_status = session.payment_status;

    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Payment Status:", payment_status);

    const paymentSession = new PaymentSession({
      sessionId,
      email,
      name,
      payment_status,
    });

    await paymentSession.save();

    return res.send(
      JSON.stringify({
        paymentSessionId: paymentSession._id,
        sessionId,
        email,
        name,
        payment_status,
      })
    );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const updateGreetingCard = async (req, res) => {
  const { message } = req.body;
  const { paymentSessionId } = req.params;
  try {
    const paymentSession = await PaymentSession.findByIdAndUpdate(
      paymentSessionId,
      {
        $set: {
          "greetingCard.enabled": true,
          "greetingCard.message": message,
        },
      },
      { new: true }
    );
    if (!paymentSession) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Payment session not found" });
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: "Greeting Card added successfully" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
