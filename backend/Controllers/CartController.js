import { StatusCodes } from "http-status-codes";
import Cart from "../Models/Cart.js";

export const createCart = async (req, res) => {
  const { items, quantity, totalAmount } = req.body;
  try {
    const cart = await Cart.create({
      items,
      quantity,
      totalAmount,
    });

    return res.status(StatusCodes.CREATED).json({ message: "Cart created" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
