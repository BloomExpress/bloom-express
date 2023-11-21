import mongoose from "mongoose";
const { Schema, model } = mongoose;

const cartItemSchema = new mongoose.Schema(
  {
    bouquetId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the bouquet added to the cart
      ref: "bouquet",
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { timestamps: true }
);

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the user who added items to the cart
      ref: "user",
    },
    cartItems: [cartItemSchema], // Array of cart items
  },
  { timestamps: true }
);

const Cart = model("cart", cartSchema);

export default Cart;
