import PaymentSession from "../Models/PaymentSession.js";
import { StatusCodes } from "http-status-codes";
import { stripeInstance } from "../utils/stripeInstance.js";

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
