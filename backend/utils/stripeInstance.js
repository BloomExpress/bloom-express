import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();

export const stripeInstance = stripe(process.env.STRIPE_API_KEY);
