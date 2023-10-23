import mongoose from "mongoose";
const { Schema, model } = mongoose;

const cartItemSchema = new Schema({
  name: String,
  price: Number,
});

const cartSchema = new Schema(
  {
    quantity: Number,
    totalAmount: Number,
    items: [cartItemSchema],
  },
  { timestamps: true }
);

const Cart = model("cart", cartSchema);

export default Cart;
